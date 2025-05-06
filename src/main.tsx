import CssBaseline from "@mui/material/CssBaseline";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import RouterProvider from "./routes";
import "./styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <CssBaseline />
      <RouterProvider />
      <Footer />
    </Suspense>
  </StrictMode>
);
