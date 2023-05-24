import { Box, List, ListItem } from "@mui/material";
import Header from "./Header";
import { LinkNav } from "../../Custom/CustomComponents";
import { useEffect, useState } from "react";

const HeaderContainer = () => {
  const [activeSection, setActiveSection] = useState('');

  // Lógica para actualizar la sección activa en función del scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        padding: "18px"
      }}>
        <ListItem>
          {" "}
          <LinkNav href="/home#inicio" sx={{textAlign: "start"}}>Inicio</LinkNav>
        </ListItem>
        <ListItem>
          {" "}
          <LinkNav href="/home#sobreMi" sx={{textAlign: "start"}}>Sobre mi</LinkNav>
        </ListItem>
        <ListItem>
          {" "}
          <LinkNav href="/home#proyectos" sx={{textAlign: "start"}}>Proyectos</LinkNav>
        </ListItem>
        <ListItem>
          {" "}
          <LinkNav href="/home#contactos" sx={{textAlign: "start"}}>Contactos</LinkNav>
        </ListItem>
      </List>
    </Box>
  );
  return <Header state={state} toggleDrawer={toggleDrawer} list={list} activeSection={activeSection}/>;
};

export default HeaderContainer;
