import { Box } from "@mui/material";
import aboutMeFundo from "../../img/fundoProjetos.jpg";
import { motion } from "framer-motion";
import ProjetoCarrosel from "./ProjetoCarrosel";

const Projetos = () => {
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
      <Box position="relative" textAlign="center" margin="60px 0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ProjetoCarrosel />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Projetos;
