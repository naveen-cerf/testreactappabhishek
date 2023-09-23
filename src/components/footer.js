import React from 'react';
import logo from '../assets/Logo_final_blue.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg2 fc1">
  <div className="wrapper df jcsb fww w100 pt48">
    <div className="footer-company">
      <Link to="/">
        <img src={logo} alt="logo-abhisheka" />
      </Link>
      <p className="mt48 fs16">+91-9878478547</p>
      <p className="mt48 fs16">sales@abhisheka.com</p>
    </div>
    <div className="footer-navlist  df jcse fww flx1 pb40 brd-b2 mb40">
      <div className="footer-second-list">
        <h4> Services </h4>
        <ul className="footer-sub-list">
          <li className="sub-list">
            <Link className="footer-sub-item" to="/services/web-development">
              {" "}
              Web Development{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/services/mobile-app-development">
              {" "}
              Mobile Development{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/services/it-consulting">
              {" "}
              IT Consulting{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/services/business-analysis">
              {" "}
              Business Analysis{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/services/quality-assurance-service">
              {" "}
              Quality Assurance{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/services/design-solutions">
              {" "}
              Design Solution{" "}
            </Link>
          </li>
          <li className="footer-see-more mt16 transit1">
              <Link to="/services" className="v-center fs14 fc4">
                See more
                <span className="material-symbols-outlined ml4 transit1">
                  <BsArrowRightCircleFill/>
                </span>
              </Link>
          </li>
        </ul>
      </div>
      <div className="footer-third-list">
        <h4> Expertise </h4>
        <ul className="footer-sub-list">
          <li className="sub-list">
            <Link className="footer-sub-item" to="/experties">
              {" "}
              Front-end Development{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/experties">
              {" "}
              Back-end Development{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/experties">
              {" "}
              SaaS Solutions{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/experties">
              {" "}
              Data Mining &amp; BI{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/experties">
              {" "}
              AI &amp; Chatbots{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/experties">
              {" "}
              Cloud Solution{" "}
            </Link>
          </li>
          <li className="footer-see-more mt16 transit1">
            <Link to="/experties" className="v-center fs14 fc4">
              See more
              <span className="material-symbols-outlined ml4 transit1">
                <BsArrowRightCircleFill/>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-forth-list">
        <h4> About Us </h4>
        <ul className="footer-sub-list">
          <li className="sub-list">
            <Link className="footer-sub-item" to="/company">
              {" "}
              Company{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/success-stories">
              {" "}
              Success stories{" "}
            </Link>
          </li>
          <li className="sub-list">
            <Link className="footer-sub-item" to="/blogs">
              {" "}
              Blog{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="social-block df jcc w100">
    <div className="social-block-copyright w40 mb48">
      <p className="fs14">
        © 2023 Light ABHISHEKA SOLUTION All rights reserved | Terms of Use and
        Privacy Policy
      </p>
    </div>
    <div className="social-media-icons"></div>
  </div>
</footer>

  );
}

export default Footer;
