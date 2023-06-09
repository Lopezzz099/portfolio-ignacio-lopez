import React, { createRef, useEffect, useState } from "react";
import Skills from "./Skills";
import materialUIimg from "../../img/imgMaterialUI.png";
import HTMLimg from "../../img/imgHTML5.png";
import CSSimg from "../../img/imgCSS.png";
import ResponsiveDesignimg from "../../img/imgResponsiveDesign.png";
import UXIUimg from "../../img/ux-ui-logo.svg";
import Reactimg from "../../img/imgReact.png";
import Reduximg from "../../img/imgRedux.png";
import ReactRouterimg from "../../img/imgReactRouter.png";
import Jestimg from "../../img/imgJest.png";
import NPMimg from "../../img/imgNPM.png";
import JSDocimg from "../../img/imgJSDoc.png";
import ReactPropTypesimg from "../../img/imgReactPropTypes.png";
import ReactQueryimg from "../../img/imgReactQuery.png";
import Formikimg from "../../img/imgFormik.png";

const SkillsContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const habilidades =[
    {
      "id": 1,
      "image": `${materialUIimg}`,
      "text": "Material UI",
    },
    {
      "id": 2,
      "image": `${HTMLimg}`,
      "text": "HTML5",
    },
    {
      "id": 3,
      "image": `${CSSimg}`,
      "text": "CSS3",
    },
    {
      "id": 4,
      "image": `${ResponsiveDesignimg}`,
      "text": "Responsive Design",
    },
    {
      "id": 5,
      "image": `${UXIUimg}`,
      "text": "UX/UI",
    },
    {
      "id": 6,
      "image": `${Reactimg}`,
      "text": "React",
    },
    {
      "id": 7,
      "image": `${Reduximg}`,
      "text": "Redux",
    },
    {
      "id": 8,
      "image": `${ReactRouterimg}`,
      "text": "React Router",
    },
    {
      "id": 9,
      "image": `${Jestimg}`,
      "text": "Jest",
    },
    {
      "id": 10,
      "image": `${NPMimg}`,
      "text": "NPM",
    },
    {
      "id": 11,
      "image": `${JSDocimg}`,
      "text": "JS(x) Doc",
    },
    {
      "id": 12,
      "image": `${ReactPropTypesimg}`,
      "text": "React Prop-Types",
    },
    {
      "id": 13,
      "image": `${ReactQueryimg}`,
      "text": "React Query",
    },
    {
      "id": 14,
      "image": `${Formikimg}`,
      "text": "Formik",
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
  return <Skills isVisible={isVisible} habilidades={habilidades} innerRef={contactosRef}/>;
};

export default SkillsContainer;
