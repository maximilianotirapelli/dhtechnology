import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../custom-ui/PrimaryButton';

const Business = () => {
  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img src="/img/empresa1.webp" alt="Top-bns-img" className="w-full" />
        <h1 className="py-8 text-3xl font-bold text-red-500">
          ¿TENES UNA EMPRESA?, MIRA!
        </h1>
      </div>

      <div className="ml-8 py-12">
        <p className="text-2xl font-bold">
          ALQUILA LA MEJOR TECNOLOGIA
          <br />
          PARA TU NEGOCIO
        </p>
      </div>

      <div className="flex items-end justify-end">
        <div className="flex w-[100%] items-end justify-end border-none py-8 pl-24">
          <img
            src="/img/empresa2.webp"
            alt="bsn-img"
            className="h-auto w-full rounded-lg border-0"
          />
        </div>
      </div>

      <div className="mr-8 flex items-end justify-end py-12 text-end">
        <p className="text-2xl font-bold">
          SERVICIOS COMPLETOS <br />A TU MEDIDA
        </p>
      </div>

      <div className="flex items-start justify-start">
        <div className="flex w-[100%] items-end justify-end border-none py-8 pr-24">
          <img
            src="/img/empresa3.webp"
            alt="bsn-img"
            className="h-auto w-full rounded-lg border-0"
          />
        </div>
      </div>

      <div className="ml-8 py-12">
        <p className="text-2xl font-bold">OPTIMIZACION ESCALABLE</p>
      </div>

      <div className="flex items-end justify-end">
        <div className="flex w-[100%] items-end justify-end border-none py-8 pl-24">
          <img
            src="/img/empresa4.webp"
            alt="bsn-img"
            className="h-auto w-full rounded-lg border-0"
          />
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 className="py-8 text-3xl font-bold text-red-500">¿TE INTERESA?</h1>
      </div>

      <div className="flex items-center justify-center py-8">
        <Link to={'/contact'}>
          <PrimaryButton>Contáctanos</PrimaryButton>
        </Link>
      </div>
    </>
  );
};

export default Business;
