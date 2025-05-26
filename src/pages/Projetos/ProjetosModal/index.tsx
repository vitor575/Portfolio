import React, { useEffect } from "react";
import { Box, Button, List, ListItem, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export type Project = {
  id: number;
  title: string;
  description: string;
  tecnology: string[];
  deploy: string;
  image: string;
};

interface ProjetosModalProps {
  open: boolean;
  handleClose: () => void;
  project: Project | null;
}

const ProjetosModal: React.FC<ProjetosModalProps> = ({ open, handleClose, project }) => {
  useEffect(() => {
    const api = (window as unknown as {
      fullpage_api?: {
        setAllowScrolling: (enabled: boolean) => void;
        setKeyboardScrolling?: (enabled: boolean) => void;
      };
    }).fullpage_api;

    if (api) {
      if (open) {
        api.setAllowScrolling(false);
        api.setKeyboardScrolling?.(false);
      } else {
        api.setAllowScrolling(true);
        api.setKeyboardScrolling?.(true);
      }
    }

    return () => {
      if (api) {
        api.setAllowScrolling(true);
        api.setKeyboardScrolling?.(true);
      }
    };
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableEnforceFocus
      sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", pt: 4 }}
    >
      <Box
        sx={{
          position: 'relative',
          bgcolor: "rgba(54,47,65,1)",
          width: 1000,
          height: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          borderRadius: 2,
          outline: 'none',
        }}
      >
        {/* Botão de fechar */}
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, left: 8, color: 'white' }}
          size="large"
        >
          <CloseIcon />
        </IconButton>

        {/* Título */}
        <Box
          sx={{
            bgcolor: "#2c2635",
            borderBottom: "5px solid #473C61",
            borderRadius: 2,
            width: "60%",
            textAlign: "center",
            alignSelf: "center",
            py: 1,
            mt: 3,
          }}
        >
          <Typography color="white" fontSize={25}>
            {project?.title}
          </Typography>
        </Box>

        {/* Conteúdo principal */}
        <Box sx={{ display: "flex", flex: 1, mt: 2, width: '100%', overflow: 'hidden' }}>
          <Box sx={{ flex: 1, pr: 1, height: '100%' }}>
            <video width="100%" height="100%">
              <source />
            </video>
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "#2c2635",
              border: "2px solid #473C61",
              borderRadius: 2,
              p: 2,
              height: '100%',
              overflowY: "auto",
            }}
          >
            <Typography color="white" fontSize={13} component="div">
              {project?.description}
            </Typography>
            <List component="ul" sx={{ listStyleType: "disc", pl: 4, mt: 1 }}>
              {project?.tecnology.map((tec, i) => (
                <ListItem key={i} component="li" sx={{ display: "list-item", py: 0.5 }}>
                  <Typography color="white" fontSize={13}>{tec}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        {/* Rodapé com botão fixo */}
        <Box
          sx={{
            mt: 'auto',
            textAlign: "center",
            pt: 2,
            borderTop: "1px solid #473C61",
            width: '100%'
          }}
        >
          <Button
            component="a"
            href={project?.deploy || '#'}
            target="_blank"
            variant="contained"
            sx={{ bgcolor: "#473C61", color: "white" }}
          >
            Ver deploy
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjetosModal;
