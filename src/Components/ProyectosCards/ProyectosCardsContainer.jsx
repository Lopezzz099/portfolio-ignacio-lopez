import { createRef, useEffect, useState } from "react";
import ProyectosCards from "./ProyectosCards";
import { useNavigate } from "react-router-dom";

const ProyectosCardsContainer = ({ delay, proyecto }) => {
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();


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
  return (
    <ProyectosCards
      showButton={showButton}
      setShowButton={setShowButton}
      proyecto={proyecto}
      isVisible={isVisible}
      delay={delay}
      navigate={navigate}
      innerRef={contactosRef}
    />
  );
};

export default ProyectosCardsContainer;
