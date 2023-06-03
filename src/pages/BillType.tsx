import { Alert, Box, Slide, TextField } from "@mui/material";
import { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const billTypes = [
  {
    label: "REGULAR",
    value: "REGULAR",
  },
  {
    label: "ESPECIAL",
    value: "ESPECIAL",
  },
];

export default function BillType() {
    const navigate = useNavigate(); 
  const [billType, setBillType] = useState("");
  const [validateWarn, setValidateWarn] = useState(false);

  const handleTypeChange = (event: any) => {
    setBillType(event.target.value);
    
  };

  const handleClickNext = () => {
    if ( billType === "" ) {
      setValidateWarn(true);
      return;
    }

    localStorage.setItem("billType", billType);
    navigate("/request");
  };

  return (
    <Slide direction="left" in={true}>
      <Box>
        <h1>
          ¿Que tipo de <span style={{ color: "#1976d2" }}>factura</span> vas a
          ingresar?
        </h1>
        {validateWarn && (
          <Alert severity="warning" onClose={() => setValidateWarn(false)}>
            Por favor completa los datos obligatorios.
          </Alert>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3rem",
            marginRight: { xs: "none", md: "3rem" },
            height: "20rem",
          }}
        >
          <AccountBalanceWalletIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField
            fullWidth
            required
            select
            id="billType"
            label="Tipo de Factura"
            helperText="Selecciona el tipo"
            defaultValue=""
            SelectProps={{
              native: true,
            }}
            style={{ maxWidth: "20rem" }}
            variant="standard"
            value={billType}
            onChange={handleTypeChange}
          >
            <option value=""></option>
            {billTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
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
