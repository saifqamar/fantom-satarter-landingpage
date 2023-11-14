import React from "react";
import "./header.css";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  return (
    <LazyLoad>
      <div class="header">
        <div class="upper">
          <div class="head-left">
            <h4>Sell crypto to fiat or Buy crypto with fiat</h4>
            <h1>Own your financial freedom</h1>
            <p>
              Self-custodial trading and swapping at the best rates. Crosschain
              and multichain.<br></br>
              <br></br>
              FS decentralizes investing in startups equity, tokenized shares or
              NFTs.
              <br></br>
            </p>
            <div className="bottom">
              <LazyLoadImage
                src={"images/Ethereum_logo-white 80_.svg"}
                loading="lazy"
                className="img"
                alt=""
              />
              <LazyLoadImage
                src={"images/Polygon_logo-white 80_.svg"}
                loading="lazy"
                className="img"
                alt=""
              />
              <LazyLoadImage
                src={"images/BSC_logo-white 80_.svg"}
                loading="lazy"
                className="img"
                alt=""
              />
              <LazyLoadImage
                src={"images/Fantom_logo-white 80_.svg"}
                loading="lazy"
                className="img"
                alt=""
              />
            </div>
          </div>
          <div class="head-right">
            <iframe
              src="https://widget.onramper.com?color=924CEE&apiKey=pk_prod_fTeblOWrTrfUL0SmajuHmQTTg5ne0qqGwa9K9JlBcR00&defaultCrypto=ETH&defaultFiatSoft=USD&defaultAmount=50&recommendedCryptoCurrencies=ETH,BTC,MATIC,FTM,USDC,USDT&supportSwap=false"
              height="595px"
              width="100%"
              title="Onramper widget"
              frameBorder="0"
              allow="accelerometer;
                autoplay; camera; gyroscope; payment"
              style={{
                boxShadow: "1px 1px 1px 1px black",
                borderRadius: "20px",
              }}
            >
              <a href="https://widget.onramper.com" target="_blank">
                Buy crypto
              </a>
            </iframe>
          </div>
        </div>
        <div className="headerBottom">
          <div class="lower">
            <div className="lowerChild">
              <div className="circle">
                <p>
                  <img src={"images/ways.svg"} alt="" />
                </p>
              </div>
              <div className="childContent">
                <h2>Decentralized exchange</h2>
                <p>Get the best rates across the chains with meta-aggregator</p>
                <div className="childBtn">
                  <a href="https://app.fs.exchange/swap">
                    <p>Swap now</p>
                    <LazyLoadImage
                      loading="lazy"
                      className="imgg1"
                      src={"images/Icon (1).png"}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="lowerChild f-lower">
              <div className="circle">
                <p>
                  <img src={"images/dollar.svg"} alt="" />
                </p>
              </div>
              <div className="childContent">
                <h2>Participate in hottest deals</h2>
                <p>
                  Decentralized investing in tokenized equity, tokens or NFTs
                </p>
                <div className="childBtn">
                  <a href="https://app.fs.exchange/projects">
                    <p>Start with $5</p>
                    <LazyLoadImage
                      loading="lazy"
                      className="imgg1"
                      src={"images/Icon (1).png"}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="lowerChild">
              <div className="circle">
                <p>
                  <img src={"images/save.svg"} alt="" />
                </p>
              </div>
              <div className="childContent">
                <h2>Earn with FS</h2>
                <p>
                  Get attractive APY on the hottest tokens by using our liquid
                  staking.
                </p>
                <div className="childBtn">
                  <a href="https://app.fs.exchange/earn">
                    <p>Start earning now</p>
                    <LazyLoadImage
                      loading="lazy"
                      className="imgg1"
                      src={"images/Icon (1).png"}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="lowerChild f-lower">
              <div className="circle">
                <p>
                  <img src={"images/learn1.svg"} alt="" />
                </p>
              </div>
              <div className="childContent">
                <h2>Learn more</h2>
                <p>Get the latest news in decentralized investing space</p>
                <div className="childBtn">
                  <a href="https://blog.fs.exchange/">
                    <p>Start learning today</p>
                    <LazyLoadImage
                      loading="lazy"
                      className="imgg1"
                      src={"images/Icon (1).png"}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </LazyLoad>
  );
};

export default Header;
