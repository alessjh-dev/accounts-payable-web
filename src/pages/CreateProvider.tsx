import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  CardContent,
  Card,
  Alert,
} from "@mui/material";
import { ProviderInterface } from "../interfaces/ProviderInterface";
import Box from "@mui/material/Box";
import { InputAdornment, Slide, MenuItem } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { RequestInterface } from "../interfaces/RequestInterface";
import MoneyIcon from "@mui/icons-material/Money";
import StoreIcon from "@mui/icons-material/Store";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

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
    setShowAlert(true)
  };

  return (
    <div>
      <Box>
        <h1>
          Editar <span style={{ color: "#1976d2" }}>Proveedor</span>
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
            <ArticleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <MoneyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <CurrencyExchangeIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
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
            <DateRangeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <ArticleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <MoneyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <CurrencyExchangeIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
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
            <DateRangeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <DateRangeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <MoneyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <CurrencyExchangeIcon
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
            <DateRangeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
            <DateRangeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
