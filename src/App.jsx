import React from "react";
import "./App.css";
import TermsnConditioins from "./components/TermsnConditions/TermsnConditions";
import LandingPage from "./pages/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Privacy from "./components/Privacy/Privacy";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/terms" element={<TermsnConditioins />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
  );
}

export default App;