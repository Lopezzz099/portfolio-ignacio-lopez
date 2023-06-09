import React, { createRef, useEffect, useState } from "react";
import Proyectos from "./Proyectos";
import Ecomerce from "../../img/ProyectoEcomerce.PNG";

const ProyectosContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  let count = 0;
  const proyectos = [
    {
      "id": 1,
      "name": "E-commerce",
      "image": `${Ecomerce}`,
      "description": "Tienda de auriculares y sonido",
    }
  ]


  const contactosRef = createRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (contactosRef.current) {
      observer.observe(contactosRef.current);
    }

    return () => {
      if (contactosRef.current) {
        observer.unobserve(contactosRef.current);
      }
    };
  }, []);



  return <Proyectos isVisible={isVisible} innerRef={contactosRef} proyectos={proyectos} count={count}/>;
};

export default ProyectosContainer;
