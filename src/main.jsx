import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Router>
      <AppRouter />
    </Router>
  </AuthContextProvider>
);
