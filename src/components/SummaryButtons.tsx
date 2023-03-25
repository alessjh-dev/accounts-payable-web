import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DownloadIcon from "@mui/icons-material/Download";

function SummaryButtons() {
  let isSaved: boolean =
    localStorage.getItem("isSaved") === "true" ? true : false;
  const navigate = useNavigate();

  if (isSaved) {
    return (
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: { sm: "center" },
        }}
      >
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <DownloadIcon
              style={{ color: "#1976d2" }}
              onClick={() => console.log("descargando...")}
              fontSize="large"
            />
          </button>
          <h3>Descargar Solicitud de Pago</h3>
        </Box>
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <ArrowBackIcon
              style={{ color: "#1976d2" }}
              onClick={() => (
                navigate("/welcome"), localStorage.removeItem("isSaved")
              )}
              fontSize="large"
            />
          </button>
          <h3>Ir a Inicio</h3>
        </Box>
      </Box>
    );
  } else {
    return (
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
          <h3>Editar la Solicitud</h3>
        </Box>
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <SaveAltIcon
              style={{ color: "#1976d2" }}
              onClick={() => (isSaved = true,
                localStorage.setItem("isSaved", isSaved.toString()), window.location.reload())}
              fontSize="large"
            />
          </button>
          <h3>Guardar la solicitud</h3>
        </Box>
      </Box>
    );
  }
}

export default SummaryButtons;
