import React, { useEffect } from 'react';
import PrimaryButton from '../../custom-ui/PrimaryButton';

const Contact = () => {
  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100  py-2 ">
      {/* Contenedor izquierdo con formulario */}
      <div className="flex-1 pl-12 pr-2">
        <form className="rounded bg-white p-6 shadow-md">
          <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-red-500">
            CONTACTANOS
          </h2>
          <div className="mb-4 text-center">
            Si tiene más preguntas, incluidas oportunidades de asociación, envíe
            un correo electrónico a hello@dhtechnology.com o comuníquese
            mediante nuestro formulario de contacto.
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="name"
                className="mb-2 block font-bold text-gray-700"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border bg-white px-3 py-2 shadow-md transition-all duration-300 ease-in-out hover:border-gray-400 focus:border-none"
                placeholder="Tu nombre"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="email"
                className="mb-2 block font-bold text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border bg-white px-3 py-2 shadow-md transition-all duration-300 ease-in-out hover:border-gray-400 focus:border-none"
                placeholder="ejemplo@email.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block font-bold text-gray-700"
            >
              ¿Cómo podemos ayudarte?
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full rounded-md border bg-white px-3 py-2 shadow-md transition-all duration-300 ease-in-out hover:border-gray-400 focus:border-none"
              placeholder="Quiero saber..."
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <PrimaryButton type="submit">Enviar</PrimaryButton>
          </div>
        </form>
      </div>

      {/* Contenedor derecho con imagen */}
      <div className="bottom-0 h-auto flex-1">
        <img
          src="/img/img-contact.webp"
          alt="bg-contact"
          className="h-full w-full rounded object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;
