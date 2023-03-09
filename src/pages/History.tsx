import "./../App.css";
import * as React from "react";
import reactLogo from './../assets/react.svg';
import Box from "@mui/material/Box";

function History() {

  let count = 0;
  const userName = 'Alessandro';

  function setCount(arg0: (count: any) => any): void {
    count = count;
  }

  return (
    <div className="History">
      <h1>Hola {userName}, ¿Qué quieres hacer hoy?</h1>
      <Box className="card"  sx={{ display: { xs: 'block', sm: 'block'}}}>
        <button style={{marginRight: '2rem', marginLeft: '2rem', marginTop: '2rem', marginBottom: '2rem'}} onClick={() => setCount((count) => count + 1)}>
          Ingresar una nueva Solicitud
        </button>
        <button style={{marginRight: '2rem', marginLeft: '2rem', marginTop: '2rem', marginBottom: '2rem'}} onClick={() => setCount((count) => count + 1)}>
          Historial de Solicitudes
        </button>
      </Box>
    </div>
  );
}

export default History;
