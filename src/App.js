import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import { ThemeProvider } from "./context/theme";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
