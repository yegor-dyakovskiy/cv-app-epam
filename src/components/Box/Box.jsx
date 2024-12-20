import React from "react";
import "./Box.css";
import Button from "../Button/Button";

function Box({ title, children, id, onClick, buttonInside }) {
  return (
    <div id={id} className="box">
      <div className="box-title-wrapper">
        <p className="box-title">{title}</p>
        {title === "Skills" && (
          <Button onClick={buttonInside} style={`button-skills`}>
            Open edit
          </Button>
        )}
      </div>
      <div onClick={onClick} className="box-text">
        {children}
      </div>
    </div>
  );
}

export default Box;
