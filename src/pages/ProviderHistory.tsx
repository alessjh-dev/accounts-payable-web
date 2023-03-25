import * as React from "react";
import { GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Slide } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProviderDatatable from "../components/ProviderDatatable";

const ProviderHistory: React.FC = () => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Id del Proveedor",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Nombre del Proveedor",
      align: "center",
      headerAlign: "center",
      width: 320,
    },
    {
      field: "state",
      headerName: "Departamento",
      align: "center",
      headerAlign: "center",
      width: 180,
    },
    {
      field: "phone",
      headerName: "Teléfono",
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "lineOfBusiness",
      headerName: "Giro del Negocio",
      align: "center",
      headerAlign: "center",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Ver Proveedor",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (cellParams) => (
        <IconButton
          onClick={() => navigate(`/provider-detail/${cellParams.row.id}`)}
        >
          <VisibilityIcon sx={{ color: "green" }} />
        </IconButton>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: "PLÁSTICOS DE GUATEMALA, S.A.",
      state: "EL PROGRESO",
      phone: "31145465",
      lineOfBusiness: "PRODUCTOS VARIOS",
      actions: ArrowBackIcon,
    },
    {
      id: 2,
      name: "CLARO GUATEMALA",
      state: "GUATEMALA",
      phone: "45457458",
      lineOfBusiness: "TELECOMUNICACIONES",
      actions: ArrowBackIcon,
    },
  ];
  return (
    <Slide direction="left" in={true}>
      <Box className="History">
        <h1>
          Listado de <span style={{ color: "#1976d2" }}>Proveedores</span>
        </h1>
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
            <h3>Regresar a Inicio</h3>
          </Box>
          <Box sx={{ margin: "3rem 3rem 3rem 3rem" }}>
            <button style={{ margin: "2rem 2rem 2rem 2rem" }}>
              <ArrowBackIcon
                style={{ color: "#1976d2" }}
                onClick={() => navigate("/create-provider")}
                fontSize="large"
              />
            </button>
            <h3>Crear Proveedor</h3>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProviderDatatable rows={rows} columns={columns} />
        </Box>
      </Box>
    </Slide>
  );
};

export default ProviderHistory;
