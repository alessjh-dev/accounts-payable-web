import { Box, Button, Slide } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function FileUpload() {
  const handleFileUpload = (event: any) => {
    const files = event.target.files;
  };

  const navigate = useNavigate();

  return (
    <Slide direction="left" in={true}>
    <Box>
      <h1 style={{ marginBottom: "4rem" }}>
        Sube la <span style={{ color: "#1976d2" }}>Factura</span>
      </h1>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: { xs: "none", md: "center" },
          justifyContent: { xs: "none", md: "center" },
        }}
      >
        <input type="file" onChange={handleFileUpload} />
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: { sm: "center" },
        }}
      >
        <Box sx={{ margin: "2rem 2rem 2rem 2rem" }}>
          <button
            style={{ margin: "1rem 1rem 1rem 1rem", backgroundColor: "green" }}
          >
            <FileUploadIcon
              style={{ color: "white" }}
              onClick={() => console.log("Subiendo archivo...")}
              fontSize="medium"
            />
          </button>
          <h2>Subir Archivo</h2>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: { sm: "center" },
        }}
      >
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <ArrowBackIcon
              style={{ color: "#1976d2" }}
              onClick={() => navigate("/request")}
              fontSize="large"
            />
          </button>
          <h3>Atrás</h3>
        </Box>
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <ArrowForwardIcon
              style={{ color: "#1976d2" }}
              onClick={() => navigate("/summary")}
              fontSize="large"
            />
          </button>
          <h3>Siguiente</h3>
        </Box>
      </Box>
    </Box>
    </Slide>
  );
}

export default FileUpload;
