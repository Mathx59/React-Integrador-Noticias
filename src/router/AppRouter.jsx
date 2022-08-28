import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { data } from "../db/data";
import {
  HOME,
  LOGIN,
  LOGOUT,
  SEARCH,
  PRIVATE,
  REGISTER,
} from "../config/routes/paths";

import { PostContext } from "../context/PostContext";
import { HomePage } from "../home/HomePage";
import { NavBar } from "../header/NavBar";
import { LoginPage } from "../auth/LoginPage";
import { RegisterPage } from "../auth/RegisterPage";
import { SearchResult } from "../home/search/SearchResult";
import { ReadPost } from "../home/singlepost/ReadPost";
import { useAuthContext } from "../context/authContext";
import { Dashboard } from "../private/Dashboard";
import { Logout } from "../private/Logout";
import { useInit } from "../utils/useInit";
import { PageError } from "../home/error/PageError";

function AppRouter() {
  const [postState, setPostState] = useState([]);

  const [result, setResultState] = useState("");

  const { loadPage, loadData } = useInit(data);

  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      loadPage();
      let posts = loadData();
      setPostState(posts);
    }
  }, []);

  return (
    <div data-theme="fantasy">
      <PostContext.Provider
        value={{
          postState,
          setPostState,
          result,
          setResultState,
        }}
      >
        <NavBar />
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route
            path={LOGIN}
            element={
              !isLoggedIn ? <LoginPage /> : <Navigate to={"/dashboard"} />
            }
          />
          <Route path={SEARCH} element={<SearchResult />} />
          <Route path="/post/:{id}" element={<ReadPost />} />
          <Route
            path={REGISTER}
            element={
              !isLoggedIn ? <RegisterPage /> : <Navigate to={"/dashboard"} />
            }
          />
          <Route path="post/:id" element={<ReadPost />}></Route>
          <Route
            path={PRIVATE}
            element={isLoggedIn ? <Dashboard /> : <Navigate to={"/login"} />}
          />
          <Route
            path={LOGOUT}
            element={isLoggedIn ? <Logout /> : <Navigate to={"/"} />}
          />

          <Route path="*" element={<PageError />} />
        </Routes>
      </PostContext.Provider>
    </div>
  );
}

export default AppRouter;
