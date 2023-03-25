import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useNavigate } from "react-router-dom";
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
import SummaryButtons from '../components/SummaryButtons';

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const card = (
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
                <ListItemText primary="Número de Factura" secondary="12345" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Monto" secondary="Q.10,000.00" />
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
                  secondary="Ferretería la Providencia, S.A."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Fecha de Factura"
                  secondary="02/03/2023"
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
                  secondary="Materia Prima"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Forma de Pago al proveedor"
                  secondary="Transferencia Bancaria"
                />
              </ListItem>
            </List>
          </Demo>
        </Box>
      </Grid>
    </CardContent>
  </React.Fragment>
);

function Summary() {
  return (
    <Slide direction="left" in={true}>
      <Box className="Summary">
        <h1 style={{ marginBottom: "5rem" }}>
          Resumen de la <span style={{ color: "#1976d2" }}>Solicitud</span>
        </h1>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ minWidth: { xs: "100%", md: 800 } }}>
            <Card variant="outlined">{card}</Card>
          </Box>
        </Box>
        <SummaryButtons/>
      </Box>
    </Slide>
  );
}

export default Summary;
