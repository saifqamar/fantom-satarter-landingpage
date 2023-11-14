import React from "react";
import "./SupportPartners.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SupportPartners = () => {
  return (
    <LazyLoad className="SuppPartContainer">
      <div className="SupportPartners">
        <LazyLoadImage
          // alt="demonstration1"
          className="topImag"
          src={"images/Mask group.jpg"}
        />
        {/* <img
          src="images/Mask group.jpg"
          alt=""
          loading="lazy"
          className="topImag"
        /> */}
        <div className="suppContent">
          <div>
            <div className="top">
              <div className="topLeft">
                <span>
                  <img src="images/1i.svg" />{" "}
                </span>
                <span>
                  <img src="images/2i.svg" />{" "}
                </span>
                <span>
                  <img id="wideImg" src="images/spark.svg" />{" "}
                </span>
                {/* <span><img src="images/4i.svg"/> </span> */}
                <span>
                  <img src="images/5i.svg" />{" "}
                </span>
                <span>
                  <img src="images/ankr.svg" />{" "}
                </span>
                <span>
                  <img src="images/sigmnum.svg" />{" "}
                </span>
              </div>
              <div className="topRight">
                <h1>Supporting Partners</h1>
                <p>
                  We carefully selected our partners from leading visionary
                  companies in blochchain and web3 technology.
                </p>
              </div>
            </div>
            <div className="center">
              <li>
                <img src="images/Ethereum_logo-white 80_.svg" alt="" />
              </li>
              <li>
                <img src="images/Polygon_logo-white 80_.svg" alt="" />
              </li>
              <li>
                <img src="images/BSC_logo-white 80_.svg" alt="" />
              </li>
              <li>
                <img src="images/Fantom_logo-white 80_.svg" alt="" />
              </li>
            </div>
            {/* <div className="bottom">
              <div className="btmLeft">
                <h2>Stay up to date</h2>
                <p>
                  Subscribe to the latest Web3 investment trends right in your
                  email every month.
                </p>
                <span>
                  <div class="subscribe">
                    <input type="text" placeholder="Email Address" id="input" />
                    <a href="#" className="arrowicon">
                      <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        className="arrowiconin"
                      />
                    </a>
                  </div>
                </span>
              </div>
              <div className="btmRight">
                <div>
                  <span className="smallBox"></span>
                  <h1>Heather</h1>
                  <p>Customer Success Manager</p>
                  <h3>Contact</h3>
                </div>
                <div>
                  <span className="smallBox"></span>
                  <h1>Heather</h1>
                  <p>Customer Success Manager</p>
                  <h3>Contact</h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default SupportPartners;
