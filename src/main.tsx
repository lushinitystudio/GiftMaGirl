import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "ARHFyDSRumCxg2r_RcqBcQXIeqfEYXWdQ0nEmOPh8BVsk9J6Tie22Bnb8fJeYhOFbf9iZTdIjJ2joiQ9",
  currency: "USD",
};

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <PayPalScriptProvider options={initialOptions}>
        <App />
      </PayPalScriptProvider>
    </React.StrictMode>
  );
}