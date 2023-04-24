import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Routes/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
          <Route index path="/home" element={<Home />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

