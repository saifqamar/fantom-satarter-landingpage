import React, { Suspense } from "react";
import "./EasyAccessProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faMedium,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import LazyLoad from "react-lazyload";

const EasyAccessProjects = () => {
  return (
    <LazyLoad>
      <div className="container">
        <div className="EasyAccessProjects">
          <h1>
            Get access to the best deals on NFTs and token and tokenized sales
          </h1>
          <p className="easy-p">
            Join FSmart Club or win your spot to participate in exclusive deals
            for free. Bonus: earn boosted interest on your FS tokens
          </p>
          <div className="Ecards">
            <div className="Ecard">
              <div className="pad-card">
                <div className="EcardTop">
                  <div className="img">
                    <span>Completed</span>
                    <img src="images/cardImage.jpg" alt="img" />
                  </div>
                  <div className="imgBottom">
                    <img src="images/magiccraft128.png" alt="" />

                    <ul className="socialLinks">
                      <li className="icon" id="globe">
                        <FontAwesomeIcon icon={faGlobe} />
                      </li>
                      <li className="icon" id="twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                      </li>
                      <li className="icon" id="telegram">
                        <FontAwesomeIcon icon={faTelegram} />
                      </li>
                      <li className="icon" id="discord">
                        <FontAwesomeIcon icon={faDiscord} />
                      </li>
                      <li className="icon" id="globe">
                        <FontAwesomeIcon icon={faMedium} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="EcardBottom">
                  <h1>MagicCraft</h1>
                  <span>MCRT</span>
                  <button>Post IDO Review</button>
                  <div className="usd">
                    <p>Public Total Raise</p>
                    <span>$127,000</span>
                  </div>
                  <div>
                    <div className="participants">
                      <p>Participants</p>
                      <span>670</span>
                    </div>
                    <div className="protocol">
                      <img src="images/protocol.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Ecard">
              <div className="pad-card">
                <div className="EcardTop">
                  <div className="img">
                    <span>Completed</span>
                    <img src="images/moda-dao.png" alt="img" />
                  </div>
                  <div className="imgBottom">
                    <img src="images/modadao128.png" alt="" />
                    <ul className="socialLinks">
                      <li className="icon" id="globe">
                        <FontAwesomeIcon icon={faGlobe} />
                      </li>
                      <li className="icon" id="twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                      </li>
                      <li className="icon" id="telegram">
                        <FontAwesomeIcon icon={faTelegram} />
                      </li>
                      <li className="icon" id="discord">
                        <FontAwesomeIcon icon={faDiscord} />
                      </li>
                      <li className="icon" id="globe">
                        <FontAwesomeIcon icon={faMedium} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="EcardBottom">
                  <h1>MODA DAO</h1>
                  <span>MODA</span>
                  <button>Post IDO Review</button>
                  <div className="usd">
                    <p>Public Total Raise</p>
                    <span>$143,586</span>
                  </div>
                  <div>
                    <div className="participants">
                      <p>Participants</p>
                      <span>462</span>
                    </div>
                    <div className="protocol">
                      <img src="images/protocol.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Ecard">
              <div className="pad-card">
                <div className="EcardTop">
                  <div className="img">
                    <span>Completed</span>
                    <img src="images/savage.png" alt="img" />
                  </div>
                  <div className="imgBottom">
                    <img src="images/savage128.png" alt="" />
                    <ul className="socialLinks">
                      <li className="icon" id="globe">
                        <FontAwesomeIcon icon={faGlobe} />
                      </li>
                      <li className="icon" id="twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                      </li>
                      <li className="icon" id="telegram">
                        <FontAwesomeIcon icon={faTelegram} />
                      </li>
                      <li className="icon" id="discord">
                        <FontAwesomeIcon icon={faDiscord} />
                      </li>
                      <li className="icon" id="globe">
                        <FontAwesomeIcon icon={faMedium} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="EcardBottom">
                  <h1>Savage</h1>
                  <span>SAVG</span>
                  <button>Post IDO Review</button>
                  <div className="usd">
                    <p>Public Total Raise</p>
                    <span>$110,520</span>
                  </div>
                  <div>
                    <div className="participants">
                      <p>Participants</p>
                      <span>909</span>
                    </div>
                    <div className="protocol">
                      <img src="images/protocol.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default EasyAccessProjects;
