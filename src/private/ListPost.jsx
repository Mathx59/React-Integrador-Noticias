import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import { RiQuestionLine } from "react-icons/ri";
import { RemoveAlert } from "./alerts/RemoveAlert";

export const ListPost = ({ postState, remove, ReadPost }) => {
  const [idToRemove, setIdToRemove] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showBadge, setShowBadge] = useState("hidden");

  const alertRemove = (id) => {
    setIdToRemove(id);
    setShowAlert(true);
  };

  const removePost = () => {
    remove(idToRemove);
    setShowAlert(false);
    setShowBadge("");
  };

  return (
    <>
      <RemoveAlert showBadge={showBadge} setShowBadge={setShowBadge} />
      {showAlert && (
        <div class="alert alert-warning shadow-lg justify-center fixed bottom-0 z-20">
          <div>
            <RiQuestionLine className="text-2xl" />

            <span>Seguro que deseas borrar el artículo?</span>
          </div>
          <button
            className="btn btn-outline btn-sm"
            onClick={(e) => {
              removePost();
            }}
          >
            SI
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={(e) => setShowAlert(false)}
          >
            NO
          </button>
        </div>
      )}
      <div className="overflow-x-auto mx-auto md:w-2/3">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Artículo</th>
              <th>Autor</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {postState.map((post) => {
              return (
                <tr key={post.id}>
                  <th></th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img src={post.imagen} alt="Imagen del Artículo" />
                        </div>
                      </div>
                      <div onClick={(e) => ReadPost(post.id)}>
                        <Link to={`/post/${post.id}`}>
                          <div className="font-bold break-words whitespace-normal">
                            {post.titulo}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    {post.user}
                    <br></br>
                  </td>
                  <td>
                    <span className="badge badge-secondary badge-md">
                      {post.categoria}
                    </span>
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost btn-md"
                      onClick={(e) => alertRemove(post.id)}
                    >
                      <h3>
                        <FiTrash2 className="text-2xl" />
                      </h3>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
