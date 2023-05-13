import React from "react";
import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
        backgroundColor: "primary.second",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "1.1rem", color: "primary.main" }}>
          © 2023 Ignacio Lopez | Hecho con React y Material UI
        </Typography>
      </Box>
      <Box component="nav" sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="ul"
          sx={{ display: "flex", padding: "0px", margin: "0px" }}
        >
          <Link
            href="https://github.com/Lopezzz099"
            sx={{ marginLeft: "20px", cursor: "pointer", fontSize: "22px" }}
          >
            <FontAwesomeIcon icon={faGithub} className="github" />
          </Link>
          <Link
            href="https://gitlab.ctd.academy/Lopezzz099"
            sx={{ marginLeft: "20px", cursor: "pointer", fontSize: "22px" }}
          >
            <FontAwesomeIcon icon={faGitlab} className="gitlab" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ignacio-lopezzz/"
            sx={{ marginLeft: "20px", cursor: "pointer", fontSize: "22px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
