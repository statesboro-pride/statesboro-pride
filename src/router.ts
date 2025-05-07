import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router";
import pages from "./routes/pages";
import redirects from "./routes/redirects";

const NotFound = lazy(() => import("./pages/NotFound"));

export const router = createBrowserRouter([
  ...pages.map(([path, Component]) => ({
    path,
    Component,
  })),
  ...redirects.map(([path, url]) => ({
    path,
    loader: () => redirect(url),
  })),
  { path: "*", Component: NotFound },
]);

export default router;
