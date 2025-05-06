import CssBaseline from "@mui/material/CssBaseline";
import { lazy, StrictMode } from "react";
import RouterProvider from "./routes";
import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

const Footer = lazy(() => import("./components/Footer"));

export function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <RouterProvider />
      <Footer />
    </StrictMode>
  );
}

export default App;
