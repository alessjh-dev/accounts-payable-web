import "./../App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import LibraryAddTwoToneIcon from "@mui/icons-material/LibraryAddTwoTone";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";
import { useNavigate } from "react-router-dom";

const userName: string = "Alessandro";
const role: string = "expert";

function Welcome() {
  return (
    <Box className="Welcome">
      <h1>
        Hola <span style={{ color: "#1976d2" }}>{userName}</span>, ¿Qué quieres
        hacer hoy?
      </h1>
      <ShowOptions />
    </Box>
  );
}

function ShowOptions() {
  const navigate = useNavigate();
  return (
    <Box
      className="Options"
      sx={{
        display: { xs: "block", sm: "flex" },
        alignItems: { sm: "center" },
        justifyContent: { sm: "center" },
      }}
    >
      {role === "expert" ? (
        <Box>
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
      ) : (
        <Box>
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
            {role === "approver" ? (
              <h3>Aprobar Solicitudes</h3>
            ) : (
              <h3>Pagar Solicitudes</h3>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Welcome;
