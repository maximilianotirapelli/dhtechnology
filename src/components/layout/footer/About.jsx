import React from 'react';
import { Link } from "react-router-dom";
import PrimaryButton from "../../custom-ui/PrimaryButton";


const About = () => {
  return (
    <>
        <div style={{ textAlign: 'center' }}>
            <img src="/img/section-1about.webp" alt="Top-home-img" className="w-full" />
            <h1 className='py-8 font-bold text-red-500 text-3xl'>LA MEJOR TECNOLOGIA AL ALCANCE DE TU MANO</h1>
        </div>

        <div className='ml-8 mt-8'>
        <p className="text-xl">QUIENES <br /> SOMOS</p>
        <img src="/img/arrow-right.webp" alt="arrow right" className="w-[3%]" />
        </div>



        <div className="flex justify-between items-center  p-2">
        {/* TEXTO */}
        <div className="flex flex-col w-[35%] ml-6 h-[300px]">
            <h1 className='text-3xl font-bold pb-4'>La alternativa para que estés con la última tecnología</h1>
            <span>
            Desde hace décadas, las tecnologías nos rodean a cada paso de la vida que damos para facilitarnos tareas, entretenernos, incluso, conectarnos con las personas a las que queremos y tenemos lejos.
            Pero, ¿y si tuviéramos la opción de conseguir el último iPad, la Nintendo Switch o una súper computadora solo para los meses de verano o para un proyecto puntual como freelance?, ¿Y hacernos con un set de gaming o un móvil durante un año y alquilar uno todavía más avanzado al siguiente?
            Ahora es posible gracias a DH Technology!
            </span>
        </div>

        {/* IMÁGENES */}
        <div className="flex border-none rounded-md w-[50%] pr-6 ">
            <img
            src="/img/about1.webp"
            alt="about-img"
            className="border-0 rounded-lg w-full h-auto"
            />
        </div>
        </div>

        <div className='flex flex-col justify-end items-end mr-8 mt-12'>
            <p className="text-xl">TODO <br /> DIGITAL</p>
            <img src="/img/arrow-left.webp" alt="arrow right" className="w-[3%]" />
        </div>

        <div className="flex justify-between items-center  p-2">


        {/* IMÁGENES */}
        <div className="flex border-none rounded-md w-[50%] pl-6 ">
            <img
            src="/img/about2.webp"
            alt="about-img"
            className="border-0 rounded-lg w-full h-auto"
            />
        </div>




        {/* TEXTO */}
        <div className="flex flex-col w-[35%] mr-6 h-[300px]">
            <h1 className='text-3xl font-bold pb-4'>La alternativa para que estés con la última tecnología</h1>
            <span>
            Desde hace décadas, las tecnologías nos rodean a cada paso de la vida que damos para facilitarnos tareas, entretenernos, incluso, conectarnos con las personas a las que queremos y tenemos lejos.
            Pero, ¿y si tuviéramos la opción de conseguir el último iPad, la Nintendo Switch o una súper computadora solo para los meses de verano o para un proyecto puntual como freelance?, ¿Y hacernos con un set de gaming o un móvil durante un año y alquilar uno todavía más avanzado al siguiente?
            Ahora es posible gracias a DH Technology!
            </span>
        </div>
        </div>
        


        <div className='ml-8 mt-12'>
        <p className="text-xl">COMO <br /> ALQUILAR</p>
        <img src="/img/arrow-right.webp" alt="arrow right" className="w-[3%]" />
        </div>


        <div className="mx-auto my-10 p-10 border-none rounded-md w-[80%]">
        <img
            src="/img/group-about.webp"
            alt="about-img"
            className="border-0 rounded-lg w-full h-auto"
        />
        </div>



        <div style={{ textAlign: 'center' }}>
            <h1 className='py-8 font-bold text-red-500 text-3xl'>¿SUENA GENIAL?, ¡ALQUILA AHORA!</h1>
        </div>
        
          
            <div className="flex justify-center items-center py-8">
                <Link to={"/auth/login"}>
                    <PrimaryButton>Iniciar sesión</PrimaryButton>
                </Link>
            </div>

    </>

  );

 
};

export default About;


