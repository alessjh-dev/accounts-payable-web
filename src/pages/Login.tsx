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
import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { environment } from "../environments/environment";
import { User } from "../interfaces/User.interface";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const [validateFailed, setValidateFailed] = useState(false);
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true" ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/welcome");
    }
  }, []);

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!username || !password) {
      setShowError(true);
      return;
    }

    axios
      .get(`${environment.api}/users/${username}/${password}`)
      .then((response: AxiosResponse<User>) => {
        if (response) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("rol", response.data.role);
          localStorage.setItem("userName", response.data.name);
          localStorage.setItem("email", response.data.username);
          localStorage.setItem("lastname", response.data.lastname);
          localStorage.setItem("id", response.data.id.toString());
          navigate("/welcome");
        } else {
          setInvalidUser(true);
        }
      })
      .catch(() => {
        setValidateFailed(true);
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
        <div>
          <img style={{ maxHeight: "8em" }} src={AppLogo} alt="Mi imagen" />
        </div>
        <h1>
          Inicia sesión en tu <span style={{ color: "#1976d2" }}>cuenta</span>
        </h1>
        {showError && (
          <Alert severity="error" onClose={() => setShowError(false)}>
            Por favor ingresa tu nombre de usuario y contraseña.
          </Alert>
        )}

        {invalidUser && (
          <Alert severity="error" onClose={() => setInvalidUser(false)}>
            El nombre de usuario o contraseña están incorrectos.
          </Alert>
        )}

        {validateFailed && (
          <Alert severity="error" onClose={() => setValidateFailed(false)}>
            No pudimos validar tu usuario y contraseña.
          </Alert>
        )}

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
            type="username"
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
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            variant="standard"
          />
        </Box>
        <button
          color="#1976d2"
          type="submit"
          style={{ margin: "2rem 2rem 2rem 2rem", backgroundColor: "#1976d2" }}
        >
          Iniciar sesión
        </button>
      </Box>
    </Slide>
  );
};

export default Login;
