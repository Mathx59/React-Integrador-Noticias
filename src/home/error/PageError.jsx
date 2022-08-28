import { NavLink } from "react-router-dom";
import { Footer } from "../Footer";

export const PageError = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-rose-100 py-6 sm:py-8 lg:py-12 h-screen">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p>
              <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                Página no encontrada
              </h1>

              <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
                Ouch! Lá página que estás buscando no existe.
              </p>
              <NavLink to="/">
                <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Ir a la Página de Inicio
                </a>
              </NavLink>
            </div>

            <div className="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg relative">
              <img
                src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by @heydevn"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
