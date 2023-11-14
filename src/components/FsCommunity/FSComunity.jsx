import React from "react";
import "./FSComunity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import imggg from "./Group 98.jpg";

const FSComunity = () => {
  return (
    <LazyLoad>
      <div className="Comunitycontainer">
        <div className="FSComunity">
          <h1 className="crd-heading">Earn with FS</h1>
          <p className="crd-p">
            FSmart Club subscribers get exclusive deals while the Liquid
            subscription feature is enabling them multiple earning opportunities
            in USDC or other tokens.
          </p>
          <div className="Comunitycards">
            <div className="Comunitycard">
              <div className="img">{/* <img src={image} alt="" /> */}</div>
              <div className="ComunitycardBottom">
                <h1>Earn USDC</h1>
                <p>Deposit sFS tokens</p>
                <p>Get USDC rewards</p>
                <div class="fBton">
                  <a href="https://app.fs.exchange/earn" class="fbtn1">
                    <button>Earn USDC</button>
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="arrowicons"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="Comunitycard">
              <div className="img">{/* <img src={image} alt="" /> */}</div>
              <div className="ComunitycardBottom">
                <h1>Mint FS Keys</h1>
                <p>Use FS tokens</p>
                <p>Mint FS Key NFTs</p>
                <div class="fBton">
                  <a href="https://app.fs.exchange/store" class="fbtn1">
                    <button>Get FS Key</button>
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="arrowicons"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="Comunitycard">
              <div className="img">{/* <img src={image} alt="" /> */}</div>
              <div className="ComunitycardBottom">
                <h1>Earn MCRT</h1>
                <p>Deposit sFS tokens</p>
                <p>Earn interest paid in MCRT</p>
                <div class="fBton">
                  <a href="https://app.fs.exchange/earn" class="fbtn1">
                    <button>Earn MCRT</button>
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="arrowicons"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="Comunitycard">
              <div className="img">{/* <img src={image} alt="" /> */}</div>
              <div className="ComunitycardBottom">
                <h1>Earn FS</h1>
                <p>Deposit sFS tokens</p>
                <p>Earn boosted interest in FS</p>
                <div class="fBton">
                  <a href="https://app.fs.exchange/earn" class="fbtn1">
                    <button>Earn FS</button>
                    <FontAwesomeIcon
                      icon={faCircleChevronRight}
                      className="arrowicons"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default FSComunity;
