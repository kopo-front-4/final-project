import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResultPage from "./pages/result";
import RootPage from "./pages/root";
import LoadingPage from "./pages/loading";
import AfterServicePage from "./pages/after-service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/after-service",
    element: <AfterServicePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
