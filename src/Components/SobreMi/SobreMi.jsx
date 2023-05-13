import React from "react";
import "./SobreMiStyles.css";
import { Box, Typography } from "@mui/material";

const SobreMi = () => {
  return (
    <Box
      component="section"
      id="sobreMi"
      sx={{
        backgroundColor: "secondary.main",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1100px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginTop: "0px",
              textTransform: "uppercase",
              textAlign: "start",
              animationName: "entrada-de-texto-Sobre-Mi",
              animationDuration: "1s",
              animationDelay: ".5s",
              animationFillMode: "forwards",
              opacity: "0",
            }}
          >
            Sobre mi
          </Typography>
        </Box>
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{
              lineHeight: "22px",
              fontSize: "1rem",
              marginTop: "0px",
              marginBottom: "15px",
              textAlign: "justify",
              color: "secondary.fourth",
              animationName: "entrada-de-texto-Sobre-Mi",
              animationDuration: "1s",
              animationDelay: ".8s",
              animationFillMode: "forwards",
              opacity: "0",
            }}
          >
            Soy un desarrollador Front-End con conocimientos en HTML, CSS,
            JavaScript y React, empezando el segundo año de la carrera Certified
            Tech Developer en Digital House. Durante mi carrera, he trabajado en
            varios proyectos en los que he adquirido experiencia en el
            desarrollo de interfaces de usuario, el diseño y la adaptación de
            páginas para distintos dispositivos, el uso de Flexbox y CSS Grid
            para el manejo de grillas y posiciones, y el consumo de APIs para la
            integración del front-end con el back-end.
          </Typography>
          <Typography
            sx={{
              lineHeight: "22px",
              fontSize: "1rem",
              marginTop: "0px",
              marginBottom: "15px",
              textAlign: "justify",
              color: "secondary.fourth",
              animationName: "entrada-de-texto-Sobre-Mi",
              animationDuration: "1s",
              animationDelay: ".8s",
              animationFillMode: "forwards",
              opacity: "0",
            }}
          >
            Soy una persona responsable, aplicada y perseverante, siempre
            buscando aprender y mejorar mis habilidades. Soy observador,
            analítico y reflexivo, lo que me permite entender los problemas
            desde diferentes perspectivas y encontrar soluciones creativas.
            Estoy interesado en trabajar en proyectos desafiantes y aprender de
            expertos en la industria.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SobreMi;
