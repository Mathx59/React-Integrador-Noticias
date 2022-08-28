import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("AUTH_APP") ?? false
  );

  const [errorReg, setErrorReg] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const regUser = useCallback((data) => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user != null && user.email === data.email) {
      setErrorReg(true);
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));

    localStorage.setItem("AUTH_APP", true);
    setIsLoggedIn(true);
  }, []);

  const login = useCallback((data) => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user === null) {
      setErrorLogin("user");
    } else if (user.email != data.email) {
      setErrorLogin("user");
    } else if (user.password != data.password) {
      setErrorLogin("password");
    } else {
      localStorage.setItem("AUTH_APP", true);
      setIsLoggedIn(true);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("AUTH_APP");
    setIsLoggedIn(false);
  }, []);

  const user = useCallback(() => {
    let name = JSON.parse(localStorage.getItem("user"));
    return name.username;
  });

  const value = useMemo(
    () => ({
      regUser,
      login,
      logout,
      isLoggedIn,
      errorReg,
      setErrorReg,
      errorLogin,
      setErrorLogin,
      user,
    }),
    [
      regUser,
      login,
      logout,
      isLoggedIn,
      errorReg,
      setErrorReg,
      errorLogin,
      setErrorLogin,
      user,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
