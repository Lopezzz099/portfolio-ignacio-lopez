import { Box, Grid, Typography } from "@mui/material";

import React from "react";
import "./ContactosStyles.css";
import { ButtonForm, CssTextField } from "../../Custom/CustomComponents";
import Img from "../../img/profile-pic.png";

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
          contáctame
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "row" },
        }}
      >
        {/* <Box
          sx={{
            width: "35%",
          }}
        >
          <img
            src={`${Img}`}
            alt={Img}
            loading="lazy"
            style={{ width: "100%", borderRadius: "100%" }}
          />
        </Box> */}
        <Grid
          container
          spacing={0}
          sx={{
            animationName: isVisible
              ? "entrada-de-texto-Contactos-Derecho"
              : "",
            animationDuration: "1s",
            animationDelay: ".3s",
            animationFillMode: "forwards",
            opacity: "0",
            width: "100%",
            boxShadow: `15px 15px 30px #bebebe,
            -15px -15px 30px #ffffff`,
            borderRadius: "30px",
            backgroundColor: "secondary.main",
            justifyContent: "space-between",
            padding: "20px",
          }}
          component="form"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
              }}
            >
              <img
                src={`${Img}`}
                alt={Img}
                loading="lazy"
                style={{
                  width: "100%",
                  borderRadius: "100%",
                  // animation: "floatAnimation 2s ease-in-out infinite",
                }}
              />
            </Box>
          </Grid>
          <Grid item container xs={12} md={6}>
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
                  color: "secondary.third",
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
                  color: "secondary.third",
                }}
              >
                Asunto
              </Typography>
              <CssTextField
                name="asunto"
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
                  color: "secondary.third",
                }}
              >
                Mensaje
              </Typography>
              <CssTextField
                name="mensaje"
                multiline
                rows={8}
                maxRows={8}
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <ButtonForm>Enviar</ButtonForm>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contactos;
