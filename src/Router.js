import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pages/Login" element={<Login />} />
      <Route path="pages/Login2" element={<Login2 />} />
      <Route path="pages/Join" element={<Join />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
