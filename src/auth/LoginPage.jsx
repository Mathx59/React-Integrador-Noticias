import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/authContext";
import { FormLogin } from "./FormLogin";
import { RiInformationLine } from "react-icons/ri";

export const LoginPage = () => {
  const { login, errorLogin, setErrorLogin } = useAuthContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setErrorLogin("");
    login(data);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Ingresar</h1>
            <p className="py-6">
              Ingresa a tu cuenta para poder subir y editar tus propios
              artículos de noticias!
            </p>
          </div>

          <FormLogin
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            setErrorLogin={setErrorLogin}
          />
        </div>
        {errorLogin != "" && (
          <div className="alert alert-error shadow-lg justify-center fixed bottom-0">
            <div>
              <RiInformationLine className="text-2xl" />

              {errorLogin === "user" && (
                <span>
                  El correo electrónico ingresado no se encuentra asociado a
                  ninguna cuenta.
                </span>
              )}
              {errorLogin === "password" && (
                <span>La contraseña ingresada es incorrecta.</span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
