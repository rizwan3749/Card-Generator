import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup"
import CardDisplay from "./components/CardDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CardDisplay" element={<CardDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
