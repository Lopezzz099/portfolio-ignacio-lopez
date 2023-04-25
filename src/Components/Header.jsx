import React from "react";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <header>
      <div>
        <ul className="menuDesktop">
          <p>Inicio</p>
          <p>Sobre mi</p>
          <p>Proyectos</p>
          <p>Contactos</p>
        </ul>
      </div>
    </header>
  );
};

export default Header;
