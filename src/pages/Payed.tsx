import Box from "@mui/material/Box";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";
import { useNavigate } from "react-router-dom";

export default function Payed() {
  const navigate = useNavigate();
  return (
    <Box>
      <h1>
        Factura pagada con <span style={{ color: "#1976d2" }}>Éxito</span>
      </h1>
      <DoneAllIcon
        sx={{
          height: { xs: "25%", sm: "12%" },
          width: { xs: "25%", sm: "12%" },
          color: "green",
        }}
      />
      <h2>
        Ya puedes volver al <span style={{ color: "#1976d2" }}>Historial</span>
      </h2>
      <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
        <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
          <ManageSearchTwoToneIcon
            style={{ color: "#1976d2" }}
            onClick={() => navigate("/history")}
            fontSize="large"
          />
        </button>
        <h3>Ir al Historial</h3>
      </Box>
    </Box>
  );
}
