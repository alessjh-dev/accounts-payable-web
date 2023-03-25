import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import LibraryAddTwoToneIcon from "@mui/icons-material/LibraryAddTwoTone";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";
import StoreIcon from "@mui/icons-material/Store";

export default function WelcomeButtons() {
  const role = localStorage.getItem("rol");
  const navigate = useNavigate();
  if (role === "expert") {
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
            <LibraryAddTwoToneIcon
              style={{ color: "#1976d2" }}
              onClick={() => navigate("/request")}
              fontSize="large"
            />
          </button>
          <h3>Ingresar una nueva Solicitud</h3>
        </Box>
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button
            style={{ margin: "2rem 2rem 2rem 2rem" }}
            onClick={() => navigate("/history")}
          >
            <ManageSearchTwoToneIcon
              style={{ color: "#1976d2" }}
              fontSize="large"
            />
          </button>
          <h3>Historial de Solicitudes</h3>
        </Box>
      </Box>
    );
  } else if (role === "approver") {
    return (
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: { sm: "center" },
        }}
      >
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button
            style={{ margin: "2rem 2rem 2rem 2rem" }}
            onClick={() => navigate("/provider-history")}
          >
            <StoreIcon style={{ color: "#1976d2" }} fontSize="large" />
          </button>
          <h3>Gestión de Proveedores</h3>
        </Box>
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button
            style={{ margin: "2rem 2rem 2rem 2rem" }}
            onClick={() => navigate("/history")}
          >
            <ManageSearchTwoToneIcon
              style={{ color: "#1976d2" }}
              fontSize="large"
            />
          </button>
          <h3>Aprobación de Solicitudes</h3>
        </Box>
      </Box>
    );
  } else if (role === "payer") {
    return (
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: { sm: "center" },
        }}
      >
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button
            style={{ margin: "2rem 2rem 2rem 2rem" }}
            onClick={() => navigate("/history")}
          >
            <ManageSearchTwoToneIcon
              style={{ color: "#1976d2" }}
              fontSize="large"
            />
          </button>
          <h3>Pago de Solicitudes</h3>
        </Box>
      </Box>
    );
  }
  return null;
}
