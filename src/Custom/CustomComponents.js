import {  Link, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LinkNav = styled(Link)(({ theme }) => ({
  width: "150px",
  color: theme.palette.primary.third,
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

export const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: theme.palette.secondary.fourth,
      cursor: "pointer",
    },
    "& fieldset": {
      borderBottom: `2px solid ${theme.palette.secondary.fourth}`,
      // borderRadius: "8px",
      padding: "18px 24px",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-0.25px",
      opacity: "0.4",
      outline: "none",
      backgroundColor: theme.palette.secondary.main
    },
    "&:hover fieldset": {
      borderBottom: `2px solid ${theme.palette.primary.third}`,
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
    },
    "&.Mui-focused fieldset": {
      borderBottom: `2px solid ${theme.palette.secondary.third}`,
    },
  },
}));


