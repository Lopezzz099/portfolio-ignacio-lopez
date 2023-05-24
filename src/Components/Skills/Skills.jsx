import { Box, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Skills.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Skills = ({ isVisible, habilidades }) => {
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
          {habilidades.map((skill) => (
            <SwiperSlide key={skill.id}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${skill.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100px",
                  backgroundPosition: "center",
                  "&:hover": {
                    transition: ".2s",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Typography>{skill.text}</Typography>
              </Box>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Skills;
