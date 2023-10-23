import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/pages/home/HomeContainer";
import { RouteUrls } from "../../constants/RouteUrls";
import Notes from "../../components/pages/notes/NotesContainer";
import Categories from "../../components/pages/categories/CategoriesContainer";
import UserSettings from "../../components/pages/userSettings/UserSettingsContainer";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={RouteUrls.home} element={<Home />} />
      <Route path={RouteUrls.notes} element={<Notes />} />
      <Route path={RouteUrls.categories} element={<Categories />} />
      <Route path={RouteUrls.settings} element={<UserSettings />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default PageRoutes;