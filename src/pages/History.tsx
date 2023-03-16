import * as React from "react";
import DataTable from "./../components/HistoryInterface";
import { GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Tooltip from "@mui/material/Tooltip";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Número de Solicitud",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  { field: "supplier", headerName: "Proveedor", width: 320 },
  { field: "invoice", headerName: "Número Factura", width: 150 },
  { field: "status", headerName: "Estado", width: 200 },
  {
    field: "downInv",
    headerName: "Factura",
    width: 100,
    headerAlign: "center",
    align: "center",
    renderCell: (cellParams) => (
      <IconButton onClick={() => handleButtonClick(cellParams.row.id)}>
        <ReceiptIcon sx={{ color: "orange" }} />
      </IconButton>
    ),
  },
  {
    field: "actions",
    headerName: "Acciones",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (cellParams) => (
      <IconButton onClick={() => handleButtonClick(cellParams.row.id)}>
        <DoneAllIcon sx={{ color: "green" }} />
      </IconButton>
    ),
  },
];

const handleButtonClick = (id: string) => {
  console.log(`Mostrando detalles de la fila con ID ${id}`);
};

const rows = [
  {
    id: 1,
    supplier: "FERRETERÍA LA BENDICIÓN",
    invoice: "276765",
    status: "APROBACIÓN",
    actions: ArrowBackIcon,
  },
  {
    id: 2,
    supplier: "MUEBLERIA EL CHINO",
    invoice: "306786",
    status: "AUTORIZACIÓN GERENTE",
  },
  { id: 3, supplier: "ALMACEN EL TIGRE", invoice: "407867", status: "APROBADA" },
  { id: 4, supplier: "DULCERÍA EL PINO", invoice: "3578687", status: "PAGADA" },
  { id: 5, supplier: "SALVAVIDAS, S.A.", invoice: "7987878", status: "DECLINADA" },
  { id: 6, supplier: "ISHOP", invoice: "4876785", status: "DECLINADA" },
];

const History: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box className="History">
      <h1>
        Historial de <span style={{ color: "#1976d2" }}>Solicitudes</span> de
        Pago
      </h1>
      <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
        <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
          <ArrowBackIcon
            style={{ color: "#1976d2" }}
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </button>
        <h3>Regresar a Inicio</h3>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <DataTable rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default History;
