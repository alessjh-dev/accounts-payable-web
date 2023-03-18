import "./App.css";
import * as React from "react";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import History from "./pages/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FacturaSolicitud from "./pages/Request";
import Summary from './pages/Summary';

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/history" element={<History />} />
            <Route path="/request" element={<FacturaSolicitud />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
