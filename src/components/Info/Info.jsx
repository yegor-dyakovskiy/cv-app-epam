import React from "react";

const Info = ({ text, style }) => {
  return (
    <div className={`info-component ${style}`}>
      <p className="info-text">{text}</p>
    </div>
  );
};
export default Info;
