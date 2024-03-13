import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../custom-ui/PrimaryButton';

const About = () => {
  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img
          src="/img/section-1about.webp"
          alt="Top-abt-img"
          className="w-full"
        />
        <h1 className="py-8 text-3xl font-bold text-red-500">
          LA MEJOR TECNOLOGIA AL ALCANCE DE TU MANO
        </h1>
      </div>

      <div className="ml-8 mt-8">
        <p className="text-xl">
          QUIENES <br /> SOMOS
        </p>
        <img src="/img/arrow-right.webp" alt="arrow right" className="w-[3%]" />
      </div>

      <div className="flex items-center justify-between  p-2">
        {/* TEXTO */}
        <div className="ml-6 flex h-[300px] w-[35%] flex-col">
          <h1 className="pb-4 text-3xl font-bold">
            La alternativa para que estés con la última tecnología
          </h1>
          <span>
            Desde hace décadas, las tecnologías nos rodean a cada paso de la
            vida que damos para facilitarnos tareas, entretenernos, incluso,
            conectarnos con las personas a las que queremos y tenemos lejos.
            Pero, ¿y si tuviéramos la opción de conseguir el último iPad, la
            Nintendo Switch o una súper computadora solo para los meses de
            verano o para un proyecto puntual como freelance?, ¿Y hacernos con
            un set de gaming o un móvil durante un año y alquilar uno todavía
            más avanzado al siguiente? Ahora es posible gracias a DH Technology!
          </span>
        </div>

        {/* IMÁGENES */}
        <div className="flex w-[50%] rounded-md border-none pr-6 ">
          <img
            src="/img/about1.webp"
            alt="about-img"
            className="h-auto w-full rounded-lg border-0"
          />
        </div>
      </div>

      <div className="mr-8 mt-12 flex flex-col items-end justify-end">
        <p className="text-xl">
          TODO <br /> DIGITAL
        </p>
        <img src="/img/arrow-left.webp" alt="arrow right" className="w-[3%]" />
      </div>

      <div className="flex items-center justify-between  p-2">
        {/* IMÁGENES */}
        <div className="flex w-[50%] rounded-md border-none pl-6 ">
          <img
            src="/img/about2.webp"
            alt="about-img"
            className="h-auto w-full rounded-lg border-0"
          />
        </div>

        {/* TEXTO */}
        <div className="mr-6 flex h-[300px] w-[35%] flex-col">
          <h1 className="pb-4 text-3xl font-bold">
            La alternativa para que estés con la última tecnología
          </h1>
          <span>
            Desde hace décadas, las tecnologías nos rodean a cada paso de la
            vida que damos para facilitarnos tareas, entretenernos, incluso,
            conectarnos con las personas a las que queremos y tenemos lejos.
            Pero, ¿y si tuviéramos la opción de conseguir el último iPad, la
            Nintendo Switch o una súper computadora solo para los meses de
            verano o para un proyecto puntual como freelance?, ¿Y hacernos con
            un set de gaming o un móvil durante un año y alquilar uno todavía
            más avanzado al siguiente? Ahora es posible gracias a DH Technology!
          </span>
        </div>
      </div>

      <div className="ml-8 mt-12">
        <p className="text-xl">
          COMO <br /> ALQUILAR
        </p>
        <img src="/img/arrow-right.webp" alt="arrow right" className="w-[3%]" />
      </div>

      <div className="mx-auto my-10 w-[80%] rounded-md border-none p-10">
        <img
          src="/img/group-about.webp"
          alt="about-img"
          className="h-auto w-full rounded-lg border-0"
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 className="py-8 text-3xl font-bold text-red-500">
          ¿SUENA GENIAL?, ¡ALQUILA AHORA!
        </h1>
      </div>

      <div className="flex items-center justify-center py-8">
        <Link to={'/auth/login'}>
          <PrimaryButton>Iniciar sesión</PrimaryButton>
        </Link>
      </div>
    </>
  );
};

export default About;
