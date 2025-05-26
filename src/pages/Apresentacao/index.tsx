import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  Typography,
  List,
  ListItem,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Box,
  Card,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIcon from "@mui/icons-material/Phone";
import fundo from "../../img/fundo.jpg";
import { Typewriter } from "react-simple-typewriter";

const MotionBox = motion(Box);

const HeroSection: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  const handleNavigation = (section: number) => {
    window.fullpage_api?.moveTo(section);
  };

  return (
    <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />
      <MotionBox
        initial={{ width: 0, height: 0 }}
        animate={{ width: "80%", height: "95%"}}
        transition={{
          ease: "easeInOut",
          rotateX: {duration: 1},
          width: { duration: 1 },
          height: { duration: 1, delay: 1 },
        }}
        onAnimationComplete={() => setShowContent(true)}
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          boxSizing: "border-box",
          overflow: "hidden",
          p: 2,
          borderRadius: 2,
          bgcolor: "rgba(54, 47, 65, 0.7)",
          border: "2px solid #72619b",
        }}
      >
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://github.com/vitor575.png"
              sx={{
                width: 200,
                height: 200,
                border: "4px solid #72619b",
              }}
              
            />
            <Typography
              component="h1"
              fontSize="40px"
              color="white"
              mt={2}
              mb={1}
            >
              Vitor Hugo S. de Souza
            </Typography>
            <Box
              sx={{
                p: 1,
                border: "3px solid #72619b",
                bgcolor: "rgba(39, 34, 48, 1)",
                color: "white",
                fontSize: "20px"
              }}
            >
              <Typewriter
                words={["Desenvolvedor Front-end"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={3000}
                
              />
            </Box>
            <List
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 2,
                width: "100%",
                boxSizing: "border-box",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  title: "Sobre mim",
                  icon: <PersonIcon sx={{ fontSize: 80, color: "white" }} />,
                  section: 2,
                },
                {
                  title: "Meus projetos",
                  icon: <CodeIcon sx={{ fontSize: 80, color: "white" }} />,
                  section: 3,
                },
                {
                  title: "Entre em contato",
                  icon: <PhoneIcon sx={{ fontSize: 80, color: "white" }} />,
                  section: 4,
                },
              ].map((item) => (
                <ListItem key={item.title} sx={{ p: 0, width: 300 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 0 10px rgba(71,60,97,0.9)",
                    }}
                  >
                    <Card
                      sx={{
                        width: "300px",
                        textAlign: "center",
                        bgcolor: "rgba(39,34,48,1)",
                        border: "2px solid #72619b",
                        padding: 2
                      }}
                    >
                      <CardHeader
                        sx={{m: 0, p: 0}}
                        title={
                          <Typography variant="h6" color="white">
                            {item.title}
                          </Typography>
                        }
                      />
                      <CardMedia>{item.icon}</CardMedia>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Button
                          variant="outlined"
                          sx={{ borderColor: "white", color: "white", p:0 }}
                          onClick={() => handleNavigation(item.section)}
                        >
                          Ver mais
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}
      </MotionBox>
    </Box>
  );
};

export default HeroSection;
