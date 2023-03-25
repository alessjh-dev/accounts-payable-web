import "./../App.css";
import Box from "@mui/material/Box";
import LibraryAddTwoToneIcon from "@mui/icons-material/LibraryAddTwoTone";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";
import { useNavigate } from "react-router-dom";
import { Slide } from "@mui/material";
import WelcomeButtons from "../components/WelcomeButtons";
import React, { useEffect } from "react";

function Welcome() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" ? true : false;
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <Slide direction="right" in={true}>
      <Box className="Welcome">
        <Box sx={{ marginBottom: { xs: 0, sm: "7%" } }}>
          <h1>
            Hola <span style={{ color: "#1976d2" }}>{userName}</span>, ¿Qué
            quieres hacer hoy?
          </h1>
        </Box>
        <Box
      className="Options"
      sx={{
        display: { xs: "block", sm: "flex" },
        alignItems: { sm: "center" },
        justifyContent: { sm: "center" },
      }}
    >
      <WelcomeButtons />
    </Box>
      </Box>
    </Slide>
  );
}
export default Welcome;
