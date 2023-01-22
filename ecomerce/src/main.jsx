import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "@/context/ContextProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
