import React from "react";
import ContatosFundo from "../../img/aboutMeFundo.jpg";
import { Box, IconButton, Typography } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${ContatosFundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.7)",
        }}
      />
      <Box
        borderBottom="2px solid #72619b"
        position="absolute"
        top={180}
        px={20}
        py={1}
      >
        <Typography component="h2" fontSize="40px" color="white">
          Contatos
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 4, alignContent: "center" }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/dev-vitorhugo/"
          target="_blank"
          sx={{
            marginTop: "40px",
            color: "white",
            fontSize: { xs: "1.5rem", md: "2rem" },
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            transition: "transform 0.3s, filter 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
              filter: "brightness(0.7)",
            },
          }}
        >
          <FaLinkedin size="3rem" />
          <Typography fontSize="25px">LinkedIn</Typography>
          <Typography fontSize="10px" color="gray">
            Vitor Hugo
          </Typography>
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/vitor575"
          target="_blank"
          sx={{
            marginTop: "40px",
            color: "white",
            fontSize: { xs: "1.5rem", md: "2rem" },
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            transition: "transform 0.3s, filter 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
              filter: "brightness(0.7)",
            },
          }}
        >
          <FaGithub size="3rem" />
          <Typography fontSize="20px">GitHub</Typography>
          <Typography fontSize="10px" color="gray">
            vitor575
          </Typography>
        </IconButton>

        <IconButton
          component="a"
          href="mailto:vitor953450@gmail.com"
          sx={{
            marginTop: "40px",
            color: "white",
            fontSize: { xs: "1.5rem", md: "2rem" },
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            transition: "transform 0.3s, filter 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
              filter: "brightness(0.7)",
            },
          }}
        >
          <FaEnvelope size="3rem" />
          <Typography fontSize="20px">E-mail</Typography>
          <Typography fontSize="10px" color="gray">
            vitor95340@gmail.com
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactSection;
