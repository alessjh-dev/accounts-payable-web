import * as React from "react";
import DataTable from "../components/HistoryDatatable";
import { GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Alert, IconButton } from "@mui/material";
import { Slide } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { environment } from "../environments/environment";
import { RequestInterface } from "../interfaces/RequestInterface";
import { ProviderInterface } from "../interfaces/ProviderInterface";
import { RequestHistory } from "../interfaces/HistoryInterface";
import ReceiptIcon from "@mui/icons-material/Receipt";

const History: React.FC = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<RequestInterface[]>([]);
  const [providers, setProviders] = useState<ProviderInterface[]>([]);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const rol = localStorage.getItem("rol");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    let url;
    if (rol === "approver") {
      url = `${environment.api}/request/state/PENDIENTE DE APROBACIÓN`;
    } else if (rol === "payer") {
      url = `${environment.api}/request/state/PENDIENTE DE PAGO`;
    } else {
      url = `${environment.api}/request/user-id/${userId}`;
    }
    axios
      .get(`${environment.api}/providers`)
      .then((response) => {
        setProviders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(url)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDownloadBill = async (reqId: any) => {
    setShowErrorAlert(false);
    let billId;
    await axios
      .get(`${environment.api}/request/${reqId}`)
      .then((response: AxiosResponse<RequestInterface>) => {
        billId = response.data.billId;
      })
      .catch(() => {
        setShowErrorAlert(true);
      });

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
    { field: "status", headerName: "Estado", width: 220 },
    {
      field: "downInv",
      headerName: "Factura",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (cellParams) => (
        <IconButton onClick={() => handleDownloadBill(cellParams.id)}>
          <ReceiptIcon sx={{ color: "orange" }} />
        </IconButton>
      ),
    },
    {
      field: "actions",
      headerName: "Ver Solicitud",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (cellParams) => (
        <IconButton onClick={() => navigate(`/history/${cellParams.row.id}`)}>
          <VisibilityIcon sx={{ color: "green" }} />
        </IconButton>
      ),
    },
  ];

  const rows = getRows(requests, providers);

  return (
    <Slide direction="left" in={true}>
      <Box className="History">
        <h1>
          Historial de <span style={{ color: "#1976d2" }}>Solicitudes</span> de
          Pago
        </h1>
        <br />
        {showErrorAlert && (
          <Alert severity="error" onClose={() => setShowErrorAlert(false)}>
            No se pudo descargar la factura
          </Alert>
        )}
        <br />
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DataTable rows={rows} columns={columns} />
        </Box>
      </Box>
    </Slide>
  );
};
function getRows(requests: RequestInterface[], providers: ProviderInterface[]) {
  let rowArray: RequestHistory[] = [];
  requests.forEach((req) => {
    const obj = {
      id: req.id || 0,
      supplier: providers.find((p) => (p.id = req.providerId))?.name || "",
      invoice: req.invoiceNumber,
      status: req.state,
    };

    rowArray.push(obj);
  });

  return rowArray;
}

export default History;
