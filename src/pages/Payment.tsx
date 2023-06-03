import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { environment } from "../environments/environment";
import { RequestInterface } from "../interfaces/RequestInterface";
import { ProviderInterface } from "../interfaces/ProviderInterface";
import { Accounts } from "../interfaces/Accounts.interface";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Payment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [request, setRequest] = useState<RequestInterface>();
  const [provider, setProvider] = useState<ProviderInterface>();
  const [accounts, setAccounts] = useState<Accounts[]>([]);

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

    axios
      .get(`${environment.api}/accounts`)
      .then((response: AxiosResponse<Accounts[]>) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [account, setAccount] = useState("");
  const [providerAccount, setProviderAccount] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showPayButton, setShowPayButton] = useState(false);

  const handleAccountChange = (event: any) => {
    setAccount(event.target.value);
    if (event.target.value === "2") {
      setShowErrorAlert(false);
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setShowErrorAlert(true);
    }
  };

  const handleProviderAccountChange = (event: any) => {
    setProviderAccount(event.target.value);
    setShowPayButton(true);
  };

  return (
    <Slide direction="left" in={true}>
      <Box>
        <h1>
          Pago de <span style={{ color: "#1976d2" }}>Factura</span>
        </h1>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ minWidth: { xs: "100%", md: 800 } }}>
            <Card variant="outlined">
              <CardContent>
                <Box
                  sx={{
                    display: { xs: "block", sm: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                    <List dense={true}>
                      <ListItem>
                        <ListItemIcon>
                          <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Nombre del Proveedor"
                          secondary={provider?.name}
                        />
                      </ListItem>
                    </List>
                    <List dense={true}>
                      <ListItem>
                        <ListItemIcon>
                          <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Monto de la Factura"
                          secondary={request?.ammount}
                        />
                      </ListItem>
                    </List>
                    <List dense={true}>
                      <ListItem>
                        <ListItemIcon>
                          <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Tipo de Pago"
                          secondary={request?.expenseType}
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "3rem",
              marginRight: { xs: "none", sm: "3rem" },
              maxWidth: "100%",
            }}
          >
            <AccountBalanceWalletIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              required
              id="account"
              variant="standard"
              value={account}
              onChange={handleAccountChange}
              select
              helperText="Selecciona la cuenta para pagar"
              SelectProps={{
                native: true,
              }}
            >
              {accounts.map((option) => (
                <option
                  key={option.accountNumber}
                  value={
                    option.accountNumber +
                    ", " +
                    option.accountType +
                    ", " +
                    option.bank
                  }
                >
                  {option.accountNumber +
                    ", " +
                    option.accountType +
                    ", " +
                    option.bank}
                </option>
              ))}
            </TextField>
          </Box>
        </Box>
        {showAlert && (
          <Box>
            <Alert severity="success" onClose={() => setShowAlert(false)}>
              La cuenta tiene fondos disponibles para realizar el pago.
            </Alert>
            <Box
              sx={{
                display: { sm: "block", md: "flex" },
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "3rem",
                  marginRight: { xs: "none", sm: "3rem" },
                  maxWidth: "100%",
                }}
              >
                <AccountBalanceIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  required
                  id="providerAccount"
                  variant="standard"
                  value={providerAccount}
                  onChange={handleProviderAccountChange}
                  select
                  helperText="Selecciona la cuenta del proveedor"
                  SelectProps={{
                    native: true,
                  }}
                >
                  {provider?.accounts.map((option) => (
                    <option
                      key={option.accountNumber}
                      value={
                        option.accountNumber +
                        ", " +
                        option.accountType +
                        ", " +
                        option.bank
                      }
                    >
                      {option.accountNumber +
                        ", " +
                        option.accountType +
                        ", " +
                        option.bank}
                    </option>
                  ))}
                </TextField>
              </Box>
            </Box>
            {showPayButton && (
              <Box>
                <button
                  type="submit"
                  style={{
                    margin: "2rem 2rem 2rem 2rem",
                    backgroundColor: "yellow",
                    color: "black",
                  }}
                  onClick={() => navigate("/payed")}
                >
                  PAGAR
                </button>
              </Box>
            )}
          </Box>
        )}
        {showErrorAlert && (
          <Alert severity="error" onClose={() => setShowErrorAlert(false)}>
            La cuenta no tiene fondos suficientes para realizar el pago.
          </Alert>
        )}
      </Box>
    </Slide>
  );
}
