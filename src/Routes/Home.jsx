import React from "react";
import PrimeraVista from "../Components/Inicio/PrimeraVista";
import SobreMi from "../Components/SobreMi/SobreMi";
import Proyectos from "../Components/Proyectos/Proyectos";
import Contactos from "../Components/Contactos/Contactos";


const Home = () => {
  return (
    <>
      <PrimeraVista />
      <SobreMi/>
      <Proyectos/>
      <Contactos/>
    </>
  );
};

export default Home;
