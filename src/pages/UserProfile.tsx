import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Slide,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import AppLogo from "./../public/AppLogo.png";
import PersonIcon from "@mui/icons-material/Person";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [names, setName] = useState("");
  const [lastnames, setLastname] = useState("");
  const [showError, setShowError] = useState(false);
  const [passwordNotMatch, setpasswordNotMatch] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event: any) => {
    setRepeatPassword(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleLastnameChange = (event: any) => {
    setLastname(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!username || !password) {
      setShowError(true);
      return;
    }

    if (password != repeatPassword) {
      setpasswordNotMatch(true);
      return;
    }
    setShowSuccessAlert(true);
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
          Editar datos del <span style={{ color: "#1976d2" }}>Perfil</span>
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
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            required
            id="name"
            label="Nombres"
            value={names}
            onChange={handleNameChange}
            variant="standard"
            type={"name"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <PermIdentityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            required
            id="lastnames"
            label="Apellidos"
            value={lastnames}
            onChange={handleLastnameChange}
            variant="standard"
            type={"lastname"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            required
            id="email"
            label="Correo"
            value={email}
            onChange={handleEmailChange}
            variant="standard"
            type={"email"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            required
            id="username"
            label="Nombre de usuario"
            value={username}
            onChange={handleUsernameChange}
            variant="standard"
            type={"username"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center"
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
