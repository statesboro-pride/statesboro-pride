import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
  <Suspense>
    <App />
  </Suspense>
);
