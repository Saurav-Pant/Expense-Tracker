import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ThemeContext } from "./context/theme";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Create from "./components/Create";
import EditExpense from "./components/editExpense"; // Update the import statement

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/authentication" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route exact path="/editExpense/:id" element={<EditExpense />} /> //
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
