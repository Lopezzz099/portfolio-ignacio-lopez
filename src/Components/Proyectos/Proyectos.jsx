import { Box, Typography } from "@mui/material";
import React from "react";

const Proyectos = ({isVisible}) => {
  return (
    <Box
      component="section"
      id="proyectos"
      sx={{
        position: "relative",
        maxWidth: "1100px",
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginTop: "0px",
          textTransform: "uppercase",
          textAlign: "start",
          animationName: isVisible ? 'entrada-de-texto-Sobre-Mi' : "",
          animationDuration: "1s",
          animationDelay: ".5s",
          animationFillMode: "forwards",
          opacity: "0",
        }}
      >
        Proyectos
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default Proyectos;
