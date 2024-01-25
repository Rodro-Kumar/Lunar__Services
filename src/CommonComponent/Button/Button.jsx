import React from "react";
import "../Button/Button.css";

const Button = ({ btnStyle, children }) => {
  return (
    <>
      <button className={btnStyle}>{children ? children : "Button"}</button>
    </>
  );
};

export default Button;
