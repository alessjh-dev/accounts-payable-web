import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  CardContent,
  Card,
  Alert,
} from "@mui/material";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PhoneIcon from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmailIcon from "@mui/icons-material/Email";

export default function CreateProvider() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nit, setNit] = useState("");
  const [lineOfBusiness, setLineOfBusiness] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [town, setTown] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [titularName, settitularName] = useState("");
  const [bank, setBank] = useState("");

  const handleSaveClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <Box>
        <h1>
          Crear <span style={{ color: "#1976d2" }}>Proveedor</span>
        </h1>
        {showAlert && (
          <Alert severity="success" onClose={() => setShowAlert(false)}>
            ¡Proveedor guardado exitosamente!
          </Alert>
        )}
        <Box
          display={{ xs: "block", md: "flex" }}
          sx={{
            alignItems: { xs: "none", md: "center" },
            justifyContent: { xs: "none", md: "center" },
            marginTop: { xs: 0, md: "8%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <StorefrontIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="name"
              label="Nombre del Proveedor"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              type={"phone"}
              id="phone"
              label="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              type={"email"}
              id="email"
              label="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <BrandingWatermarkIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              required
              id="nit"
              label={"Nit"}
              value={nit}
              onChange={(e) => setNit(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <BusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="lineOfBusiness"
              label="Giro del Negocio"
              value={lineOfBusiness}
              onChange={(e) => setLineOfBusiness(e.target.value)}
              variant="standard"
            />
          </Box>
        </Box>
        <Box
          display={{ xs: "block", md: "flex" }}
          sx={{
            alignItems: { xs: "none", md: "center" },
            justifyContent: { xs: "none", md: "center" },
            marginTop: { xs: 0, md: "2%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <HomeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="town"
              label="Complemento dirección"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <LocationCityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="city"
              label="Municipio"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <HomeWorkIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="state"
              label={"Departamento"}
              value={state}
              onChange={(e) => setState(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <LanguageIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="country"
              label={"País"}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              variant="standard"
            />
          </Box>
        </Box>
        <Box
          display={{ xs: "block", md: "flex" }}
          sx={{
            alignItems: { xs: "none", md: "center" },
            justifyContent: { xs: "none", md: "center" },
            marginTop: { xs: 0, md: "2%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <AccountBalanceWalletIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              required
              id="accountNumber"
              label="Número de Cuenta"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <SwitchAccountIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              required
              id="accountType"
              label="Tipo de Cuenta"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <AccountBoxIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="titularName"
              label={"Nombre del Titular"}
              value={titularName}
              onChange={(e) => settitularName(e.target.value)}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <AccountBalanceIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              required
              id="bank"
              label={"Banco"}
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              variant="standard"
            />
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
                onClick={() => navigate("/provider-history")}
                fontSize="large"
              />
            </button>
            <h3>Regresar</h3>
          </Box>
          <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
            <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
              <SaveAltIcon
                style={{ color: "#1976d2" }}
                onClick={handleSaveClick}
                fontSize="large"
              />
            </button>
            <h3>Guardar</h3>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
