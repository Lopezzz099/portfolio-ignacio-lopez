import React, { createRef, useEffect, useState } from "react";
import SobreMi from "./SobreMi";

const SobreMiContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return <SobreMi isVisible={isVisible} innerRef={contactosRef} />;
};

export default SobreMiContainer;
