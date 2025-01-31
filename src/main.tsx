import React from "react";
import { createRoot } from "react-dom/client";
import Config from "./config";
import PageLayout from "./layout/PageLayout";
import Page from "./pages";
import { BrowserRouter, Redirect, Routes, Route } from "./router";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {[...Config.redirects].map(([path, redirect]) => (
          <Route key={path} path={path} element={<Redirect to={redirect} />} />
        ))}

        <Route element={<PageLayout />}>
          {[...Config.navs]
            .filter(([, nav]) => nav.type === "page")
            .map(([key, nav]) => (
              <Route key={key} path={nav.path} element={<Page name={nav.label} />} />
            ))}
          <Route path="*" element={<Page name="Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
