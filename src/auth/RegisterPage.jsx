import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/authContext";
import { FormRegister } from "./FormRegister";
import { RiInformationLine } from "react-icons/ri";

export const RegisterPage = () => {
  const { regUser, errorReg, setErrorReg } = useAuthContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    regUser(data);
  };

  return (
    <>
      <div className="bg-base-200">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Crear Cuenta</h1>
              <p className="py-6">
                Create una cuenta para poder subir y editar tus propios
                artículos de noticias!
              </p>
            </div>

            <FormRegister
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmit={onSubmit}
              setErrorReg={setErrorReg}
            />
          </div>
        </div>
        {errorReg && (
          <div className="alert alert-error shadow-lg justify-center fixed bottom-0">
            <div>
              <RiInformationLine className="text-2xl" />
              <span>
                El correo electrónico ingresado ya existe asociado a un usuario.
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
