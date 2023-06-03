import { Alert, Box, Button, Slide } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { environment } from "../environments/environment";
import uploaded from "./../public/uploaded.png";

function FileUpload() {
  const [file, setFile] = useState<File>();
  const [isUpload, setIsUpload] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleFileUpload = (event: any) => {
    setFile(event.target.files[0]);
    console.log(file);
  };

  const handleClickUpload = () => {
    setShowAlert(false);
    if (!file) {
      setShowAlert(true);
      return;
    }
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file ? file : "");
    axios
      .post(`${environment.api}/bills`, formData)
      .then((response) => {
        setTimeout(() => {
          localStorage.setItem("fileId", response.data.data);
          setIsUploading(false);
          setIsUpload(true);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigate = useNavigate();

  return (
    <Slide direction="left" in={true}>
      <Box>
        <h1 style={{ marginBottom: "4rem" }}>
          Sube la <span style={{ color: "#1976d2" }}>Factura</span>
        </h1>
        <br />
        {showAlert && (
          <Alert severity="warning" onClose={() => setShowAlert(false)}>
            No has elegido ningún archivo
          </Alert>
        )}
        <br />
        {!isUpload && !isUploading && (
          <Box>
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
                  style={{
                    margin: "1rem 1rem 1rem 1rem",
                    backgroundColor: "green",
                  }}
                >
                  <FileUploadIcon
                    style={{ color: "white" }}
                    onClick={handleClickUpload}
                    fontSize="medium"
                  />
                </button>
                <h2>Subir Archivo</h2>
              </Box>
            </Box>
          </Box>
        )}
        {isUploading && (
          <Box>
            <img src={uploaded} height={300} alt="" />
            <h2>
              ¡Estamos <span style={{ color: "#1976d2" }}>subiendo</span> tu
              archivo!
            </h2>
          </Box>
        )}

        {isUpload && (
          <Box>
            <img src={uploaded} height={300} alt="" />
            <h2>
              Archivo Subido{" "}
              <span style={{ color: "#1976d2" }}>correctamente</span>, ya puedes
              continuar
            </h2>
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
        )}
      </Box>
    </Slide>
  );
}

export default FileUpload;
