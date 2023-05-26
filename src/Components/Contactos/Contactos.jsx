import { Box, Button, Grid, Typography } from "@mui/material";

import React from "react";
import "./ContactosStyles.css";
import { CssTextField } from "../../Custom/CustomComponents";


const Contactos = ({ isVisible, innerRef }) => {
  return (
    <Box
      component="section"
      id="contactos"
      ref={innerRef}
      sx={{
        position: "relative",
        maxWidth: "1100px",
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column" },
      }}
    >
      <Box
        sx={{
          animationName: isVisible
            ? "entrada-de-texto-Contactos-Izquierdo"
            : "",
          animationDuration: "1s",
          animationDelay: ".3s",
          animationFillMode: "forwards",
          opacity: "0",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginTop: "0px",
            textTransform: "uppercase",
            textAlign: { xs: "center", sm: "start" },
            marginBottom: "40px",
          }}
        >
          Contactos
        </Typography>
        {/* <Typography>
          Si tenes alguna duda o consulta, completa el formulario y me
          comunicare con vos a la brevedad.
        </Typography>
        <Box>
          <Box>

            <Typography>Email</Typography>
            <Typography>nacholopez1903@gmail.com</Typography>
          </Box>
          <Box>

            <Typography>Telefono</Typography>
            <Typography>+54 9 291 404-8598</Typography>
          </Box>
          <Box>

            <Typography>Domicilio</Typography>
            <Typography></Typography>
          </Box>
        </Box> */}
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          animationName: isVisible ? "entrada-de-texto-Contactos-Derecho" : "",
          animationDuration: "1s",
          animationDelay: ".3s",
          animationFillMode: "forwards",
          opacity: "0",
          width: "100%",
          justifyContent: "flex-end",
        }}
        component="form"
      >
        <Grid item  xs={6}>
          <Typography
            sx={{
              marginBottom: "9px",
              fontFamily: "Manrope",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "16px",
              letterSpacing: "-0.214286px",
              textAlign: "start",
              marginTop: "10px",
            }}
          >
            Email
          </Typography>
          <CssTextField
            name="email"
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              marginBottom: "9px",
              fontFamily: "Manrope",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "16px",
              letterSpacing: "-0.214286px",
              textAlign: "start",
              marginTop: "10px",
            }}
          >
            Asunto
          </Typography>
          <CssTextField
            name="email"
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              marginBottom: "9px",
              fontFamily: "Manrope",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "16px",
              letterSpacing: "-0.214286px",
              textAlign: "start",
              marginTop: "10px",
            }}
          >
            Mensaje
          </Typography>
          <CssTextField
            name="email"
            multiline
            rows={8}
            maxRows={8}
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={4}>
            <Button>
              Enviar
            </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contactos;
