import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import { Markup } from "interweave";

export const SearchResult = () => {
  const { result } = useContext(PostContext);
  const { postState } = useContext(PostContext);

  let foundPost = postState.filter((post) => {
    return post.titulo.toLowerCase().includes(result.toLocaleLowerCase());
  });

  return (
    <>
      <div className="bg-orange-100  pb-5">
        {foundPost == 0 ? (
          <div className="h-screen pt-20">
            <div className="alert alert-warning shadow-lg md:max-w-[50%] justify-center mx-auto">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="max-h-screen">
                  No hay resultados de búsqueda!
                </span>
              </div>
            </div>
          </div>
        ) : (
          foundPost.map((post) => {
            let cuerpoHtml = post.cuerpo;
            let cuerpoString = cuerpoHtml.replace(/<[^>]+>/g, "<p>");
            return (
              <div className="grid grid-cols-1 gap-20 mt-20 pt-20 justify-items-center container mx-auto ">
                <div
                  key={post.id}
                  className="card md:card-side mx-4 sm:mx-0 bg-base-100 shadow-xl md:max-w-[50%]"
                >
                  <figure>
                    <img className="w-96" src={post.imagen} alt="Titulo" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{post.titulo}</h2>
                    <p className="line-clamp-1 text-sm max-w-prose ...">
                      <Markup content={cuerpoString} />
                    </p>
                    <div className="card-actions justify-end">
                      <Link to={`/post/${post.id}`}>
                        <button className="btn btn-primary">Leer mas</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Footer />
    </>
  );
};
