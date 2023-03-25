import "./App.css";
import * as React from "react";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import History from "./pages/History";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import FacturaSolicitud from "./pages/Request";
import Summary from "./pages/Summary";
import Login from "./pages/Login";
import FileUpload from "./pages/FileUpload";
import RequestHistory from "./pages/RequestHistory";
import UserProfile from "./pages/UserProfile";
import ProviderHistory from "./pages/ProviderHistory";
import ProviderDetail from "./pages/ProviderDetail";
import CreateProvider from "./pages/CreateProvider";
import Payment from "./pages/Payment";
import Payed from "./pages/Payed";

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
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/history" element={<History />} />
            <Route path="/history/:id" element={<RequestHistory />} />
            <Route path="/request" element={<FacturaSolicitud />} />
            <Route path="/file-upload" element={<FileUpload />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/provider-history" element={<ProviderHistory />} />
            <Route path="/provider-detail/:id" element={<ProviderDetail />} />
            <Route path="/create-provider" element={<CreateProvider />}></Route>
            <Route path="/:id/payment" element={<Payment />}></Route>
            <Route path="/payed" element={<Payed />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
