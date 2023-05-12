import React from "react";
import "./HeaderStyles.css";
import { Box } from "@mui/material";
import { LinkNav } from "../../Custom/CustomComponents";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 30px",
        position: "sticky",
        top: "0px",
        boxShadow: "0 0 10px rgba(0,0,0,.3)",
        backgroundColor: "secondary.main",
        zIndex: "10",
      }}
    >
      <Box component="nav">
        <Box
          component="ul"
          sx={{ display: "flex", padding: "0px", margin: "0px" }}
        >
          <LinkNav href="#inicio">Inicio</LinkNav>
          <LinkNav href="#sobreMi">Sobre mi</LinkNav>
          <LinkNav href="#proyectos">Proyectos</LinkNav>
          <LinkNav href="#contactos">Contactos</LinkNav>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
