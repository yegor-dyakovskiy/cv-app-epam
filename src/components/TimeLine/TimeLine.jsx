/* import React from "react";
import "./TimeLine.css";
import Info from "../Info/Info";

const TimeLine = ({ data }) => {
  return (
    <div className="TimeLine">
      {data.map((event, index) => (
        <div key={index} className="timeline-container">
          <div className="timeline-left">
            <p className="timeline-date">
              <b>{event.date}</b>
            </p>
            <div className="timeline-bar"></div>
          </div>
          <div className="timeline-event">
            <div className="timeline-content">
              <p className="timeline-title">
                <b>{event.title}</b>
              </p>
              <Info text={event.text} style={"timeline-text"}></Info>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine; */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducations } from "../../features/education/educationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TimeLine.css";
import Info from "../Info/Info";

const TimeLine = () => {
  const dispatch = useDispatch();
  const { list: data, status, error } = useSelector((state) => state.education);

  useEffect(() => {
    dispatch(fetchEducations());
  }, [dispatch]);
  /*   dispatch({ type: 'education/fetchEducations/rejected', error: 'Test error message' }); */ //код для проверки error-message
  if (status === "loading") {
    return (
      <div className="loading">
        <FontAwesomeIcon className="icon" icon="sync-alt" spin />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="error">
        Something went wrong; please review your server connection!
      </div>
    );
  }

  return (
    <div className="TimeLine">
      {data.map((event, index) => (
        <div key={index} className="timeline-container">
          <div className="timeline-left">
            <p className="timeline-date">
              <b>{event.date}</b>
            </p>
            <div className="timeline-bar"></div>
          </div>
          <div className="timeline-event">
            <div className="timeline-content">
              <p className="timeline-title">
                <b>{event.title}</b>
              </p>
              <Info text={event.text} style={"timeline-text"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
