import * as React from "react";
import { TextField, InputAdornment, Box, Slide, MenuItem } from "@mui/material";
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

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "GTQ",
    label: "Q",
  },
];

const providers = [
  {
    value: "1",
    label: "PINTURERIA EL AMIGO, S.A.",
  },
  {
    value: "2",
    label: "CARNICERIA LA BENDICIÓN, S.A",
  },
];

const paymentMethods = [
  {
    value: "1",
    label: "Transferencia",
  },
  {
    value: "2",
    label: "Cheque",
  },
];

const expenseType = [
  {
    value: "1",
    label: "Suministros",
  },
  {
    value: "2",
    label: "Alquileres",
  },
  {
    value: "3",
    label: "Materiales",
  },
  {
    value: "4",
    label: "Útiles y Enseres",
  },
  {
    value: "5",
    label: "Mobiliario y Equipo",
  },
];

export default function Request() {
  let inputData: RequestInterface = localStorage.getItem("request")
    ? JSON.parse(localStorage.getItem("request") || "{}")
    : new RequestInterface();
  const navigate = useNavigate();

  return (
    <Slide direction="left" in={true}>
      <Box>
        <h1>
          Solicitud de pago a{" "}
          <span style={{ color: "#1976d2" }}>Proveedores</span>
        </h1>

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
              id="documentNumber"
              label="Número de la Factura"
              value={inputData.documentNumber}
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
              type={"number"}
              id="ammount"
              label="Monto de la Factura"
              value={inputData.amount}
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
              type={"number"}
              id="exchangeRate"
              label="Tipo de Cambio"
              value={inputData.exchangeRate}
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
             <DateRangeIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              required
              helperText="Selecciona la fecha de la factura"
              type="date"
              id="documentDate"
              value={inputData.documentDate}
              variant="standard"
            />
          </Box>
        </Box>
        <Box
          display={{ xs: "block", md: "flex" }}
          sx={{
            alignItems: { xs: "none", md: "center" },
            justifyContent: { xs: "none", md: "center" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
            }}
          >
            <MonetizationOnIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              required
              select
              id="currency"
              label="Moneda"
              helperText="Selecciona la moneda"
              defaultValue="GTQ"
              SelectProps={{
                native: true,
              }}
              variant="standard"
              value={inputData.currency}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
              minWidth: {xs: "none", md: "15rem"}
            }}
          >
            <ShoppingBagIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="expenseType"
              label="Tipo de Pago"
              value={inputData.expenseType}
              variant="standard"
              select
              helperText="Selecciona la moneda"
              SelectProps={{
                native: true,
              }}
            >
              {expenseType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
              minWidth: { xs: "none", md: "15rem" },
            }}
          >
            <StoreIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              select
              id="providerName"
              label="Nombre del Proveedor"
              value={inputData.providerName}
              variant="standard"
              helperText="Selecciona el proveedor"
              SelectProps={{
                native: true,
              }}
            >
              {providers.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", md: "3rem" },
              minWidth: { xs: "none", md: "15rem" },
            }}
          >
            <PaymentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              select
              fullWidth
              required
              id="paymentType"
              label="Pago a Proveedor"
              value={inputData.paymentType}
              variant="standard"
              helperText="Selecciona el proveedor"
              SelectProps={{
                native: true,
              }}
            >
              {paymentMethods.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
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
                onClick={() => navigate("/welcome")}
                fontSize="large"
              />
            </button>
            <h3>Ir a Inicio</h3>
          </Box>
          <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
            <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
              <ArrowForwardIcon
                style={{ color: "#1976d2" }}
                onClick={() => (
                  navigate("/file-upload"),
                  localStorage.setItem("request", JSON.stringify(inputData))
                )}
                fontSize="large"
              />
            </button>
            <h3>Siguiente</h3>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}
