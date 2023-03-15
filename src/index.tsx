import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryOverview } from "./pages/country-overview/country-overview";
import { CountryDetail } from "./pages/country-detail/country-detail";
import { NotFound } from "./pages/not-found/not-found";
import { getAllCountries, getCountryByCCA3 } from "./services/countries";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: CountryOverview,
    loader: () => {
      return getAllCountries();
    },
  },
  {
    path: "/details/:cca3",
    Component: CountryDetail,
    loader: ({ params }) => {
      if (params.cca3) {
        return getCountryByCCA3(params.cca3);
      }
    },
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
