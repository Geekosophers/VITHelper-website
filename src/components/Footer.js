import React from "react";
import "../styles/components/_footer.scss";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Frame from "./Images/Frame";
import Geekosophers from "./Images/Geekosophers";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="cont">
        <hr className="line" />
        <div className="gridcont">
          <div className="left">
            <div className="lefcol">
              <br />
              <Frame />
            </div>
            <div className="ricol">
              <h3 id="lato"> An initiative of</h3>
              <Geekosophers/>
              <div className="icons">
                <span>
                  <a href="https://twitter.com/geekosophers">
                    {" "}
                    <FaTwitter className="i" />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/Geekosophers">
                    <FaGithub className="i" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col1 contentbox">
            <div className="head">
              <h3>Contact Us</h3>
            </div>
            <div className="content">
              If you've any question about VITHelper or our platform, please
              reach out to us at{" "}
              <a href="mailto:contact@vithelper.in" target="_blank">
                <span className="link">
                  {" "}
                  <b> contact@vithelper.in</b>
                </span>
              </a>
            </div>
          </div>
          <div className="col1">
            <div className="head">
              <h3>Privacy Policy</h3>
            </div>
            <div className="content">
              For details on how we use your information, please see our{" "}
              <Link to="/privacy-policy" target="_blank">
                <span className="link">
                  {" "}
                  <b> privacy policy.</b>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <p className="copy">© 2022 www.geekosophers.com.</p>
      </div>
    </>
  );
};

export default Footer;
