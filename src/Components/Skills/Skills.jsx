import { Box, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import materialUIimg from "../../img/imgMaterialUI.png";
import HTMLimg from "../../img/imgHTML5.png";
import CSSimg from "../../img/imgCSS.png";
import ResponsiveDesignimg from "../../img/imgResponsiveDesign.png";
// import UXIUimg from "../../img/imgUX-UI.png";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Skills.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Skills = ({ isVisible }) => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        backgroundColor: "secondary.main",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1100px",
          width: "90%",
          margin: "0 auto",
          flexDirection: { xs: "column" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginTop: "0px",
            textTransform: "uppercase",
            textAlign: "start",
            animationName: isVisible ? "entrada-de-texto-Sobre-Mi" : "",
            animationDuration: "1s",
            animationDelay: ".3s",
            animationFillMode: "forwards",
            opacity: "0",
            marginBottom: "40px",
          }}
        >
          Habilidades
        </Typography>
        <Swiper
          slidesPerView={4}
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          loop={true}
          navigation={true}
        >
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${materialUIimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                backgroundColor: "transparent",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>Material UI</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${HTMLimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>HTML5</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${CSSimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>CSS3</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${ResponsiveDesignimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>Responsive Design</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${UXIUimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>UX/IU</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${Reactimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>React.js</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${Reduximg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>Redux</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${ReactRouterimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>React Router</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${Jestimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>Jest</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${NPMimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>NPM</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${JSDocimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>JSDoc</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${ReactQueryimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>React Query</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${ReactPropTypesimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>React PropType</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${Formikimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100px",
                backgroundPosition: "center",
                "&:hover": {
                  transition: ".2s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography>Formik</Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Skills;
