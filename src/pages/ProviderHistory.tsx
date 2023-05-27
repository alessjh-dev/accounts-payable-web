import * as React from "react";
import { GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Slide } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProviderDatatable from "../components/ProviderDatatable";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProviderInterface } from "../interfaces/ProviderInterface";

function ProviderHistory() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/providers")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const columns: GridColDef[] = [
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
      field: "email",
      headerName: "Correo",
      width: 150,
      headerAlign: "center",
      align: "center",
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


  const rows = getRows(data);


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
              <AddIcon
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
}

function getRows(providers: ProviderInterface[]) {
  let rowArray: any[] = [];
  providers.forEach((provider) => {
    const obj = {
      id: provider.id,
      name: provider.name,
      state: provider.addresses[0]
        ? provider.addresses[0].state
        : "DESCONOCIDO",
      phone: provider.phone,
      email: provider.email,
      lineOfBusiness: provider.lineOfBusiness,
      actions: VisibilityIcon,
    };


    rowArray.push(obj);
  });


  return rowArray;
}


export default ProviderHistory;



