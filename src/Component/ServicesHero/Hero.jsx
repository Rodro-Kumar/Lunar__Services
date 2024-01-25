import React from "react";
import "../ServicesHero/Hero.css";
import Button from "../../CommonComponent/Button/Button";
import hero from "../../assets/hero.png";
import wave from "../../assets/Wave1.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__wraper">
            <div className="hero__left">
              <h1 className="hero__title">Services</h1>
              <p className="hero__description">
                All our digital marketing services start with a free 30-minute
                consultation call where we find the best strategy towards
                reaching your goals.
              </p>
              <Button btnStyle="hero__btn">Contact Us</Button>
            </div>
            <div className="hero__right">
              <img src={hero} alt={hero} className="hero__img" />
            </div>
          </div>
        </div>

        <img src={wave} alt={wave} className="hero__wave__img" />
      </div>
    </>
  );
};

export default Hero;
