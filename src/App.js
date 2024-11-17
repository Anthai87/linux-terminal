import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Terminal from "./Terminal";
import LoginComponent from "./LoginComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route for the Login page */}
          <Route path="/" element={<LoginComponent />} />

          {/* Route for the Dashboard or next page */}
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
