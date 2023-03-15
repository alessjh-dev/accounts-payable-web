import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Paper } from '@mui/material';

function FacturaSolicitud() {
  const [factura, setFactura] = useState(null);
  const [monto, setMonto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [proveedor, setProveedor] = useState('');

  const handleFacturaInputChange = (event:any) => {
    setFactura(event.target.files[0]);
  };

  const handleSolicitudSubmit = () => {
    // Aquí puedes enviar los datos del formulario y la factura adjunta a tu servidor o realizar otra acción con ellos
    console.log({ factura, monto, descripcion });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={10} className="paper">
          <Typography variant="h5" gutterBottom>
            Solicitud de pago de factura
          </Typography>
          <form onSubmit={handleSolicitudSubmit} className="form">
            <TextField
              label="Monto"
              variant="outlined"
              fullWidth
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              margin="normal"
            />
            <TextField
            label="Proveedor"
            variant="outlined"
            fullWidth
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
            />
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFacturaInputChange}
              className="input"
              id="facturaInput"
            />
            <label htmlFor="facturaInput">
              <Button
                variant="contained"
                component="span"
                className="button"
              >
                Adjuntar factura
              </Button>
            </label>
            {factura && <p>Factura seleccionada: {factura["name"]}</p>}
            <Button 
              variant="contained"
              color="primary"
              type="submit"
              disabled={!factura || !monto || !descripcion || !proveedor}
              className="button"
            >
              Enviar solicitud
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default FacturaSolicitud;
