import {
  useReducer,
  useEffect,
  useContext,
  useMemo,
  useCallback,
  useState,
} from "react";
import { useInit } from "../utils/useInit";
import { PostReducer } from "../utils/PostReducer";

import { FormPost } from "./FormPost";
import { ListPost } from "./ListPost";
import { PostContext } from "../context/PostContext";
import { useAuthContext } from "../context/authContext";
import { Footer } from "../home/Footer";

export const Dashboard = () => {
  const { loadData } = useInit([]);
  const [posts, dispatch] = useReducer(PostReducer, [], loadData);
  const { postState, setPostState } = useContext(PostContext);

  //const { slugIdState, setSlugIdState } = useContext(PostContext);
  const { user } = useAuthContext();

  const ReadPost = (id) => {
    setSlugIdState(id);
  };

  const addPost = (data) => {
    const action = {
      type: "create",
      payload: data,
    };
    dispatch(action);
  };

  const remove = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
    let dataPost = loadData();
    setPostState(dataPost);
  }, [posts]);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto text-center pt-10 font-bold text-4xl">
          <h1>{`Bienvenido ${user()}`}</h1>
        </div>
        <FormPost addPost={addPost} />
        <ListPost postState={postState} remove={remove} ReadPost={ReadPost} />
        <Footer />
      </div>
    </>
  );
};
