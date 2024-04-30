import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResultPage from "./pages/result";
import RootPage from "./pages/root";
import LoadingPage from "./pages/loading";
// import AfterServicePage from "./pages/after-service";
import CustomOutlet from "./components/custom-outlet";
import AfterServicePage from "./pages/after-service2";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomOutlet />,
    children: [
      {
        path: "",
        element: <RootPage />,
      },
      {
        path: "/loading",
        element: <LoadingPage />,
      },
      {
        path: "/after-service",
        element: <AfterServicePage />,
      },
    ],
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
