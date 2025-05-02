import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
  <Suspense>
    <App />
  </Suspense>
);
