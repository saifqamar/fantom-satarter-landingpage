import React, { Suspense } from "react";
import "./midesec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import img from "./Subtract.svg";

const MidSec = () => {
  return (
    <LazyLoad>
      <div className="midSec">
        <div
          className="midContents"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="card-container">
            <div className="card1">
              <div className="cardContents">
                <div className="cardleft">
                  <h4>FS Project Post IDO Review: $MGCT > Dec 2021</h4>
                  <h2>MagicCraft</h2>
                  <p>
                    War and conquer MMO Play-To-Earn RPG, launched on Binance
                    Smart Chain, with advanced guild, taxes and economy systems.
                    You team up with other players and build clans to fight with
                    other clans on the platform.
                  </p>
                  <div class="Bton">
                    <a href="#" class="btn1">
                      <button>How to invest</button>
                      <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        className="arrowicons"
                      />
                    </a>
                  </div>
                </div>
                <div className="cardright">
                  <h3>1189%</h3>
                  <p>Post ido ath</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default MidSec;
