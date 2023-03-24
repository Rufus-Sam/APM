import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "./Screens/AdminHomePage";
import AddProject from "./Screens/AddProject";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AdminHomePage />} />
        <Route path="/AddProject" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
