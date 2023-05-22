import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProyectosCardsContainer from "../ProyectosCards/ProyectosCardsContainer";

const Proyectos = ({ isVisible, proyectos, count }) => {
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
        flexDirection: "column",
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
          animationName: isVisible ? "entrada-de-texto-Sobre-Mi" : "",
          animationDuration: "1s",
          animationDelay: ".3s",
          animationFillMode: "forwards",
          opacity: "0",
          marginBottom: "40px",
        }}
      >
        Proyectos
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {proyectos.map((proyecto, index) => (
            <ProyectosCardsContainer
              proyecto={proyecto}
              key={index}
              delay={count = count + 0.5} // Cada componente aparece 0.5s después del anterior
            />
        ))}
      </Grid>
    </Box>
  );
};

export default Proyectos;
