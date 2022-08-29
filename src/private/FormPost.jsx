import { useState } from "react";
import { useForm } from "react-hook-form";
import { RichTextEditor } from "../utils/RichTextEditor";
import { SubmitPost } from "./alerts/SubmitPost";

export const FormPost = ({ addPost }) => {
  const [value, setValue] = useState("");
  const [editorReq, setEditorReq] = useState(false);
  const [showBadge, setShowBadge] = useState("hidden");
  const getValue = (value) => {
    setValue(value);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    if (value === "" || value === null) {
      setEditorReq(true);
      return;
    } else {
      let formData = { ...data, cuerpo: value };
      setEditorReq(false);
      addPost(formData);
      setValue("");
      e.target.reset();
      setShowBadge("");
    }
  };

  return (
    <>
      <section>
        <SubmitPost showBadge={showBadge} setShowBadge={setShowBadge} />
        <div className="px-4 py-12 mx-auto max-w-7xl">
          <div className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-8/12 md:px-6 sm:mt-8 sm:mb-5">
            <h1 className="mb-5 text-xl font-light text-left text-gray-800 text-center">
              Agregar nuevo artículo
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pb-1 space-y-4 mx-auto text-center"
            >
              <label className="block">
                <input
                  type="text"
                  {...register("titulo", {
                    required: true,
                  })}
                  placeholder="Título"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                {errors.titulo?.type === "required" && (
                  <p className="text-xs text-rose-600">
                    Este campo es requerido
                  </p>
                )}
              </label>
              <label className="block">
                <input
                  type="text"
                  {...register("imagen", {
                    required: true,
                    pattern: /\/\/(\S+?(?:jpe?g|png|gif))/gi,
                  })}
                  placeholder="Imagen URL"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                {errors.imagen?.type === "required" && (
                  <p className="text-xs text-rose-600">
                    Este campo es requerido
                  </p>
                )}
                {errors.imagen?.type === "pattern" && (
                  <p className="text-xs text-rose-600">
                    La URL de la imágen es incorrecta
                  </p>
                )}
              </label>
              <select
                {...register("categoria", {
                  required: true,
                })}
                className="select select-accent w-full max-w-xs"
              >
                <option disabled value>
                  Elegí una categoría
                </option>
                <option>Bitcoin</option>
                <option>Metaverso</option>
                <option>Blockchain</option>
                <option>NFT</option>
                <option>Altcoins</option>
                <option>Tecnología</option>
                <option>Opinión</option>
              </select>
              <h2 className="mb-5 pt-12 text-xl font-light text-left text-gray-800 text-center">
                Contenido
              </h2>
              <RichTextEditor
                initialValue={value}
                getValue={getValue}
              ></RichTextEditor>

              {value === "" && editorReq === true ? (
                <p className="text-xs text-rose-600">Este campo es requerido</p>
              ) : (
                <p></p>
              )}
              <div className="flex items-center justify-evenly">
                <label className="flex items-center">
                  <input
                    type="submit"
                    className="btn btn-primary mx-4"
                    value="Subir"
                  />
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2 font-bold">
                        Destacar en portada?
                      </span>
                      <input
                        type="checkbox"
                        className="toggle toggle-secondary"
                        {...register("slider")}
                      />
                    </label>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
