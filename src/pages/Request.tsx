import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Paper } from "@mui/material";

function FacturaSolicitud() {
  const [numDocumento, setNumDocumento] = useState(0);
  const [monto, setMonto] = useState("");
  const [proveedor, setProveedor] = useState("");
  //const [mostrarOpciones, setMostrarOpciones] = useState(false);
  //const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  //const opciones = ['Gastos de consumo', 'Remuneraciones', 'Bienes y Servicios'];
  
  //moneda
  //tipo de cambio si es pago en dolares
  //medio por el cual se debe pagar al proveedor 

  const handleInputChange = (event: any) => {
    const numDocumento = parseInt(event.target.value);
    setNumDocumento(numDocumento);
  };

  const handleSolicitudSubmit = () => {
    // Aquí puedes enviar los datos del formulario y la factura adjunta a tu servidor o realizar otra acción con ellos
    console.log({ monto, proveedor });
  };

  /*const handleMostrarOpciones = () =>{
    setMostrarOpciones(!mostrarOpciones);
  }

  const handleSeleccionarOpcion = (opcion:any) => {
    setOpcionSeleccionada(opcion);
    setMostrarOpciones(false);
  }

  function handleSubmit(event:any) {
    event.preventDefault();
    // Enviar información del pago al servidor o API
  }*/

  return (
    <>
      <h1>
        Ingreso de datos para{" "}<span style={{ color: "#1976d2" }}>solicitud de pago de factura</span>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Grid container justifyContent="center"
         spacing = {2}>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper elevation={10} className="paper">
              <form onSubmit={handleSolicitudSubmit} className="form">
                <TextField
                  label="Numero de Documento"
                  variant="outlined"
                  fullWidth
                  value={numDocumento}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  label="Monto"
                  variant="outlined"
                  fullWidth
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Proveedor"
                  variant="outlined"
                  fullWidth
                  value={proveedor}
                  onChange={(e) => setProveedor(e.target.value)}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!numDocumento || !monto || !proveedor }
                  className="button"
                >
                  Enviar solicitud
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default FacturaSolicitud;
