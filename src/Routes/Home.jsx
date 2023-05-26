import React from "react";
import ProyectosContainer from "../Components/Proyectos/ProyectosContainer";
import SkillsContainer from "../Components/Skills/SkillsContainer";
import ContactosContainer from "../Components/Contactos/ContactosContainer";
import PrimeraVistaContainer from "../Components/Inicio/PrimeraVistaContainer";
import SobreMiContainer from "../Components/SobreMi/SobreMiContainer";


const Home = () => {
  return (
    <>
      <PrimeraVistaContainer />
      <SobreMiContainer/>
      <ProyectosContainer/>
      <SkillsContainer/>
      <ContactosContainer/>
    </>
  );
};

export default Home;
