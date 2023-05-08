import React from "react";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <header>
      <div>
        <ul className="menuDesktop">
          <a href="#inicio">Inicio</a>
          <a href="#sobreMi">Sobre mi</a>
          <a href="proyectos">Proyectos</a>
          <a href="">Contactos</a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
