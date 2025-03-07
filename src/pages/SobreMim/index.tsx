import { Box, Button, List, ListItem, Typography } from "@mui/material";
import aboutMeFundo from "../../img/aboutMeFundo.jpg";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const SobreMim = () => {
  const texto =
    "Meu nome é Vitor Hugo, tenho 20 anos e estou concluindo meus estudos em Análise e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul. Durante minha formação, direcionei meus estudos para o desenvolvimento web, com ênfase na linguagem de programação JavaScript. Especializei-me em front-end utilizando React.js e possuo conhecimentos básicos de back-end com Node.js, embora não tenha me aprofundado nessa área. Atualmente, estou em busca da minha primeira oportunidade no setor de tecnologia, uma vez que sou apaixonado por aprender e disposto a expandir meus conhecimentos nesse campo.";

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
      <Box margin="50px" textAlign="center" width="100%" display="flex">
        <Box width="44%">
          <Box sx={{ position: "relative" }}>
            <Typography
              variant="h4"
              component="h3"
              margin=" 20px 0"
              color="white"
            >
              Sobre mim
            </Typography>
          </Box>
          <Box
            padding="20px"
            border="3px solid #473C61"
            bgcolor="rgba(54, 47, 65, 0.8)"
            sx={{ position: "relative" }}
            textAlign="left"
          >
            <Typography color="white">{texto}</Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative", width: "50%" }}>
          <Typography
            variant="h4"
            component="h3"
            margin=" 20px 0"
            color="white"
          >
            Meu curriculo
          </Typography>
          <Button variant="contained" sx={{margin: '100px 0', padding: '10px 30px', bgcolor: '#362f41', border: '3px solid #473C61'}}>Baixar CV</Button>
        </Box>
      </Box>
      <Box position="relative" textAlign="center">
        <Typography color="white" variant="h4">
          Principais habilidades
        </Typography>
        <List
          sx={{ display: "flex", width: "80%", margin: "0 auto", bgcolor: "" }}
        >
          <ListItem sx={{ display: "block", textAlign: "center" }}>
            <FaReact color="lightblue" size="80px" />
            <Typography color="white">REACT</Typography>
          </ListItem>
          <ListItem sx={{ display: "block", textAlign: "center" }}>
            <SiTypescript color="yellow" size="80px" />
            <Typography color="white">TYPESCRIPT</Typography>
          </ListItem>
          <ListItem sx={{ display: "block", textAlign: "center" }}>
            <GrGraphQl color="pink" size="80px" />
            <Typography color="white">GraphQL</Typography>
          </ListItem>
          <ListItem sx={{ display: "block", textAlign: "center" }}>
            <SiRedux color="purple" size="80px" />
            <Typography color="white">REDUX</Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SobreMim;
