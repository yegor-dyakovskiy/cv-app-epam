import React from "react";
import "./Expertise.css";

const Expertise = ({ data }) => {
  return (
    <div className="Expertise">
      {data.map((item, index) => (
        <div key={index} className="expertise-item">
          <div className="expertise-left">
            <div className="expertise-company">{item.info.company}</div>
            <div className="expertise-date">{item.date}</div>
          </div>
          <div className="expertise-info">
            <div className="expertise-job">{item.info.job}</div>
            <div className="expertise-description">{item.info.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
