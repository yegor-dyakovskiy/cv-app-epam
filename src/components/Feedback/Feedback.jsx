import React from "react";
import "./Feedback.css";
import Info from "./../Info/Info";

const Feedback = ({ data }) => {
  return (
    <div className="Feedback">
      {data.map((item, index) => (
        <div key={index} className="feedback-item">
          <Info style={"feedback-text"} text={item.feedback}></Info>
          <div className="feedback-reporter">
            <img
              src={item.reporter.photoUrl}
              alt={item.reporter.name}
              className="reporter-photo"
            />
            <span className="reporter-name">{item.reporter.name},</span>
            <a href={item.reporter.citeUrl} className="reporter-link">
              {item.reporter.citeUrl}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
