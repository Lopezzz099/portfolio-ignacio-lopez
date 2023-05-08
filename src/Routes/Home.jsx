import React from "react";
import PrimeraVista from "../Components/PrimeraVista";
import SobreMi from "../Components/SobreMi";
import Proyectos from "../Components/Proyectos";
import Contactos from "../Components/Contactos";

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
