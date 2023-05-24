import React, { useEffect, useState } from "react";
import Skills from "./Skills";

const SkillsContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

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
  return <Skills isVisible={isVisible}/>;
};

export default SkillsContainer;
