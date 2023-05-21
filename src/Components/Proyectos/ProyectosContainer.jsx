import React, { useEffect, useState } from "react";
import Proyectos from "./Proyectos";
import Ecomerce from "../../img/ProyectoEcomerce.PNG";
import Cabaña from "../../img/ProyectoCabaña.PNG";

const ProyectosContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  let count = 0;
  const proyectos = [
    {
      "id": 1,
      "name": "E-commerce",
      "image": `${Ecomerce}`,
      "description": "Tienda de auriculares y sonido",
    },
    {
      "id": 2,
      "name": "Cabaña",
      "image": `${Cabaña}`,
      "description": "Pagina para alquilar una Cabaña",
    },
    {
      "id": 3,
      "name": "Cabaña",
      "image": `${Cabaña}`,
      "description": "Pagina para alquilar una Cabaña",
    },
    {
      "id": 4,
      "name": "Cabaña",
      "image": `${Cabaña}`,
      "description": "Pagina para alquilar una Cabaña",
    }
  ]


  useEffect(() => {
    const handleScroll = () => {
      const proyectos = document.getElementById("proyectos");
      const proyectosTop = proyectos.offsetTop;
      const proyectosHeight = proyectos.clientHeight;
      const windowTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      if (
        proyectosTop < windowTop + windowHeight &&
        proyectosTop + proyectosHeight > windowTop
      ) {
        setIsVisible(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return <Proyectos isVisible={isVisible} proyectos={proyectos} count={count}/>;
};

export default ProyectosContainer;
