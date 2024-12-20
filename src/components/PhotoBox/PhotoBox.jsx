import React from "react";
import "./PhotoBox.css";

function PhotoBox({
  newClass,
  title,
  avatar,
  name,
  description,
  classForAvatar,
}) {
  return (
    <main className="cv-main">
      <img
        className={`img-avatar ${classForAvatar}`}
        src={avatar}
        alt="avatar"
      />
      <section className="cv-about">
        <h1 className={`${newClass} cv-name`}>{name}</h1>
        <h2 className="cv-subtitle">{title}</h2>
        <p className="cv-text">{description}</p>
      </section>
    </main>
  );
}

export default PhotoBox;
