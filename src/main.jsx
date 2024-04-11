import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import GaleriePage from "./pages/GaleriePage.jsx";
import ConnexionPage from "./pages/ConnexionPage.jsx";
import InscriptionPage from "./pages/InscriptionPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ReleasePage from "./pages/ReleasePage.jsx";
import DropsPage from "./pages/DropsPage.jsx";
import LikePage from "./pages/LikePage.jsx";
import UserPage from "./pages/UserPage.jsx";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/connexion",
        element: <ConnexionPage />,
      },

      {
        path: "/inscription",
        element: <InscriptionPage />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/galerie",
        element: <GaleriePage />,
      },
      {
        path: "/drops",
        element: <DropsPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/releases",
        element: <ReleasePage />,
      },
      {
        path: "/like",
        element: <LikePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
