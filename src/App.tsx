import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./themes";
import PublicRoutes from "./routes/publicRoutes";
import AuthRoutes from "./routes/authRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>

          {/* Auth Routes - Must come BEFORE the catch-all route */}
          <Route path="/auth/*" element={<AuthRoutes />} />

          {/* Public Routes */}
          <Route path="/*" element={<PublicRoutes />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;