import React from "react";
import EasyAccessProjects from "../../components/easyAccess/EasyAccessProjects";
import Footer from "../../components/footer/Footer";
import FSComunity from "../../components/FsCommunity/FSComunity";
import Tiers from "../../components/tiers/Tiers";
import FontomStarter from "../../components/fontomStarter/FontomStarter";
import SupportPartners from "../../components/SupportPartners/SupportPartners";
import '../top/home.css'

const Bottom = () => {
  return (
    <div className="mainSec">
      <EasyAccessProjects />
      <Tiers />
      <FSComunity />
      <FontomStarter />
      <SupportPartners />
      <Footer />
    </div>
  );
};

export default Bottom;
