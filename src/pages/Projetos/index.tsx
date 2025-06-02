import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import aboutMeFundo from "../../img/fundoProjetos.jpg";
import meteora from "../../img/meteora.jpg";
import meteoraVideo from "../../img/meteoraVideo.mp4";
import dev_res from "../../img/dev_res.jpg";
import dev_resVideo from "../../img/dev_res-video.mp4";
import athletic_force from "../../img/athletic_force.jpg";
import athletic_forceVideo from "../../img/Athletic_ForceVideo.mp4";
import ProjetosModal from "./ProjetosModal";
import { FaCss3Alt, FaNode, FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiGraphql, SiMysql, SiRedux, SiTypescript } from "react-icons/si";
import materialUi from "../../img/Material UI.png";

type Projeto = {
  nome?: string;
  url: string;
  desc?: string;
  imagem?: string;
  videoUrl?: string;
  tech: React.ReactNode[];
  repo?: string;
};

const Projetos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjeto, setSelectedProjeto] = useState<Projeto | null>(null);

  const materialUIBox = (
    <Box
      component="img"
      src={materialUi}
      alt="Material UI"
      key="materialui"
      sx={{ width: 32, height: 32 }}
    />
  );

  const projetos: Projeto[] = [
    {
      nome: "Meteora",
      url: "https://loja-virtual-rho-six.vercel.app",
      desc: "O projeto da loja meteora foi um projeto de porte menor que fiz no intuito de estudar Bootstrap, HTML e CSS. Esse projeto foi realizado enquanto eu assistia às aulas do curso “Bootstrap5: crie uma landing page responsiva”.",
      imagem: meteora,
      videoUrl: meteoraVideo,
      tech: [
        <BsBootstrap key="bootstrap" size={32} color="#563d7c" />,
        <FaHtml5 key="html5" size={32} color="#E34F26" />,
        <FaCss3Alt key="css3" size={32} color="#1572B6" />,
      ],
      repo: "https://github.com/vitor575/loja-virtual",
    },
    {
      nome: "Dev_res",
      url: "",
      desc: "O projeto dev_res foi desenvolvido como parte de uma disciplina da faculdade. Inicialmente, minha responsabilidade seria apenas o front-end, mas acabei implementando ambas as camadas da aplicação (front-end e back-end). Trata-se de um sistema simples que simula um cardápio virtual de restaurante, incluindo também uma área administrativa que permite adicionar, editar excluir pratos desse cardápio.",
      imagem: dev_res,
      videoUrl: dev_resVideo,
      tech: [
        <IoLogoJavascript key="javaScript" size={32} color="#F7DF1E" />,
        <FaHtml5 key="html5" size={32} color="#E34F26" />,
        <FaCss3Alt key="css3" size={32} color="#1572B6" />,
        <FaNode key="Node" size={32} color="#339933" />,
        <SiMysql key="Mysql" size={32} color="#1572B6" />,
      ],
      repo: "https://github.com/vitor575/projeto-facul",
    },
    {
      nome: "Athletic Force",
      url: "",
      desc: `Athletic Force é um sistema de gestão de academia desenvolvido em parceria com dois colegas:
        um responsável pelo back-end e outro pela área do aluno, enquanto eu cuido da área
        administrativa. O objetivo é permitir que administradores cadastrem e gerenciem exercícios,
        treinos e rotinas, que instrutores apliquem e visualizem essas informações, e que alunos
        acompanhem seus treinos e rotinas.

        A aplicação está em fase de desenvolvimento, com funcionalidades básicas já implementadas
        (cadastro de exercícios, treinos e rotinas, interface administrativa e autenticação), mas
        muitas telas e regras de negócio ainda estão em aprimoramento. O back-end foi escrito em
        Java e utiliza MongoDB; no front-end usamos React e Redux, Apollo Client para
        consumir a API GraphQL, e Material UI para os componentes visuais.`,
      imagem: athletic_force,
      videoUrl: athletic_forceVideo,
      tech: [
        <IoLogoJavascript key="javascript" size={32} color="#F7DF1E" />,
        <SiTypescript key="typescript" size={32} color="#3178C6" />,
        <FaReact key="react" size={32} color="#61DAFB" />,
        <SiRedux key="redux" size={32} color="#764ABC" />,
        <SiGraphql key="graphql" size={32} color="#E535AB" />,
        materialUIBox,
      ],
      repo: "https://github.com/vitor575/athletic-force",
    },
  ];

  const handleCardClick = (projeto: Projeto) => {
    setSelectedProjeto(projeto);
    setModalOpen(true);
  };

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

      <Box position="relative" textAlign="center" mt={4}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            fontSize="40px"
            color="white"
            mb={2}
            pb={2}
            borderBottom={"2px solid #473C61"}
          >
            Meus projetos
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={4} m="40px 100px">
            {projetos.map((projeto) => (
              <motion.div
                key={projeto.nome}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 60px #705e99",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handleCardClick(projeto)}
                style={{
                  width: 350,
                  height: 180,
                  position: "relative",
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.5)",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src={projeto.imagem}
                  alt={projeto.nome}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "brightness(0.5)",
                    display: "block",
                    mx: "auto",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="white"
                    sx={{
                      backgroundColor: "rgba(0,0,0,0.3)",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      borderBottom: "2px solid #473C61",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {projeto.nome}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mt: 1,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      px: 1,
                      borderRadius: 1,
                      borderBottom: "2px solid #473C61",
                      pt: "7px",
                    }}
                  >
                    {projeto.tech.map((icone, idx) => (
                      <Box key={idx}>{icone}</Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>

      <ProjetosModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        project={
          selectedProjeto
            ? {
                id: 1,
                nome: selectedProjeto.nome,
                desc: selectedProjeto.desc,
                url: selectedProjeto.url,
                videoUrl: selectedProjeto.videoUrl,
                tech: selectedProjeto.tech,
                repo: selectedProjeto.repo,
              }
            : null
        }
      />
    </Box>
  );
};

export default Projetos;
