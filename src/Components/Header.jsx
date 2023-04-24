import React from "react";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <header>
      <div>
        <ul className="menuDesktop">
          <p>Sobre mi</p>
          <p>Proyectos</p>
          <p>Tecnologias</p>
          <p>Contactos</p>
        </ul>
      </div>
    </header>
  );
};

export default Header;
