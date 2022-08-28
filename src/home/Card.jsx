import { Link } from "react-router-dom";
import { Markup } from "interweave";

import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export const Card = () => {
  const { postState } = useContext(PostContext);
  return (
    <>
      {postState.map((post) => {
        let cuerpoHtml = post.cuerpo;
        let cuerpoString = cuerpoHtml.replace(/<[^>]+>/g, "<p>");
        return (
          <div
            key={post.id}
            className=" card w-96 mx-1 bg-base-100 shadow-xl hover:cursor-pointer"
          >
            <Link to={`/post/${post.id}`}>
              <figure>
                <img src={post.imagen} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.titulo}</h2>
                <span className="line-clamp-3 ">
                  <Markup content={cuerpoString} />
                </span>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{post.categoria}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};
