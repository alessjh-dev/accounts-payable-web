import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';

function GetAdditionalButtons() {
  const rol = localStorage.getItem("rol");
  const navigate = useNavigate();
  if (rol === "approver") {
    return (
      <Box>
        <button
          type="submit"
          style={{
            margin: "2rem 2rem 2rem 2rem",
            backgroundColor: "green",
          }}
        >
          Aprobar
        </button>
        <button
          type="submit"
          style={{
            margin: "2rem 2rem 2rem 2rem",
            backgroundColor: "red",
          }}
        >
          Declinar
        </button>
      </Box>
    );
  } else if (rol === "payer") {
    return (
      <Box>
        <button
          type="submit"
          style={{
            margin: "2rem 2rem 2rem 2rem",
            backgroundColor: "yellow",
            color: "black"
          }}
          onClick={() => navigate("/1/payment")}
        >
          Pagar Factura
        </button>
      </Box>
    );
  }

  return <Box></Box>;
}

export default GetAdditionalButtons;
