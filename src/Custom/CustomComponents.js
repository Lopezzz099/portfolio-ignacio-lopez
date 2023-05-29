import {  Button, Link, TextField } from "@mui/material";
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

export const ButtonForm = styled(Button)(({ theme }) => ({
  marginTop: "10px",
  backgroundColor: theme.palette.secondary.third,
  border: "none",
  padding: "1rem",
  fontSize: "1rem",
  width: "100%",
  borderRadius: "1rem",
  color: theme.palette.secondary.main,
  boxShadow: `0 2px ${theme.palette.secondary.fourth}`,
  cursor: "pointer",
  "&:hover": {
    background: theme.palette.primary.second,
    color: theme.palette.secondary.main,
  },
  "&:active": {
    color: "white",
    boxShadow: "0 0.2rem #dfd9d9",
    transform: "translateY(0.2rem)",
  },
}));

export const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: theme.palette.secondary.third,
      cursor: "pointer",
    },
    "& fieldset": {
      // border: `2px solid ${theme.palette.primary.third}`,
      borderRadius: "8px",
      padding: "18px 24px",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-0.25px",
      opacity: "0.4",
      outline: "none",
      boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)",
    },
    "&:hover fieldset": {
      border: `2px solid rgba(0, 0, 0, 0.1)`,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid rgba(0, 0, 0, 0.1)`,
    },
  },
}));


