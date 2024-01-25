import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/footer_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wraper">
            <div className="footer__left">
              <div className="footer__logo">
                <img src={logo} alt={logo} />
              </div>
              <div className="footer__address">
                <p className="footer__address__info">
                  REBORN STUDIO AB Org.nr: 559264-1871 Lunar Holding LDA
                  info@lunarstrategy.com +467-20478390
                </p>
              </div>
              <div className="footer__icon">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="footer__right">
              <div className="footer__list">
                <ul>
                  <li>Company</li>
                  <li>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Lunar Blog</a>
                    <a href="#">Our Specialists</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy & Policy</a>
                  </li>
                </ul>
                <ul>
                  <li>Services</li>
                  <li>
                    <a href="#">Digital Marketing</a>
                    <a href="#">Free Audit</a>
                    <a href="#">Google Ads</a>
                    <a href="#">Cryptocurrency Marketing</a>
                    <a href="#">SEO</a>
                    <a href="#">SAAS Marketing</a>
                    <a href="#">Website & SEO</a>
                  </li>
                </ul>
              </div>
              <div className="footer__podcast">
                <p className="podcast__title">Podcast</p>
                <div className="podcast__album"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
