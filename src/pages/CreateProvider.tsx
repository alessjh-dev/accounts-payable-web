import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Typography,
  Button,
  TextField,
  CardContent,
  Card,
  Alert,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
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
import {
  Account,
  Address,
  ProviderInterface,
} from "../interfaces/ProviderInterface";
import { ProviderValidation } from "../interfaces/ProviderValidationInterface";
import axios from "axios";


export default function CreateProvider() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const linesOfBusiness = [
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


  const accountTypes = [
    {
      value: "Ahorros Dólares",
      label: "Ahorros Dólares",
    },
    {
      value: "Ahorros Quetzales",
      label: "Ahorros Quetzales",
    },
    {
      value: "Depósitos Monetarios Dólares",
      label: "Depósitos Monetarios Dólares",
    },
    {
      value: "Depósitos Monetarios Quetzales",
      label: "Depósitos Monetarios Quetzales",
    },
  ];


  const banks = [
    {
      value: "BANCO CRÉDITO HIPOTECARIO NACIONAL DE GUATEMALA",
      label: "BANCO CRÉDITO HIPOTECARIO NACIONAL DE GUATEMALA",
    },
    {
      value: "BANCO INMOBILIARIO, S. A.",
      label: "BANCO INMOBILIARIO, S. A.",
    },
    {
      value: "BANCO CREDICORP, S. A.",
      label: "BANCO CREDICORP, S. A.",
    },
    {
      value: "BANCO INV, S. A. ",
      label: "BANCO INV, S. A. ",
    },
    {
      value: "BANCO AZTECA DE GUATEMALA, S. A.",
      label: "BANCO AZTECA DE GUATEMALA, S. A.",
    },
    {
      value: "BANCO G&T CONTINENTAL, S. A.",
      label: "BANCO G&T CONTINENTAL, S. A.",
    },
    {
      value: "BANCO AGROMERCANTIL DE GUATEMALA, S. A.",
      label: "BANCO AGROMERCANTIL DE GUATEMALA, S. A.",
    },
    {
      value: "BANCO FICOHSA GUATEMALA, S. A.",
      label: "BANCO FICOHSA GUATEMALA, S. A.",
    },
    {
      value: "BANCO PROMERICA, S. A.",
      label: "BANCO PROMERICA, S. A.",
    },
    {
      value: "BANCO INTERNACIONAL, S. A.",
      label: "BANCO INTERNACIONAL, S. A.",
    },
    {
      value: "BANCO DE ANTIGUA, S. A.",
      label: "BANCO DE ANTIGUA, S. A.",
    },
    {
      value: "VIVIBANCO, S. A.",
      label: "VIVIBANCO, S. A.",
    },
    {
      value: "BANCO DE AMÉRICA CENTRAL, S. A.",
      label: "BANCO DE AMÉRICA CENTRAL, S. A.",
    },
    {
      value: "BANCO INDUSTRIAL, S. A.",
      label: "BANCO INDUSTRIAL, S. A.",
    },
    {
      value: "BANCO DE DESARROLLO RURAL, S. A.",
      label: "BANCO DE DESARROLLO RURAL, S. A.",
    },
    {
      value: "CITIBANK, N.A., SUCURSAL GUATEMALA",
      label: "CITIBANK, N.A., SUCURSAL GUATEMALA",
    },
    {
      value: "BANCO DE LOS TRABAJADORES",
      label: "BANCO DE LOS TRABAJADORES",
    },
  ];


  const [provider, setProvider] = useState<ProviderInterface>({
    name: "",
    phone: "",
    email: "",
    nit: "",
    lineOfBusiness: "",
    addresses: [],
    accounts: [],
  });
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showObligatoryErrorAlert, setShowObligatoryErrorAlert] =
    useState(false);
  const [formState, setFormState] = useState({
    errors: new ProviderValidation(),
  });


  const handleAddressObjectChange = (index: any, property: any, value: any) => {
    const newArrayObjects = [...provider.addresses];
    newArrayObjects[index] = {
      ...newArrayObjects[index],
      [property]: value,
    };
    setProvider({ ...provider, addresses: newArrayObjects });
  };


  const handleAccountObjectChange = (index: any, property: any, value: any) => {
    const newArrayObjects = [...provider.accounts];
    newArrayObjects[index] = {
      ...newArrayObjects[index],
      [property]: value,
    };
    setProvider({ ...provider, accounts: newArrayObjects });
  };


  const handleAddressArrayRemove = (index: any) => {
    const newArrayObjects = [...provider.addresses];
    newArrayObjects.splice(index, 1);
    setProvider({ ...provider, addresses: newArrayObjects });
  };


  const handleAccountArrayRemove = (index: any) => {
    const newArrayObjects = [...provider.accounts];
    newArrayObjects.splice(index, 1);
    setProvider({ ...provider, accounts: newArrayObjects });
  };


  const handleAddressArrayAdd = () => {
    const newArrayObject: Address = {
      complement: "",
      state: "",
      city: "",
      town: "",
    };


    setProvider({
      ...provider,
      addresses: provider.addresses.concat(newArrayObject),
    });
  };


  const handleAccountArrayAdd = () => {
    const newArrayObject: Account = {
      accountNumber: "",
      accountType: "",
      titularName: "",
      bank: "",
    };


    setProvider({
      ...provider,
      accounts: provider.accounts.concat(newArrayObject),
    });
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = provider;
    let errors: ProviderValidation = {};
    setShowErrorAlert(false);
    setShowObligatoryErrorAlert(false);
    if (!data.name || data.name === "") {
      errors.name = "El nombre es requerido";
      setShowObligatoryErrorAlert(true);
    }
    if (!data.phone || data.phone === "") {
      errors.phone = "El teléfono es requerido";
      setShowObligatoryErrorAlert(true);
    }
    if (data.phone.toString().length != 8) {
      errors.phone =
        "El teléfono no cuenta con el número de caracteres requerido";
      setShowObligatoryErrorAlert(true);
    }
    if (!data.email || data.email === "") {
      errors.email = "El correo electrónico es requerido";
      setShowObligatoryErrorAlert(true);
    }
    if (
      data.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
    ) {
      errors.email =
        "El email no cumple con la expresión regular, ejemplo: @gmail.com";
      setShowObligatoryErrorAlert(true);
    }
    if (data.addresses.length < 1) {
      errors.hasAddress = "Agregue por lo menos una dirección";
      setShowErrorAlert(true);
    }


    setFormState({ ...formState, errors });


    if (Object.keys(errors).length === 0) {
      axios
      .post(`http://localhost:3000/providers/`, provider)
      .then((response) => {
        setProvider(response.data);
        setOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
     
    }
  };


  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
    navigate("/provider-history");
  };


  return (
    <div>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¡Proveedor creado Exitosamente!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Se ha creado el proveedor, puedes consultar su información en el historial.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      <Box>
        <Box>
        <h1>
          Crear <span style={{ color: "#1976d2" }}>Proveedor</span>
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
                value={provider.name}
                error={Boolean(formState.errors.name)}
                helperText={formState.errors.name}
                onChange={(e) =>
                  setProvider({ ...provider, name: e.target.value })
                }
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
                type="number"
                id="phone"
                label="Teléfono"
                value={provider.phone}
                error={Boolean(formState.errors.phone)}
                helperText={formState.errors.phone}
                inputProps={{ maxLength: 8 }}
                onChange={(e) =>
                  setProvider({ ...provider, phone: e.target.value })
                }
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
              <Email sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                required
                type={"email"}
                id="email"
                label="Correo"
                error={Boolean(formState.errors.email)}
                helperText={formState.errors.email}
                value={provider.email}
                inputProps={{
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                  title: "Ingrese un correo electrónico válido",
                }}
                onChange={(e) =>
                  setProvider({ ...provider, email: e.target.value })
                }
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
                id="nit"
                label={"Nit"}
                value={provider.nit}
                onChange={(e) =>
                  setProvider({ ...provider, nit: e.target.value })
                }
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
                select
                fullWidth
                required
                id="lineOfBusiness"
                label="Giro del Negocio"
                value={provider.lineOfBusiness}
                onChange={(e) =>
                  setProvider({ ...provider, lineOfBusiness: e.target.value })
                }
                variant="standard"
                helperText="Selecciona una opción"
                SelectProps={{
                  renderValue: (value: string | unknown) => {
                    const opcion = linesOfBusiness.find(
                      (opcion) => opcion.value === value
                    );
                    return opcion ? opcion.label : "";
                  },
                }}
              >
                {linesOfBusiness.map((line) => (
                  <MenuItem key={line.value} value={line.value}>
                    {line.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          {provider.addresses.map((address, index) => (
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
                <HomeWorkIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  id="state"
                  label={"Departamento"}
                  value={address.state}
                  onChange={(e) =>
                    handleAddressObjectChange(index, "state", e.target.value)
                  }
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
                  id="city"
                  label="Municipio"
                  value={address.city}
                  onChange={(e) =>
                    handleAddressObjectChange(index, "city", e.target.value)
                  }
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
                  id="town"
                  label={"Zona"}
                  value={address.town}
                  onChange={(e) =>
                    handleAddressObjectChange(index, "town", e.target.value)
                  }
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
                <HomeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  id="complement"
                  label="Complemento dirección"
                  key={index}
                  value={address.complement}
                  onChange={(e) =>
                    handleAddressObjectChange(
                      index,
                      "complement",
                      e.target.value
                    )
                  }
                  variant="standard"
                />
              </Box>
              <IconButton onClick={() => handleAddressArrayRemove(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: { sm: "center" },
              justifyContent: { sm: "center" },
            }}
          >
            <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddressArrayAdd()}
              >
                Agregar Dirección
              </Button>
            </Box>
          </Box>


          {provider.accounts.map((account, index) => (
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
                  id="accountNumber"
                  label="Número de Cuenta"
                  value={account.accountNumber}
                  onChange={(e) =>
                    handleAccountObjectChange(
                      index,
                      "accountNumber",
                      e.target.value
                    )
                  }
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
                  select
                  fullWidth
                  id="accountType"
                  label="Tipo de Cuenta"
                  value={account.accountType}
                  onChange={(e) =>
                    handleAccountObjectChange(
                      index,
                      "accountType",
                      e.target.value
                    )
                  }
                  helperText="Selecciona una opción"
                  SelectProps={{
                    renderValue: (value: string | unknown) => {
                      const opcion = accountTypes.find(
                        (opcion) => opcion.value === value
                      );
                      return opcion ? opcion.label : "";
                    },
                  }}
                  variant="standard"
                >
                  {accountTypes.map((account) => (
                    <MenuItem key={account.value} value={account.value}>
                      {account.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                <AccountBoxIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="titularName"
                  label={"Nombre del Titular"}
                  value={account.titularName}
                  onChange={(e) =>
                    handleAccountObjectChange(
                      index,
                      "titularName",
                      e.target.value
                    )
                  }
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
                  select
                  fullWidth
                  id="bank"
                  label={"Banco"}
                  value={account.bank}
                  onChange={(e) =>
                    handleAccountObjectChange(index, "bank", e.target.value)
                  }
                  helperText="Selecciona una opción"
                  SelectProps={{
                    renderValue: (value: string | unknown) => {
                      const opcion = banks.find(
                        (opcion) => opcion.value === value
                      );
                      return opcion ? opcion.label : "";
                    },
                  }}
                  variant="standard"
                >
                  {banks.map((bank) => (
                    <MenuItem key={bank.value} value={bank.value}>
                      {bank.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  alignItems: { sm: "center" },
                  justifyContent: { sm: "center" },
                }}
              >
                <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
                  <IconButton onClick={() => handleAccountArrayRemove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: { sm: "center" },
              justifyContent: { sm: "center" },
            }}
          >
            <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAccountArrayAdd()}
                style={{ marginBottom: "3rem" }}
              >
                Agregar Cuenta Bancaria
              </Button>
            </Box>
          </Box>
          {showObligatoryErrorAlert && (
            <Alert
              severity="warning"
              onClose={() => setShowObligatoryErrorAlert(false)}
            >
              Por favor llena los campos obligatorios
            </Alert>
          )}
          {showErrorAlert && (
            <Alert severity="warning" onClose={() => setShowErrorAlert(false)}>
              {formState.errors.hasAddress}
            </Alert>
          )}
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
                  onClick={handleSubmit}
                  fontSize="large"
                />
              </button>
              <h3>Guardar</h3>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}





