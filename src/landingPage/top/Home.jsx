import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MidSec from "../../components/midSection/MidSec";
import { BackgroundImage } from "react-image-and-background-image-fade";
// import LazyLoad from "react-lazyload";

const Home = () => {
  return (
    // <BackgroundImage
    //   src="./back 1.jpg"
    //   width="100%"
    //   height="100%"
    //   lazyload
    //   renderLoader={() => (
    <div className="backimg">
      <Navbar />
      <Header />
      <MidSec />
    </div>
    //   )}
    // />
  );
};

export default Home;
