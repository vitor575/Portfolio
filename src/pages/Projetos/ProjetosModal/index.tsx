import React, { useEffect } from "react";
import { Box, Button, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type Project = {
  id?: number;
  nome?: string;
  desc?: string;
  url?: string;
  videoUrl?: string;
  tech: React.ReactNode[];
  repo?: string;
};

interface ProjetosModalProps {
  open: boolean;
  handleClose: () => void;
  project: Project | null;
}

const ProjetosModal: React.FC<ProjetosModalProps> = ({
  open,
  handleClose,
  project,
}) => {
  useEffect(() => {
    const api = (
      window as unknown as {
        fullpage_api?: {
          setAllowScrolling: (enabled: boolean) => void;
          setKeyboardScrolling?: (enabled: boolean) => void;
        };
      }
    ).fullpage_api;

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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: "rgba(54,47,65,1)",
          width: 1200,
          height: 550,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          borderRadius: 2,
          outline: "none",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, left: 8, color: "white" }}
          size="large"
        >
          <CloseIcon />
        </IconButton>
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
            {project?.nome}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            mt: 2,
            width: "100%",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              pr: 1,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {project?.videoUrl ? (
              <Box
                component="video"
                src={project.videoUrl}
                controls
                muted
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: 2,
                  border: "2px solid #473C61",
                  objectFit: "contain",
                  display: "block",
                  "&::-webkit-media-controls-volume-slider": {
                    display: "none",
                  },
                  "&::-webkit-media-controls-mute-button": {
                    display: "none",
                  },
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1,
                }}
              >
                <Typography color="white">Vídeo indisponível</Typography>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "#2c2635",
              border: "2px solid #473C61",
              borderRadius: 2,
              p: 2,
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Typography
              color="#78679e"
              fontSize="32px"
              borderBottom="2px solid #473C61"
            >
              Descrição
            </Typography>
            <Typography color="white" fontSize={13} component="p" mt={1}>
              {project?.desc}
            </Typography>
            <Typography
              color="#78679e"
              fontSize="16px"
              borderBottom="2px solid #473C61"
              mt={2}
            >
              Tecnologias
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 2,
              }}
            >
              {project?.tech.map((icone, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                  {icone}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "auto",
            textAlign: "center",
            pt: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Button
            component="a"
            href={project?.url || "#"}
            target="_blank"
            variant="contained"
            disabled={!project?.url}
            sx={{
              bgcolor: "#473C61",
              color: "white",
              border: "2px solid #1d1927",
            }}
          >
            Deploy
          </Button>
          <Button
            component="a"
            href={project?.repo || "#"}
            target="_blank"
            variant="contained"
            sx={{
              bgcolor: "#473C61",
              color: "white",
              border: "2px solid #1d1927",
            }}
          >
            Repositório
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjetosModal;
