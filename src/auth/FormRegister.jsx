import { Link } from "react-router-dom";
export const FormRegister = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  setErrorReg,
}) => {
  const hideError = () => {
    setErrorReg(false);
  };
  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Nombre de Usuario</span>
              </label>
              <input
                type="text"
                {...register("username", {
                  required: true,
                })}
                placeholder="ingresá un nombre"
                className="input input-bordered"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-xs text-rose-600">Este campo es requerido</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-xs text-rose-600">
                El formato del email es incorrecto
              </p>
            )}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Correo Electrónico</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
                onChange={hideError}
                placeholder="ingresá tu correo"
                className="input input-bordered"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-xs text-rose-600">Este campo es requerido</p>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                })}
                placeholder="ingresá tu contraseña"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-xs text-rose-600">Este campo es requerido</p>
              )}
            </div>
            <div className="divide-y-4">
              <div>
                <div className="form-control mt-6 mb-6 ">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Registrarse"
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <p className="label-text-alt text-center font-bold ">
                    Ya tenés una cuenta? Iniciá sesión ahora!
                  </p>
                </label>
                <Link to={"/login"}>
                  <div className="form-control mt-2">
                    <button onClick={hideError} className="btn btn-secondary">
                      Iniciar sesión
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
