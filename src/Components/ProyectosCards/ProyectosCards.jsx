import { Box, Button, Grid } from "@mui/material";

const ProyectosCards = ({ showButton, setShowButton, proyecto, isVisible, delay, navigate, innerRef }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        position: "relative",
        animationName: isVisible ? "entrada-de-proyectos" : "",
        animationDuration: "1s",
        animationDelay: `${delay}s`,
        animationFillMode: "forwards",
        opacity: "0",
      }}
      ref={innerRef}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <Box
        sx={{
          backgroundImage: `url(${proyecto.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          borderRadius: "8px",
          height: "120px",
          filter: showButton && "brightness(40%)",
          transition: showButton && "filter 0.3s ease-in-out",
          cursor: "pointer",
        }}
        onClick={()=> navigate(`/proyects/${proyecto.id}`)}
      ></Box>
      <Button
        sx={{
          display: showButton ? "inline" : "none",
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={()=> navigate(`/proyects/${proyecto.id}`)}
      >
        Ver Detalles
      </Button>
    </Grid>
  );
};

export default ProyectosCards;
