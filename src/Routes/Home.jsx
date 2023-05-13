import React from "react";
import PrimeraVista from "../Components/Inicio/PrimeraVista";
import SobreMi from "../Components/SobreMi/SobreMi";
import Contactos from "../Components/Contactos/Contactos";
import ProyectosContainer from "../Components/Proyectos/ProyectosContainer";


const Home = () => {
  return (
    <>
      <PrimeraVista />
      <SobreMi/>
      <ProyectosContainer/>
      <Contactos/>
    </>
  );
};

export default Home;
