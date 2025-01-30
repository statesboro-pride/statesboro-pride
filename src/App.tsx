import React from "react";
import Config from "./config";
import PageLayout from "./layout/PageLayout";
import Page from "./pages";
import { BrowserRouter, Redirect, Routes, Route, Outlet } from "./router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {[...Config.redirects].map(([path, redirect]) => (
          <Route key={path} path={path} element={<Redirect to={redirect} />} />
        ))}

        <Route element={<AppLayout />}>
          {[...Config.navs]
            .filter(([, nav]) => nav.type === "page")
            .map(([key, nav]) => (
              <Route key={key} path={nav.path} element={<Page name={nav.label} />} />
            ))}
          <Route path="*" element={<Page name="Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function AppLayout() {
  return (
    <PageLayout>
      <React.Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </React.Suspense>
    </PageLayout>
  );
}
