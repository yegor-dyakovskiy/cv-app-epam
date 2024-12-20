import React, { Children } from "react";
import "./Button.css";

function Button({
  children,
  img,
  style,
  onClick,
  styleForText,
  disabled,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"button" + " " + style}
      type={type}
    >
      <img src={img} alt="" />
      <p className={styleForText}> {children}</p>
    </button>
  );
}

export default Button;
