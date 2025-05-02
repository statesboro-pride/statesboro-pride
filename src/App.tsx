import CssBaseline from "@mui/material/CssBaseline";
import { StrictMode } from "react";
import RouterProvider from "./routes";
import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

export function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <RouterProvider />
    </StrictMode>
  );
}

export default App;
