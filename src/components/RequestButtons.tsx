import Box from "@mui/material/Box";

function GetAdditionalButtons() {
  const rol = localStorage.getItem("rol");
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
        >
          Pagar Factura
        </button>
      </Box>
    );
  }

  return <Box></Box>;
}

export default GetAdditionalButtons;
