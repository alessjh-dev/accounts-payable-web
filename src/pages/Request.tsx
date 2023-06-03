import * as React from "react";
import {
  TextField,
  InputAdornment,
  Box,
  Slide,
  MenuItem,
  Alert,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
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
import { ProviderInterface } from "../interfaces/ProviderInterface";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { environment } from "../environments/environment";
import { RequestInterface } from "../interfaces/RequestInterface";

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

const billTypes = [
  {
    value: "Factura de pagos parciales",
    label: "Factura de pagos parciales",
  },
  {
    value: "Factura de anticipo",
    label: "Factura de anticipo",
  },
  {
    value: "Facturas de ajuste",
    label: "Facturas de ajuste",
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

const expenses = [
  {
    value: "Agricultura y ganadería",
    label: "Agricultura y ganadería",
  },
  {
    value: "Alimentación y bebidas",
    label: "Alimentación y bebidas",
  },
  {
    value: "Artesanías",
    label: "Artesanías",
  },
  {
    value: "Automotriz",
    label: "Automotriz",
  },
  {
    value: "Bienes raíces",
    label: "Bienes raíces",
  },
  {
    value: "Comercio al por mayor y al por menor",
    label: "Comercio al por mayor y al por menor",
  },
  {
    value: "Construcción",
    label: "Construcción",
  },
  {
    value: "Consultoría",
    label: "Consultoría",
  },
  {
    value: "Educación y capacitación",
    label: "Educación y capacitación",
  },
  {
    value: "Energía y medio ambiente",
    label: "Energía y medio ambiente",
  },
  {
    value: "Entretenimiento y medios de comunicación",
    label: "Entretenimiento y medios de comunicación",
  },
  {
    value: "Finanzas y seguros",
    label: "Finanzas y seguros",
  },
  {
    value: "Industria aeroespacial y defensa",
    label: "Industria aeroespacial y defensa",
  },
  {
    value: "Industria química y petroquímica",
    label: "Industria química y petroquímica",
  },
  {
    value: "Ingeniería y tecnología",
    label: "Ingeniería y tecnología",
  },
  {
    value: "Investigación y desarrollo",
    label: "Investigación y desarrollo",
  },
  {
    value: "Logística y transporte",
    label: "Logística y transporte",
  },
  {
    value: "Manufactura y producción",
    label: "Manufactura y producción",
  },
  {
    value: "Minería y extracción",
    label: "Minería y extracción",
  },
  {
    value: "Salud y bienestar",
    label: "Salud y bienestar",
  },
  {
    value: "Servicios de limpieza y mantenimiento",
    label: "Servicios de limpieza y mantenimiento",
  },
  {
    value: "Servicios de consultoría y asesoría",
    label: "Servicios de consultoría y asesoría",
  },
  {
    value: "Servicios de ingeniería y arquitectura",
    label: "Servicios de ingeniería y arquitectura",
  },
  {
    value: "Servicios de publicidad y marketing",
    label: "Servicios de publicidad y marketing",
  },
  {
    value: "Tecnología de la información y telecomunicaciones",
    label: "Tecnología de la información y telecomunicaciones",
  },
  {
    value: "Turismo y hospitalidad",
    label: "Turismo y hospitalidad",
  },
];

function Request() {
  const billType = localStorage.getItem("billType");
  const navigate = useNavigate();
  const [providers, setProviders] = useState<ProviderInterface[]>([]);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [ammount, setAmmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [specialCategory, setSpecialCategory] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [emmissionDate, setEmmissionDate] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [providerId, setProviderId] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [validateWarn, setValidateWarn] = useState(false);
  const [showSpecialCategory, setShowSpecialCategory] = useState(false);

  const handleInvoiceChange = (event: any) => {
    setInvoiceNumber(event.target.value);
  };

  const handleAmmountChange = (event: any) => {
    setAmmount(event.target.value);
  };

  const handleCurrencyChange = (event: any) => {
    setCurrency(event.target.value);
  };

  const handleExchangeChange = (event: any) => {
    setExchangeRate(event.target.value);
  };

  const handleEmmissionChange = (event: any) => {
    setEmmissionDate(event.target.value);
  };

  const handleExpenseChange = (event: any) => {
    setExpenseType(event.target.value);
  };

  const handleIdChange = (event: any) => {
    console.log(event.target.value);
    setProviderId(event.target.value);
  };

  const handlePaymentChange = (event: any) => {
    setPaymentType(event.target.value);
  };

  const handleSpecialChange = (event: any) => {
    setSpecialCategory(event.target.value);
  };

  const handleExpirationChange = (event: any) => {
    setExpirationDate(event.target.value);
  };

  useEffect(() => {
    if (billType === "ESPECIAL") {
      setShowSpecialCategory(true);
    }
    axios
      .get(`${environment.api}/providers`)
      .then((response: AxiosResponse<ProviderInterface[]>) => {
        setProviders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const minEmissionDate = new Date();
  minEmissionDate.setDate(new Date().getDate() - 30);

  const handleClickNext = () => {
    console.log(parseInt(providerId));
    if (
      invoiceNumber === "" ||
      ammount === "" ||
      currency === "" ||
      emmissionDate === "" ||
      expirationDate === "" ||
      expenseType === "" ||
      providerId === "" ||
      paymentType === ""
    ) {
      setValidateWarn(true);
      return;
    }
    if (billType === "ESPECIAL" && specialCategory === "") {
      setValidateWarn(true);
    }
    const request: RequestInterface = {
      ammount: parseFloat(ammount),
      invoiceNumber: invoiceNumber,
      currency: currency,
      emmissionDate: emmissionDate,
      exchangeRate: exchangeRate === "" ? undefined : parseFloat(exchangeRate),
      expirationDate: expirationDate,
      expenseType: expenseType,
      providerId: parseInt(providerId),
      paymentType: paymentType,
      userId: parseInt(localStorage.getItem("id") || ""),
      state: "PENDIENTE DE APROBACIÓN GERENTE",
      billId: 0,
      specialCategory: specialCategory,
      billType: billType || "",
    };
    localStorage.setItem("request", JSON.stringify(request));
    navigate("/file-upload");
  };

  return (
    <Slide direction="left" in={true}>
      <Box>
        <h1>
          Solicitud de pago a{" "}
          <span style={{ color: "#1976d2" }}>Proveedores</span>
        </h1>

        {validateWarn && (
          <Alert severity="warning" onClose={() => setValidateWarn(false)}>
            Por favor completa los datos obligatorios.
          </Alert>
        )}

        {showSpecialCategory && (
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
                alignItems: "center",
                justifyContent: "center",
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
                id="specialType"
                label="Tipo de factura especial"
                helperText="Selecciona el tipo"
                defaultValue=""
                style={{minWidth: '15rem'}}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                value={specialCategory}
                onChange={handleSpecialChange}
              >
                <option value=""></option>
                {billTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Box>
          </Box>
        )}
        <Box
          display={{ xs: "block", md: "flex" }}
          sx={{
            alignItems: { xs: "none", md: "center" },
            justifyContent: { xs: "none", md: "center" },
            marginTop: { xs: 0, md: "3%" },
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
              value={invoiceNumber}
              onChange={handleInvoiceChange}
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
              value={ammount}
              onChange={handleAmmountChange}
              variant="standard"
              inputProps={{
                min: 1,
              }}
            />
          </Box>
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
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value=""></option>
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </TextField>
          </Box>
          {currency === "USD" && (
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
                type={"number"}
                id="exchangeRate"
                label="Tipo de Cambio"
                value={exchangeRate}
                onChange={handleExchangeChange}
                variant="standard"
                inputProps={{
                  min: 7,
                  max: 8,
                }}
                style={{ minWidth: "10rem" }}
              />
            </Box>
          )}

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
              helperText="Fecha de vencimiento la factura"
              type="date"
              id="expirationDate"
              value={expirationDate}
              inputProps={{
                min: today,
              }}
              onChange={handleExpirationChange}
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
              helperText="Fecha de emisión la factura"
              type="date"
              id="documentDate"
              value={emmissionDate}
              onChange={handleEmmissionChange}
              inputProps={{
                min: minEmissionDate.toISOString().split("T")[0],
                max: today,
              }}
              variant="standard"
            />
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
            <ShoppingBagIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="expenseType"
              label="Tipo de Pago"
              value={expenseType}
              onChange={handleExpenseChange}
              variant="standard"
              select
              helperText="Selecciona el tipo de gasto"
              SelectProps={{
                native: true,
              }}
            >
              <option value=""></option>
              {expenses.map((option) => (
                <option key={option.value} value={option.label}>
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
              id="providerName"
              label="Nombre del Proveedor"
              value={providerId}
              onChange={handleIdChange}
              variant="standard"
              select
              helperText="Selecciona el proveedor"
              SelectProps={{
                native: true,
              }}
            >
              <option value=""></option>
              {providers.map((option) => (
                <option key={option.name} value={option.id}>
                  {option.name}
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
              value={paymentType}
              onChange={handlePaymentChange}
              variant="standard"
              helperText="Selecciona el medio de pago"
              SelectProps={{
                native: true,
              }}
            >
              <option value=""></option>
              {paymentMethods.map((option) => (
                <option key={option.value} value={option.label}>
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
                onClick={() => navigate("/bill-type")}
                fontSize="large"
              />
            </button>
            <h3>Regresar</h3>
          </Box>
          <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
            <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
              <ArrowForwardIcon
                style={{ color: "#1976d2" }}
                onClick={() => handleClickNext()}
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

export default Request;
