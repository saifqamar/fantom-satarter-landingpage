import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <LazyLoad className="footer">
      <LazyLoadImage
        // alt="demonstration1"
        className="footerImg"
        src={"images/footer.png"}
      />
      <LazyLoadImage
        // alt="demonstration1"
        className="footerImg footerImg-m"
        src={"images/footer-back-2.png"}
      />
      <div className="footerTop">
        <div className="footer-content">
          <h2>Lead the financial freedom</h2>
          <p>Come work with us on the cutting edge blockchain technologies</p>
          <div class="FBton">
            <a href="https://angel.co/company/fantomstarter" class="Fbtn1">
              <button>Open roles</button>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="arrowicons"
              />
            </a>
          </div>
        </div>
        <hr />
      </div>

      <div className="footerBottom">
        <div className="fBtop">
          <img src="images/fs-logo.png" alt="fs-logo" />
          <div id="socialIcons">
            <a href="https://twitter.com/fantomstarter">
              <img loading="lazy" src="images/Socials.svg" alt="" />{" "}
            </a>
            <a href="https://t.me/fantomstarter">
              <img loading="lazy" src="images/Socials (1).svg" alt="" />{" "}
            </a>
            <a href="https://discord.com/invite/nsMxVcNwy6">
              <img loading="lazy" src="images/Socials (2).svg" alt="" />{" "}
            </a>
            <a href="https://blog.fs.exchange/">
              <img loading="lazy" src="images/Socials (3).svg" alt="" />{" "}
            </a>
          </div>
        </div>

        <div className="links">
          <div className="links1">
            <h2>Products</h2>
            <a href="https://app.fs.exchange/swap">
              Decentralized Crosschain Exchange
            </a>
            <a href="https://app.fs.exchange/projects">
              Decentralized Investing Protocol
            </a>
            <a href="https://app.fs.exchange/staking">
              FSmart Club Subscription
            </a>
            <a href="https://app.fs.exchange/store">Invest with NFTs</a>
            <a href="https://app.fs.exchange/earn">
              Self-custodial Crypto Earning App
            </a>
          </div>
          <div className="links1">
            <h2>About</h2>
            <a href="https://blog.fantomstarter.io/fantomstarter-best-practices-52b9dba3c5f4">
              FAQ{" "}
            </a>
            <a href="https://fantomstarterio.github.io/docs/English_Litepaper_v3.0.pdf">
              Litepaper{" "}
            </a>
            <a href="https://fantomstarterio.github.io/docs/Audit_Report_SlowMist.pdf">
              Audit{" "}
            </a>
            <a href="https://form.typeform.com/to/yQnDGQUZ">Scout program</a>
            <a href="mailto:hello@fsmultichain.io">Contact</a>
            <a href="https://angel.co/company/fantomstarter">Careers</a>
          </div>

          <div className="links1">
            <h2>Socials</h2>
            <a href="https://twitter.com/fantomstarter">Twitter </a>
            <a href="https://t.me/fantomstarter">Telegram </a>
            <a href="https://discord.com/invite/nsMxVcNwy6">Discord </a>
          </div>
          <div>
            <img loading="lazy" src="images/slowmist.svg" />
          </div>
        </div>
        <hr />
        <p className="foot-end">
          © 2022 FSX and FS.exchange. By using this service you agree to the
          <Link to={'/terms'} target={'self'} view={'current'}> Terms of Service</Link> and <Link to={'/privacy'} target={'self'} view={'current'}>Privacy Policy</Link>.
        </p>
      </div>
    </LazyLoad>
  );
};

export default Footer;
