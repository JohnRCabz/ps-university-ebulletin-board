import { Route, Routes } from "react-router-dom";
import React from 'react';

import AnnouncementPage from "../pages/AnnouncementPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminSettingsPage from "../pages/AdminSettingsPage";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<AnnouncementPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adminsettings" element={<AdminSettingsPage />} />
    </Routes>
  )
}

export default RoutesList