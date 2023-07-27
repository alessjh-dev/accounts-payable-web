import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import LibraryAddTwoToneIcon from "@mui/icons-material/LibraryAddTwoTone";
import DownloadIcon from "@mui/icons-material/Download";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";
import StoreIcon from "@mui/icons-material/Store";
import axios from "axios";
import { environment } from "../environments/environment";

export default function WelcomeButtons() {
  const role = localStorage.getItem("rol");
  const navigate = useNavigate();
  const handleDownloadRequest = () => {
    axios
      .get(`${environment.reportsApi}/reports/providers/top`, {
        responseType: "blob",
      })
      .then((response) => {
        const contentType = response.headers["content-type"];
        const extension = contentType.split("/").pop();
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Top de proveedores.${extension}`);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDownloadTop = () => {
    axios
      .get(`${environment.reportsApi}/reports/purchases/top`, {
        responseType: "blob",
      })
      .then((response) => {
        const contentType = response.headers["content-type"];
        const extension = contentType.split("/").pop();
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Top de pagos.${extension}`);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
              onClick={() => navigate("/bill-type")}
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
  } else if (role === "manager") {
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
          <h3>Aprobación de Solicitudes</h3>
        </Box>
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <DownloadIcon
              style={{ color: "#1976d2" }}
              onClick={handleDownloadRequest}
              fontSize="large"
            />
          </button>
          <h3>Top de proveedores</h3>
        </Box>
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <DownloadIcon
              style={{ color: "#1976d2" }}
              onClick={handleDownloadTop}
              fontSize="large"
            />
          </button>
          <h3>Top de pagos</h3>
        </Box>
      </Box>
    );
  }
  return null;
}
