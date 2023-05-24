import React from "react";
import "./HeaderStyles.css";
import {
  AppBar,
  Box,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { LinkNav } from "../../Custom/CustomComponents";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ state, toggleDrawer, list, activeSection }) => {
  return (
    <AppBar
      position="static"
      sx={{
        padding: "10px 30px",
        position: "sticky",
        top: "0px",
        boxShadow: "0 0 10px rgba(0,0,0,.3)",
        backgroundColor: "secondary.main",
        zIndex: "10",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { sm: "center", xs: "start" },
          padding: "0px",
        }}
      >
        <React.Fragment key={"left"}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              color: "primary.third",
            }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>

        <LinkNav
          href="/home#inicio"
          sx={{
            display: { xs: "none", sm: "inline" },
            color: activeSection === "inicio" && "secondary.third",
            transition: activeSection === "inicio" && ".2s",
            transform: activeSection === "inicio" && "scale(1.1)",
          }}
        >
          Inicio
        </LinkNav>
        <LinkNav
          href="/home#sobreMi"
          sx={{
            display: { xs: "none", sm: "inline" },
            color: activeSection === "sobreMi" && "secondary.third",
            transition: activeSection === "sobreMi" && ".2s",
            transform: activeSection === "sobreMi" && "scale(1.1)",
          }}
        >
          Sobre mi
        </LinkNav>
        <LinkNav
          href="/home#proyectos"
          sx={{
            display: { xs: "none", sm: "inline" },
            color: activeSection === "proyectos" && "secondary.third",
            transition: activeSection === "proyectos" && ".2s",
            transform: activeSection === "proyectos" && "scale(1.1)",
          }}
        >
          Proyectos
        </LinkNav>
        <LinkNav
          href="/home#skills"
          sx={{
            display: { xs: "none", sm: "inline" },
            color: activeSection === "skills" && "secondary.third",
            transition: activeSection === "skills" && ".2s",
            transform: activeSection === "skills" && "scale(1.1)",
          }}
        >
          Habilidades
        </LinkNav>
        <LinkNav
          href="/home#contactos"
          sx={{
            display: { xs: "none", sm: "inline" },
            color: activeSection === "contactos" && "secondary.third",
            transition: activeSection === "contactos" && ".2s",
            transform: activeSection === "contactos" && "scale(1.1)",
          }}
        >
          Contactos
        </LinkNav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
