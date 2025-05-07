import CssBaseline from "@mui/material/CssBaseline";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import router from "./router";
import("./styles/styles");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <CssBaseline />
      <AppBar />
      <RouterProvider router={router} />
      <Footer />
    </Suspense>
  </StrictMode>
);
