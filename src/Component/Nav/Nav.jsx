import React from "react";
import "../Nav/Nav.css";
import logo from "../../assets/Logo.png";
import { IoChevronDownOutline } from "react-icons/io5";
import Button from "../../CommonComponent/Button/Button";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav__wraper">
            <div className="nav__left">
              <div className="nav__logo">
                <img src={logo} alt={logo} />
              </div>
            </div>
            <div className="nav__right">
              <div className="nav__list">
                <ul className="nav__list__item">
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Industries</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Team Lunar</a>
                  </li>
                  <li>
                    <a href="#">
                      Blog <IoChevronDownOutline className="down__arrow" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav__btn">
                <Button btnStyle="contact__btn ">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
