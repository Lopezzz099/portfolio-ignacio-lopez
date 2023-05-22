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

const Header = ({state, toggleDrawer, list}) => {
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

        <LinkNav href="#inicio" sx={{ display: { xs: "none", sm: "inline" } }}>
          Inicio
        </LinkNav>
        <LinkNav href="#sobreMi" sx={{ display: { xs: "none", sm: "inline" } }}>
          Sobre mi
        </LinkNav>
        <LinkNav
          href="#proyectos"
          sx={{ display: { xs: "none", sm: "inline" } }}
        >
          Proyectos
        </LinkNav>
        <LinkNav
          href="#contactos"
          sx={{ display: { xs: "none", sm: "inline" } }}
        >
          Contactos
        </LinkNav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
