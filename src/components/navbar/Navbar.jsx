import React, { Suspense, useState } from "react";
import LazyLoad from "react-lazyload";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div >
      <LazyLoad className="nav">
      <img src="images/fs-logo.png" alt="" id="img1" />
      <div className="navCOnt" id={show ? "hidde" : ""}>
        <div class="left">
          <ul>
            <li>
              <a href="https://app.fs.exchange/swap">Exchange</a>
            </li>
            <li>
              <a href="https://app.fs.exchange/projects">Sales</a>
            </li>
            <li>
              <a href="https://app.fs.exchange/staking">FSmart Club</a>
            </li>
            <li>
              <a href="https://app.fs.exchange/earn">Earn</a>
            </li>
            <li>
              <a href="https://blog.fs.exchange">Blog</a>
            </li>
            <li>
              <a href="https://form.typeform.com/to/LdPnpf6n">
                Web3 Accelerator
              </a>
            </li>
          </ul>
        </div>
        <a href="https://app.fs.exchange" class="right">
          <button>Open the app</button>
        </a>
      </div>

      <img
        src="images/Menu.png"
        alt=""
        id="img2"
        onClick={() => setShow(!show)}
      />
      </LazyLoad>
    </div>
  );
};

export default Navbar;
