import React, { Suspense } from "react";
import "./tier.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Tiers = () => {
  return (
    <div className="tier">
      <LazyLoad>
        {/* <img src="images/back2.png" alt="" className="back2img" /> */}
        <div className="res">
          <div className="Tcontents">
            <div className="tleft">
              <h1>Join the FSmart Club</h1>
              <p>
                Get the app that gets access to the hottest deals with our
                investment subscription.
              </p>
              <h5>START INVESTING FROM $5</h5>
              <div class="tBton ">
                <a href="#" class="tbtn1 shopTiers">
                  <button>Pay with Apple Pay</button>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="arrowicons"
                  />
                </a>
                <div className="compage">
                  <p>Compare all subscriptions</p>
                  <img src="images/Icon (1).png" alt="" />
                </div>
                <a href="#" class="tbtn1 htinvest" id="hideBtn">
                  <button>How to invest</button>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="arrowicons"
                  />
                </a>
              </div>
            </div>
            <div className="tright">
              <LazyLoadImage
                // alt="demonstration1"
                id="Timg"
                src={"images/Group 92 (1) 1.png"}
              />
              <LazyLoadImage
                // alt="demonstration1"
                id="Timg2"
                src={"images/cardG.png"}
              />
              {/* <img src="images/Group 92 (1) 1.png" alt="" id="Timg" />
              <img src="images/cardG.png" alt="" id="Timg2" /> */}
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>

    //   </div>
    // </div>
  );
};

export default Tiers;
