import React from "react";
import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="logoFooter">© 2023 Ignacio Lopez | Hecho con React</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul className="linksDesktop">
          <FontAwesomeIcon icon={faEnvelope} className="gmail"/>
          <FontAwesomeIcon icon={faGithub} className="github"/>
          <FontAwesomeIcon icon={faGitlab} className="gitlab"/>
          <FontAwesomeIcon icon={faLinkedin} className="linkedin"/>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
