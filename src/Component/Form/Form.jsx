import React from "react";
import "../Form/Form.css";
import Button from "../../CommonComponent/Button/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Form = () => {
  return (
    <>
      <div className="form">
        <div className="container">
          <div className="form__wraper">
            <div className="form__left">
              <h3 className="form__heading">
                Let us discuss your marketing strategy!
              </h3>
              <p className="form__info">
                Org.nr: 559264-1871 Lunar Holding LDA info@lunarstrategy.com
                +467-20478390
              </p>
              <div className="form__icon">
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
              </div>
              <Button btnStyle="formBookbtn">Book a free consultation</Button>
            </div>
            <div className="form__right">
              <p className="contact__title">Or you can also contact us here</p>
              <div className="form__input">
                <input type="Name" placeholder="Name" />
                <input type="Email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <input type="message" placeholder="Message" />
              </div>
              <Button btnStyle="form__send__btn">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
