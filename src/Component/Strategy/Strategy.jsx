import React from "react";
import "../Strategy/Strategy.css";
import Button from "../../CommonComponent/Button/Button";
import { FaChevronRight } from "react-icons/fa";
import bg from "../../assets/Frame.png";

const Strategy = () => {
  return (
    <>
      <div className="strategy">
        <div className="strategy__bg__color">
          <div className="container">
            <div className="strategy__wraper">
              <div className="strategy__left">
                <h3 className="strategy__title">Why Lunar Strategy?</h3>
                <p className="strategy__details">
                  To get customers, it's imperative to be seen by the mass.
                  Every successful company is unique and needs contrasting
                  digital marketing strategies. Book a meeting with us and we
                  will help you find the correct strategy for your company.
                </p>
                <Button btnStyle="strategy__btn">
                  Book Free Meeting
                  <FaChevronRight className="strategy__right_arrow" />
                </Button>
              </div>
              <div className="strategy__right">
                <img src={bg} alt={bg} className="strategy__bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategy;
