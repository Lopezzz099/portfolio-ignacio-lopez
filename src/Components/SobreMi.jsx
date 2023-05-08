import React from "react";
import "./SobreMiStyles.css";

const SobreMi = () => {
  return (
    <section className="sobreMi" id="sobreMi">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1100px",
          width: "90%",
          margin: "0 auto"
        }}
      >
        <div style={{width: "40%"}}>
          <h2>Sobre mi</h2>
        </div>
        <div className="acercaMio">
          <p>
            Soy un desarrollador Front-End con conocimientos en HTML, CSS,
            JavaScript y React, terminando el primer año de la carrera Certified
            Tech Developer en Digital House. Durante mi carrera, he trabajado en
            varios proyectos en los que he adquirido experiencia en el
            desarrollo de interfaces de usuario, el diseño y la adaptación de
            páginas para distintos dispositivos, el uso de Flexbox y CSS Grid
            para el manejo de grillas y posiciones, y el consumo de APIs para la
            integración del front-end con el back-end.
          </p>
          <p>
            Soy una persona responsable, aplicada y perseverante, siempre
            buscando aprender y mejorar mis habilidades. Soy observador,
            analítico y reflexivo, lo que me permite entender los problemas
            desde diferentes perspectivas y encontrar soluciones creativas.
            Estoy interesado en trabajar en proyectos desafiantes y aprender de
            expertos en la industria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
