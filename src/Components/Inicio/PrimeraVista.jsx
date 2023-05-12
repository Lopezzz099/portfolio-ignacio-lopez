import React from "react";
import "./PrimeraVistaStyles.css";
import { Box, Typography } from "@mui/material";

const PrimeraVista = () => {
  return (
    <Box
      component="section"
      id="inicio"
      sx={{
        position: "relative",
        maxWidth: "1100px",
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="cajaIntro"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "400",
            textTransform: "uppercase",
            fontSize: "1.2rem",
            letterSpacing: "10px",
            margin: "0px",
            textAlign: "start",
            animationName: "entrada-de-texto",
            animationDuration: "1s",
            animationDelay: "0.5s",
            animationFillMode: "forwards",
            opacity: "0",
          }}
        >
          Portfolio
        </Typography>
        <Typography variant="h1" sx={{
            fontWeight: "700",
            textTransform: "uppercase",
            fontSize: "5rem",
            margin: "0px",
            textAlign: "start",
            animationName: "entrada-de-texto",
            animationDuration: "1s",
            animationDelay: ".8s",
            animationFillMode: "forwards",
            opacity: "0",
        }}>
          Ignacio Lopez
        </Typography>
        <Typography sx={{
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: "1.2rem",
            margin: "0px",
            textAlign: "start",
            animationName: "entrada-de-texto",
            animationDuration: "1s",
            animationDelay: "1s",
            animationFillMode: "forwards",
            opacity: "0",
        }}>
          Desarrollador Front-End especializado en React.js
        </Typography>
      </Box>
      <Box sx={{
          animationName: "entrada-de-imagen",
          animationDuration: "1s",
          animationDelay: "0.5s",
          animationFillMode: "forwards",
          opacity: "0",
          transform: "scale(0)",
      }}>
        <lord-icon
          src="https://cdn.lordicon.com/qhgmphtg.json"
          trigger="hover"
          colors="primary:#013440,secondary:#B4D2D9"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon>
      </Box>
    </Box>
  );
};

export default PrimeraVista;
