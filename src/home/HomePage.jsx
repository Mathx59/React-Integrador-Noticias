import { CardList } from "./CardList";
import { Footer } from "./Footer";
import { Slider } from "./Slider";

import { useEffect, useContext } from "react";
import { PostContext } from "../context/PostContext";
import { useInit } from "../utils/useInit";
import { Title } from "./Title";

export const HomePage = () => {
  const { postState, setPostState } = useContext(PostContext);
  const { loadData } = useInit();

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      return;
    } else {
      let posts = loadData();
      setPostState(posts);
    }
  }, []);
  return (
    <>
      <div className=" bg-gradient-to-b from-rose-100 to-teal-100">
        <Title />
        <Slider />
        <h1 className="text-center mb-10 mt-20">Últimas Noticias</h1>
        <CardList postState={postState} />
        <Footer />
      </div>
    </>
  );
};
