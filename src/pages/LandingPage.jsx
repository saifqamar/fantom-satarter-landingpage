import React from "react";
import Bottom from "../landingPage/bottom/Bottom";
import Home from "../landingPage/top/Home";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="mainSec">
      <Home />
      <Bottom />
    </div>
  );
}

export default LandingPage;
