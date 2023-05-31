import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MoneyIcon from "@mui/icons-material/Money";
import StoreIcon from "@mui/icons-material/Store";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaymentIcon from "@mui/icons-material/Payment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DownloadIcon from "@mui/icons-material/Download";
import { ProviderInterface } from "../interfaces/ProviderInterface";
import { RequestInterface } from "../interfaces/RequestInterface";
import axios from "axios";
import { Alert } from "@mui/material";
import { environment } from "../environments/environment";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Summary() {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [provider, setProvider] = useState<ProviderInterface>({
    name: "",
    phone: "",
    email: "",
    nit: "",
    lineOfBusiness: "",
    addresses: [],
    accounts: [],
  });

  const [request, setRequest] = useState<RequestInterface>({
    ammount: 0,
    invoiceNumber: "",
    emmissionDate: "",
    expirationDate: "",
    currency: "",
    expenseType: "",
    providerId: 0,
    paymentType: "",
    userId: 0,
    state: "",
  });

  useEffect(() => {
    const theRequest: RequestInterface = JSON.parse(
      localStorage.getItem("request") || "{}"
    );
    if (theRequest) {
      setRequest(theRequest);
    } else {
      navigate("/request");
    }
  }, []);

  const handleClickSave = () => {
    setShowSuccessAlert(false);
    setShowError(false);
    axios
      .post(`${environment.api}/request`, request)
      .then(() => {
        setShowSuccessAlert(true);
        setIsSaved(true);
      })
      .catch(() => {
        setShowError(true);
      });
  };

  return (
    <Slide direction="left" in={true}>
      <Box className="Summary">
        <h1 style={{ marginBottom: "5rem" }}>
          Resumen de la <span style={{ color: "#1976d2" }}>Solicitud</span>
        </h1>
        {showSuccessAlert && (
          <Alert severity="success" onClose={() => setShowSuccessAlert(false)}>
            Solicitud guardada exitosamente
          </Alert>
      
        )}
        {showError && (
          <Alert severity="error" onClose={() => setShowError(false)}>
            Tuvimos inconvenientes al guardar tu solicitud, por favor intenta de
            nuevo
          </Alert>
        )}
        <br />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ minWidth: { xs: "100%", md: 800 } }}>
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                      <Demo
                        sx={{
                          marginLeft: { xs: "3rem", sm: "0" },
                          marginRight: { xs: "0", sm: "5rem" },
                        }}
                      >
                        <List dense={true}>
                          <ListItem>
                            <ListItemIcon>
                              <ReceiptIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Número de Factura"
                              secondary={request.invoiceNumber}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <MoneyIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Monto"
                              secondary={request.ammount}
                            />
                          </ListItem>
                        </List>
                      </Demo>
                      <Demo
                        sx={{
                          marginLeft: { xs: "3rem", sm: "0" },
                          marginRight: { xs: "0", sm: "5rem" },
                        }}
                      >
                        <List dense={true}>
                          <ListItem>
                            <ListItemIcon>
                              <StoreIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Proveedor"
                              secondary={request.providerId}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <DateRangeIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Fecha de Emisión Factura"
                              secondary={request.emmissionDate}
                            />
                          </ListItem>
                        </List>
                      </Demo>
                      <Demo
                        sx={{
                          marginLeft: { xs: "3rem", sm: "0" },
                          marginRight: { xs: "0", sm: "5rem" },
                        }}
                      >
                        <List dense={true}>
                          <ListItem>
                            <ListItemIcon>
                              <AddShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Tipo de Pago"
                              secondary={request.expenseType}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Forma de Pago al proveedor"
                              secondary={request.paymentType}
                            />
                          </ListItem>
                        </List>
                      </Demo>
                    </Box>
                  </Grid>
                </CardContent>
              </React.Fragment>
            </Card>
          </Box>
        </Box>
        {isSaved ? (
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: { sm: "center" },
              justifyContent: { sm: "center" },
            }}
          >
            <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
              <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
                <DownloadIcon
                  style={{ color: "#1976d2" }}
                  onClick={() => console.log("descargando...")}
                  fontSize="large"
                />
              </button>
              <h3>Descargar Solicitud de Pago</h3>
            </Box>
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
          </Box>
        ) : (
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
                  onClick={() => navigate("/request")}
                  fontSize="large"
                />
              </button>
              <h3>Editar la Solicitud</h3>
            </Box>
            <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
              <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
                <SaveAltIcon
                  style={{ color: "#1976d2" }}
                  onClick={handleClickSave}
                  fontSize="large"
                />
              </button>
              <h3>Guardar la solicitud</h3>
            </Box>
          </Box>
        )}
      </Box>
    </Slide>
  );
}

export default Summary;
