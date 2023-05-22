import { Box, List, ListItem } from "@mui/material";
import Header from "./Header";
import { LinkNav } from "../../Custom/CustomComponents";
import { useState } from "react";

const HeaderContainer = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "primary.main",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{
        
      }}>
        <ListItem>
          {" "}
          <LinkNav href="#inicio" sx={{textAlign: "start"}}>Inicio</LinkNav>
        </ListItem>
        <ListItem>
          {" "}
          <LinkNav href="#sobreMi" sx={{textAlign: "start"}}>Sobre mi</LinkNav>
        </ListItem>
        <ListItem>
          {" "}
          <LinkNav href="#proyectos" sx={{textAlign: "start"}}>Proyectos</LinkNav>
        </ListItem>
        <ListItem>
          {" "}
          <LinkNav href="#contactos" sx={{textAlign: "start"}}>Contactos</LinkNav>
        </ListItem>
      </List>
    </Box>
  );
  return <Header state={state} toggleDrawer={toggleDrawer} list={list} />;
};

export default HeaderContainer;
