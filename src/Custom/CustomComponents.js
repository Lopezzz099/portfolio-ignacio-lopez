import {  Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LinkNav = styled(Link)(({ theme }) => ({
  width: "150px",
  color: "#659AA6",
  cursor: "pointer",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "400",
  fontSize: "1rem",
  textTransform: "uppercase",
  "&:hover": {
    color: theme.palette.secondary.third,
    transition: ".2s",
    transform: "scale(1.1)",
  },
}));


