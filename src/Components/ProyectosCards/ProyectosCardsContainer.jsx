import { useEffect, useState } from "react";
import ProyectosCards from "./ProyectosCards";
import { useNavigate } from "react-router-dom";

const ProyectosCardsContainer = ({ delay, proyecto }) => {
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
  return (
    <ProyectosCards
      showButton={showButton}
      setShowButton={setShowButton}
      proyecto={proyecto}
      isVisible={isVisible}
      delay={delay}
      navigate={navigate}
    />
  );
};

export default ProyectosCardsContainer;
