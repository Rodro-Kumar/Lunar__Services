import React from "react";
import "../Card/Card.css";

const Card = ({ Classname, CardTitle, CardDetail, children, card__img }) => {
  return (
    <>
      <div className={Classname}>
        <img src={card__img} alt={card__img} />
        <div className="card__title">
          {CardTitle ? CardTitle : "Facebook Marketing"}
        </div>
        <div className="card__detail">
          {CardDetail
            ? CardDetail
            : "Facebook Marketing is a simple, yet powerful marketing platform that allows businesses to market their products and services through the biggest social media platforms (including Instagram as part of Facebook). We offer a range of marketing services including ad campaigns for increasing brand awareness, promotions, customer loyalty, building your social media following, and much more."}
        </div>

        {children}
      </div>
    </>
  );
};

export default Card;
