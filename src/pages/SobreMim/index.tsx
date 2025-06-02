import { Box, List, ListItem, Typography } from "@mui/material";
import aboutMeFundo from "../../img/aboutMeFundo.jpg";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { motion } from "framer-motion";

const SobreMim = () => {
  const MotionListItem = motion(ListItem);

  const texto =
    "Meu nome é Vitor Hugo, tenho 20 anos e estou concluindo meus estudos em Análise e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul. Desenvolvedor Front-end com experiência em React.js,Redux, JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs REST e GraphQL, estou em busca da minha primeira oportunidade no setor de tecnologia, uma vez que sou apaixonado por aprender e disposto a expandir meus conhecimentos nesse campo.";

  const techList = [
    { name: "React.JS", icon: <FaReact color="lightblue" size="80px" /> },
    {
      name: "Node.JS",
      icon: <FaNodeJs color="green" size="80px" />,
    },
    { name: "TypeScript", icon: <SiTypescript color="blue" size="80px" /> },
    { name: "GraphQL", icon: <GrGraphQl color="pink" size="80px" /> },
    { name: "Redux", icon: <SiRedux color="purple" size="80px" /> },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${aboutMeFundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
        margin="50px 0 20px 50px"
        textAlign="center"
        width="100%"
        display="flex"
        justifyContent="space-around"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: "45%", position: "relative" }}
        >
          <Typography variant="h4" component="h3" margin="20px 0" color="white">
            Sobre mim
          </Typography>
          <Box
            padding="20px"
            border="3px solid #473C61"
            bgcolor="rgba(54, 47, 65, 0.8)"
            textAlign="left"
          >
            <Typography color="white">{texto}</Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: "45%", position: "relative" }}
        >
          <Typography variant="h4" component="h3" margin="20px 0" color="white">
            Meu currículo
          </Typography>
          <motion.a
            href="/download/Curriculo-vitor.pdf"
            download="VitorHugoCV.pdf"
            whileHover={{
              boxShadow: "0 0 10px 5px rgba(71, 60, 97, 0.9)",
              scale: 1.01,
            }}
            transition={{ duration: 0.3 }}
            style={{
              display: "inline-block",
              textDecoration: "none",
              padding: "10px 30px",
              backgroundColor: "#362f41",
              border: "3px solid #473C61",
              color: "white",
              margin: "80px 0",
              borderRadius: "5px",
            }}
          >
            Baixar CV
          </motion.a>
        </motion.div>
      </Box>
      <Box position="relative" textAlign="center" margin="60px 0">
        <Typography color="white" variant="h4">
          Principais habilidades
        </Typography>
        <List
          sx={{
            display: "flex",
            width: "90%",
            margin: "0 auto",
            justifyContent: "space-around",
          }}
        >
          {techList.map((tech, index) => (
              <MotionListItem
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  transition: { duration: 0.9 },
                  y: -10,
                  boxShadow: "0 0 10px 10px rgba(71, 60, 97, 0.9)",
                  scale: 0.93,
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                sx={{
                  display: "block",
                  textAlign: "center",
                  bgcolor: "#362f41",
                  width: "12%",
                  borderBottom: "5px solid #473C61",
                  borderRadius: "30px 0 0 0",
                  padding: "8px",
                  margin: "0 auto",
                }}
              >
                {tech.icon}
                <Typography color="white">{tech.name}</Typography>
              </MotionListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SobreMim;
