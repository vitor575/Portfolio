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

const HeroSection = () => {
  const handleNavigation = (section: number) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(section);
    }
  };

  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: "3%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://github.com/vitor575.png"
            sx={{
              width: "200px",
              height: "200px",
              border: "7px solid #473C61",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Typography
              component="h1"
              fontSize="40px"
              margin="0 0 10px 0"
              color="white"
            >
              Vitor Hugo S. de Souza
            </Typography>
          </motion.div>
          <Typography
            fontSize="24px"
            component="h2"
            color="white"
            padding="10px"
            border="3px solid #473C61"
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
          </Typography>
        </motion.div>
        <Box sx={{ width: "100%", margin: "5px 0" }}>
          <List sx={{ display: "flex", justifyContent: "center" }}>
            {[
              {
                title: "Sobre mim",
                icon: <PersonIcon sx={{ width: "80px", height: "80px" }} />,
                section: 2,
              },
              {
                title: "Meus projetos",
                icon: <CodeIcon sx={{ width: "80px", height: "80px" }} />,
                section: 3,
              },
              {
                title: "Entre em contato",
                icon: <PhoneIcon sx={{ width: "80px", height: "80px" }} />,
                section: 4,
              },
            ].map((item, index) => (
              <ListItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    boxShadow: "0 0 10px 10px rgba(71, 60, 97, 0.9)",
                    scale: 0.95
                  }}
                  transition={{ duration: 0.9 }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      bgcolor: "rgba(54, 47, 65, 0.9)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "5px",
                      padding: "10px",
                      border: "2px solid #473C61",
                    }}
                  >
                    <CardHeader
                      title={
                        <Typography variant="h5" component="h3" color="white">
                          {item.title}
                        </Typography>
                      }
                    />
                    <CardMedia>{item.icon}</CardMedia>
                    <CardActions>
                      <Button
                        sx={{ border: "2px solid white", color: "white" }}
                        variant="outlined"
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
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
