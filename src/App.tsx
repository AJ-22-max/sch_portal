import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./store";
import UserProvider from "./context/user/UserProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./themes";
import PublicRoutes from "./routes/publicRoutes";
import AuthRoutes from "./routes/authRoutes";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <UserProvider>
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
          <ToastContainer hideProgressBar position="top-right" />
        </UserProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;