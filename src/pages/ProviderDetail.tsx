import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  CardContent,
  Card,
} from "@mui/material";
import { ProviderInterface } from "../interfaces/ProviderInterface";
import Box from "@mui/material/Box";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PhoneIcon from '@mui/icons-material/Phone';
import Email from "@mui/icons-material/Email";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function ProviderDetail() {
  const navigate = useNavigate();
  let provider: ProviderInterface = {
    id: 1,
    name: "PLÁSTICOS DE GUATEMALA, S.A.",
    phone: "31145465",
    email: "pdg@gmail.com",
    nit: "102808767",
    lineOfBusiness: "PRODUCTOS VARIOS",
    addresses: [
      {
        id: 1,
        fullAddress:
          "Calle 0 1-28, Colonia la Providencia, zona 2, Guastatoya, El Progreso, Guatemala",
        city: "Guastatoya",
        state: "El Progreso",
        country: "Guatemala",
        town: "zona 2",
      },
    ],
    accounts: [
      {
        id: 1,
        accountNumber: "000-354-112",
        accountType: "MONETARIA",
        titularName: "MARIO JOSE PEREZ ROSALES",
        bank: "Banco G&T Continental, S.A.",
      },
    ],
  };

  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(provider.id);
  const [name, setName] = useState(provider.name);
  const [phone, setPhone] = useState(provider.phone);
  const [email, setEmail] = useState(provider.email);
  const [nit, setNit] = useState(provider.nit);
  const [lineOfBusiness, setLineOfBusiness] = useState(provider.lineOfBusiness);
  const [fullAddress, setFullAddress] = useState(
    provider.addresses[0].fullAddress
  );
  const [city, setCity] = useState(provider.addresses[0].city);
  const [state, setState] = useState(provider.addresses[0].state);
  const [country, setCountry] = useState(provider.addresses[0].country);
  const [town, setTown] = useState(provider.addresses[0].town);
  const [accountNumber, setAccountNumber] = useState(
    provider.accounts[0].accountNumber
  );
  const [accountType, setAccountType] = useState(
    provider.accounts[0].accountType
  );
  const [titularName, settitularName] = useState(
    provider.accounts[0].titularName
  );
  const [bank, setBank] = useState(provider.accounts[0].bank);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    provider = {
      id: id,
      name: name,
      phone: phone,
      email: email,
      nit: nit,
      lineOfBusiness: lineOfBusiness,
      addresses: [
        {
          id: provider.addresses[0].id,
          fullAddress: `${town}, ${city}, ${state}, ${country} `,
          city: city,
          state: state,
          country: country,
          town: town,
        },
      ],
      accounts: [
        {
          id: provider.accounts[0].id,
          accountNumber: accountNumber,
          accountType: accountType,
          titularName: titularName,
          bank: bank,
        },
      ],
    };
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Box>
          <h1>
            Editar <span style={{ color: "#1976d2" }}>Proveedor</span>
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
              <Email
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
              <BrandingWatermarkIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
              <LocationCityIcon
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
              <AccountBalanceWalletIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
              <AccountBalanceIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
                  onClick={() => setIsEditing(false)}
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
      ) : (
        <div>
          <Box>
            <h1>
              Información <span style={{ color: "#1976d2" }}>General</span>
            </h1>
            <Box sx={{ minWidth: { xs: "100%", md: 800 } }}>
              <Card variant="outlined">
                <CardContent>
                  <h3>Nombre: {provider.name}</h3>
                  <h3>Teléfono: {provider.phone}</h3>
                  <h3>Correo: {provider.email}</h3>
                  <h3>Nit: {provider.nit}</h3>
                  <h3>Giro de Negocio: {provider.lineOfBusiness}</h3>
                </CardContent>
              </Card>
            </Box>
            <h1>Direcciones</h1>
            <Box sx={{ minWidth: { xs: "100%", md: 800 } }}>
              <Card variant="outlined">
                <CardContent>
                  <h3>
                    Dirección Completa: {provider.addresses[0].fullAddress}
                  </h3>
                </CardContent>
              </Card>
            </Box>
            <h1>
              Cuentas y <span style={{ color: "#1976d2" }}>Pagos</span>
            </h1>
            <Box sx={{ minWidth: { xs: "100%", md: 800 } }}>
              <Card variant="outlined">
                <CardContent>
                  <h3>
                    Número de Cuenta: {provider.accounts[0].accountNumber}
                  </h3>
                  <h3>Tipo de Cuenta: {provider.accounts[0].accountType}</h3>
                  <h3>
                    Nombre del Titular: {provider.accounts[0].titularName}
                  </h3>
                  <h3>Banco: {provider.accounts[0].bank}</h3>{" "}
                </CardContent>
              </Card>
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
              <h3>Ir al Historial</h3>
            </Box>
            <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
              <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
                <EditIcon
                  style={{ color: "#1976d2" }}
                  onClick={handleEditClick}
                  fontSize="large"
                />
              </button>
              <h3>Editar</h3>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}
