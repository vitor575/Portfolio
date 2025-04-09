import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import serenatto from '../../../img/Serenatto.png'

const projects = [
  {
    id: 1,
    title: "Athletic",
    description: "Gerenciamento de academia",
    deploy: "",
    image: "/images/projeto1.jpg",
  },
  {
    id: 2,
    title: "Serenatto",
    description: "Projeto da Alura para aprender Bootstrap",
    deploy: "https://serenatto-navy.vercel.app",
    image: serenatto,
  },
];

const ProjetoCarrosel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <Box sx={{ width: "80%", mx: "auto", my: 4 }}>
      <Typography variant="h4" textAlign="center" color="white" mb={2}>
        Meus Projetos
      </Typography>
      <Slider {...settings}>
        {projects.map((project) => (
          <Box
            key={project.id}
            sx={{
              position: "relative",
              p: 2,
              backgroundColor: "rgba(54,47,65,0.9)",
              border: "2px solid #473C61",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Typography variant="h5" mt={2} color="white">
              {project.title}
            </Typography>
            <Typography variant="body2" mt={1} color="white">
              {project.description}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, bgcolor: "#473C61", color: "white" }}
            >
              <Box sx={{textDecoration: 'none', color: 'white'}} component="a" target="_blank" href={project.deploy}>Ver projeto</Box>
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProjetoCarrosel;
