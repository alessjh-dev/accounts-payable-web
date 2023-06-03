import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MoneyIcon from "@mui/icons-material/Money";
import StoreIcon from "@mui/icons-material/Store";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaymentIcon from "@mui/icons-material/Payment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProviderInterface } from "../interfaces/ProviderInterface";
import axios, { AxiosResponse } from "axios";
import { environment } from "../environments/environment";
import { RequestInterface } from "../interfaces/RequestInterface";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";

function RequestHistory() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openDeclined, setOpenDeclined] = React.useState(false);
  const [request, setRequest] = useState<RequestInterface>();
  const [provider, setProvider] = useState<ProviderInterface>();
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showDownloadError, setShowDownloadError] = useState(false);
  const { id } = useParams();
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const rol = localStorage.getItem("rol");

  useEffect(() => {
    axios
      .get(`${environment.api}/request/${id}`)
      .then((response) => {
        setRequest(response.data);
        axios
          .get(`${environment.api}/providers/${response.data.providerId}`)
          .then((response: AxiosResponse<ProviderInterface>) => {
            setProvider(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApprove = () => {
    axios
      .put(`${environment.api}/request/${id}`, { state: "PENDIENTE DE PAGO" })
      .then((response) => {
        setRequest(response.data);
        setOpen(false);
        setTimeout(() => {
          navigate("/history");
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDecline = () => {
    axios
      .put(`${environment.api}/request/${id}`, { state: "DECLINADA" })
      .then((response) => {
        setRequest(response.data);
        setOpenDeclined(false);
        setTimeout(() => {
          navigate("/history");
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDownloadBill = async (billId: any) => {
    setShowErrorAlert(false);
    await axios
      .get(`${environment.api}/bills/${billId}`, { responseType: "blob" })
      .then((response) => {
        const contentType = response.headers["content-type"];
        const extension = contentType.split("/").pop();
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `factura.${extension}`);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(() => {
        setShowErrorAlert(true);
      });
  };

  const handleDownloadRequest = async (reqId: any) => {
    setShowDownloadError(false);
    await axios
      .get(`${environment.reportsApi}/reports/request/${reqId}`, {
        responseType: "blob",
      })
      .then((response) => {
        const contentType = response.headers["content-type"];
        const extension = contentType.split("/").pop();
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Solicitud-${reqId}.${extension}`);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(() => {
        setShowDownloadError(true);
      });
  };

  return (
    <Slide direction="left" in={true}>
      <Box className="Summary">
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Aprobar Solicitud"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Al hacer click en aceptar se aprobará la solicitud, ¿Estás
              seguro?.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} autoFocus>
              Cancelar
            </Button>
            <Button onClick={handleApprove} autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openDeclined}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Declinar Solicitud"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Al hacer click en aceptar se declinará la solicitud, ¿Estás
              seguro?.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDeclined(false)} autoFocus>
              Cancelar
            </Button>
            <Button onClick={handleDecline} autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
        <h1>
          Detalle de la <span style={{ color: "#1976d2" }}>Solicitud</span> NO.{" "}
          <span style={{ color: "#1976d2" }}>{id}</span>
        </h1>
        <br />
        {showErrorAlert && (
          <Alert severity="error" onClose={() => setShowErrorAlert(false)}>
            No se pudo descargar la factura
          </Alert>
        )}

        {showDownloadError && (
          <Alert severity="error" onClose={() => setShowDownloadError(false)}>
            No se pudo descargar la solicitud
          </Alert>
        )}
        <br />
        <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
          <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
            <ArrowBackIcon
              style={{ color: "#1976d2" }}
              onClick={() => navigate("/history")}
              fontSize="large"
            />
          </button>
          <h3>Regresar al Historial</h3>
        </Box>
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
                              secondary={request?.invoiceNumber}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <MoneyIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Monto"
                              secondary={request?.ammount}
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
                              secondary={provider?.name}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <DateRangeIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Fecha de Emisión Factura"
                              secondary={request?.emmissionDate}
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
                          <ListItem></ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <AddShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Tipo de Pago"
                              secondary={request?.expenseType}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Forma de Pago al proveedor"
                              secondary={request?.paymentType}
                            />
                          </ListItem>
                        </List>
                      </Demo>
                    </Box>
                  </Grid>
                  {rol === "expert" ? (
                    <Box>
                      <h4>
                        Estado de la Solicitud:{" "}
                        <span style={{ color: "#1976d2" }}>
                          {request?.state}
                        </span>
                      </h4>
                    </Box>
                  ) : (
                    <Box></Box>
                  )}
                </CardContent>
              </React.Fragment>
            </Card>
          </Box>
        </Box>
        <Box>
          <Box>
            <button
              type="submit"
              onClick={() => handleDownloadRequest(request?.id)}
              style={{
                margin: "2rem 2rem 2rem 2rem",
                backgroundColor: "#1976d2",
              }}
            >
              Descargar Solicitud
            </button>
            <button
              type="submit"
              style={{
                margin: "2rem 2rem 2rem 2rem",
                backgroundColor: "#1976d2",
              }}
              onClick={() => handleDownloadBill(request?.billId)}
            >
              Descargar Factura
            </button>

            {rol === "approver" && (
              <Box>
                <button
                  type="submit"
                  onClick={() => setOpen(true)}
                  style={{
                    margin: "2rem 2rem 2rem 2rem",
                    backgroundColor: "green",
                  }}
                >
                  Aprobar
                </button>
                <button
                  type="submit"
                  onClick={() => setOpenDeclined(true)}
                  style={{
                    margin: "2rem 2rem 2rem 2rem",
                    backgroundColor: "red",
                  }}
                >
                  Declinar
                </button>
              </Box>
            )}

            {rol === "payer" && (
              <Box>
                <button
                  type="submit"
                  style={{
                    margin: "2rem 2rem 2rem 2rem",
                    backgroundColor: "yellow",
                    color: "black",
                  }}
                  onClick={() => navigate(`/${request?.id}/payment`)}
                >
                  Pagar Factura
                </button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}

export default RequestHistory;
