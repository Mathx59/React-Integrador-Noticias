import { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { IoFlash } from "react-icons/io5";

import { PostContext } from "../context/PostContext";

export const NavBar = () => {
  const { setResultState } = useContext(PostContext);
  const { isLoggedIn } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const Results = (e) => {
    navigate("/results");
    let data = e.target.value;

    setResultState(data);

    if (data.length <= 0) {
      navigate("/");
    }
  };

  return (
    <>
      <div
        data-theme="dracula"
        className="navbar  bg-base-100 flex justify-evenly sticky top-0 z-30 "
      >
        <div className="">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl ">
            <IoFlash />
          </NavLink>
        </div>
        <div></div>
        <div className="  gap-2">
          <div className="form-control">
            <input
              onChange={Results}
              type="text"
              placeholder="Buscar"
              className="input input-bordered"
            />
          </div>

          {isLoggedIn ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/dashboard" className="justify-between">
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/logout">Salir</NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/dashboard" className="justify-between pr-4">
              <button className="btn glass btn-sm  md:btn-md">ingresar</button>
            </NavLink>
          )}
        </div>
      </div>
      <div className=" ">
        <div
          className="livecoinwatch-widget-5 min-h-min "
          lcw-base="USD"
          lcw-color-tx="#abb8c3"
          lcw-marquee-1="coins"
          lcw-marquee-2="movers"
          lcw-marquee-items="10"
        ></div>
      </div>

      {/*  </SearchContext.Provider> */}
    </>
  );
};
