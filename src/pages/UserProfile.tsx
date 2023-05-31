import { useEffect, useState } from "react";
import { Box, TextField, Alert, Slide } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { environment } from "../environments/environment";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [lastname, setLastname] = useState("");
  const [showError, setShowError] = useState(false);
  const [passwordNotMatch, setpasswordNotMatch] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("userName") || "");
    setUsername(localStorage.getItem("email") || "");
    setLastname(localStorage.getItem("lastname") || "");
    setId(localStorage.getItem("id") || "");
  }, []);

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event: any) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!password) {
      setShowError(true);
      return;
    }

    if (password != repeatPassword) {
      setpasswordNotMatch(true);
      return;
    }
    
    axios
    .put(`${environment.api}/users/${id}`, {password: password})
    .then((response) => {
      setShowSuccessAlert(true);
      setTimeout(() => {
        navigate("/welcome")
      }, 3000);
    })
    .catch((error) => {
      console.error(error);
    });

  };

  return (
    <Slide direction="up" in={true}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          marginTop: { xs: 0, sm: "5rem" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>
          Cambia tu <span style={{ color: "#1976d2" }}>contraseña</span>
        </h1>
        {showError && (
          <Alert severity="error" onClose={() => setShowError(false)}>
            Por favor completa todos los campos
          </Alert>
        )}

        {showSuccessAlert && (
          <Alert severity="success" onClose={() => setShowSuccessAlert(false)}>
            Datos actualizados correctamente
          </Alert>
        )}

        {passwordNotMatch && (
          <Alert severity="warning" onClose={() => setShowSuccessAlert(false)}>
            Las contraseñas no coinciden
          </Alert>
        )}

        <Box
    
        >
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <p>{name} {lastname} - {username} </p>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            required
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            variant="standard"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            required
            id="repeatPassword"
            label="Repita su Contraseña"
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            variant="standard"
          />
        </Box>
        <button
          color="#1976d2"
          type="submit"
          style={{ margin: "2rem 2rem 2rem 2rem", backgroundColor: "#1976d2" }}
        >
          Guardar Cambios
        </button>
        <Box>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <ArrowBackIcon
              style={{ color: "#1976d2" }}
              onClick={() => navigate("/welcome")}
              fontSize="large"
            />
          </button>
          <h3>Ir a Inicio</h3>
        </Box>
      </Box>
    </Slide>
  );
};

export default UserProfile;
