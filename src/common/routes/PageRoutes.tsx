import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/pages/home/HomeContainer";
import { RouteUrls } from "../../constants/RouteUrls";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={RouteUrls.home} element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default PageRoutes;