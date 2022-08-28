import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Footer } from "../Footer";
export const ReadPost = () => {
  const navigate = useNavigate();

  let { id } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts"));

  const onePost = useMemo(
    () => posts.find((posts) => String(posts.id) === id),
    []
  );

  return (
    <>
      <article
        className="px-4 pt-12 pb-12 mx-auto max-w-7xl"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
          <img
            src={onePost.imagen}
            className="object-cover w-full h-64 bg-center rounded-lg"
            alt="Kutty"
          />
          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
            {onePost.categoria}
          </p>
          <h1
            className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            itemProp="headline"
            title="Titulo"
          >
            {onePost.titulo}
          </h1>
          <div className="flex mb-6 space-x-2"></div>
          <a className="flex items-center text-gray-700" href="#">
            <div>
              <img
                className="rounded-full"
                src="https://placeimg.com/80/80/people"
                alt="img de usuario"
              />
            </div>
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-800">
                {onePost.user}
              </p>
              <p className="text-sm text-gray-500">2022</p>
            </div>
          </a>
        </div>

        <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
          <div dangerouslySetInnerHTML={{ __html: onePost.cuerpo }} />

          <p>...</p>
        </div>
      </article>
      <div className="mx-auto text-center mb-12">
        <button
          className="btn btn-outline btn-secondary"
          onClick={() => navigate(-1)}
        >
          ← Volver
        </button>
      </div>
      <Footer />
    </>
  );
};
