import React from "react";
import "./PrimeraVistaStyles.css";

const PrimeraVista = () => {
  return (
    <section className="primeraVista" id="inicio">
      <div className="cajaIntro">
        <h2 className="tituloPort">Portfolio</h2>
        <h1 className="tituloNom">Ignacio Lopez</h1>
        <p className="subtitulo">Desarrollador Front-End especializado en React.js</p>
        <div></div>
      </div>
      <div className="cajaFoto">
        <lord-icon
          src="https://cdn.lordicon.com/qhgmphtg.json"
          trigger="hover"
          colors="primary:#013440,secondary:#B4D2D9"
          style={{width:"250px",height:"250px"}}
        ></lord-icon>
      </div>
    </section>
  );
};

export default PrimeraVista;
