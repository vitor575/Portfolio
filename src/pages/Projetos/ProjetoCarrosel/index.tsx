import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import serenatto from '../../../img/Serenatto.png'
import { useState } from "react";
import ProjetosModal from "../ProjetosModal";

const projects = [
  {
    id: 1,
    title: "Athletic",
    description: "Desenvolvemos uma aplicação web para o gerenciamento de academias, com foco em treinos e exercícios. O projeto visa facilitar o acompanhamento e a organização dos treinos, bem como permitir a criação, edição e associação de exercícios e treinos aos usuários. E nesse projeto utilizamos as seguintes tecnologias :",
    tecnology: ["React: Criação de interfaces dinâmicas e componentizadas.", "Redux: Gerenciamento eficiente do estado global da aplicação.", "GraphQL com Apollo Client: Comunicação entre o front-end e o back-end por meio de consultas e mutações, proporcionando maior flexibilidade na obtenção e atualização de dados.", "Material UI (MUI): Desenvolvimento de uma interface moderna, responsiva e alinhada aos princípios do Material Design.", "TypeScript: Uso de tipagem estática para garantir maior robustez e manutenção do código."],
    deploy: "",
    image: "/images/projeto1.jpg",
  },
  {
    id: 2,
    title: "Serenatto",
    description: "Este projeto foi desenvolvido durante o curso da Alura para aprimorar o uso de HTML semântico, CSS avançado e Bootstrap. Construímos páginas responsivas que demonstram componentes como navbar, cards e formulários, aplicando as melhores práticas de acessibilidade e mobile-first.",
    tecnology: ["HTML5: marcação semântica para melhor SEO e acessibilidade",
      "CSS3: estilos modernos, Flexbox e Grid para layouts responsivos",
      "Bootstrap: componentes prontos e utilitários para agilizar o desenvolvimento"],
    deploy: "https://serenatto-navy.vercel.app",
    image: serenatto,
  },
];

const ProjetoCarrosel = () => {

  type Project = {
    id: number;
    title: string;
    description: string;
    tecnology: string[]
    deploy: string;
    image: string; 
  };

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject ] = useState<Project | null>(null);
  
  const handleOpenModal = (project: Project) => {
    setOpenModal(true);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
    <Box sx={{ width: "80%", mx: "auto", my: 2}}>
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
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Typography variant="h5" mt={2} color="white">
              {project.title}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, bgcolor: "#473C61", color: "white" }}
            >
              <Button onClick={() => handleOpenModal(project)}>Ver mais</Button>
            </Button> 
          </Box>
        ))}
      </Slider>
      <ProjetosModal open={openModal} handleClose={handleCloseModal} project={selectedProject}/> 
    </Box>
  );
};

export default ProjetoCarrosel;
