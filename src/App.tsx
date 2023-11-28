import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import MainLayout from "./layouts/mainLayout";
import MenuPage from "./pages/menuPage";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="menu" element={<MenuPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
