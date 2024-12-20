import React from "react";
import "./Panel.css";
import PhotoBox from "../PhotoBox/PhotoBox";
import avatar from "./../../assets/images/user-avatar.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import iconLeft from "./../../assets/images/icon-left.svg";
import Navigation from "../Navigation/Navigation";

function Panel({ isOpen, togglePanel, currentSection }) {
  return (
    <aside className={`panel ${isOpen ? "open" : ""}`}>
      <div className="burger-bg" onClick={togglePanel}>
        <div className="burger"></div>
      </div>
      <div>
        <PhotoBox
          newClass="font-size16pxbold"
          classForAvatar="avatar-inner-page"
          name="Дьяковский Егор"
          avatar={avatar}
        />
        <Navigation currentSection={currentSection} />
      </div>
      <Link to="/">
        <Button
          styleForText={"style-for-text"}
          style={"panel-button"}
          img={iconLeft}
        >
          Go back
        </Button>
      </Link>
    </aside>
  );
}

export default Panel;
