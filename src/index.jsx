import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themeConfig";
import ProyectsDetail from "./Routes/ProyectsDetail";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/home" element={<Home />} />
          <Route index path="/proyects/:id" element={<ProyectsDetail />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
