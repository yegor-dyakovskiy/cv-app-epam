import React from "react";
import "./Home.css";
import avatar from "./../../assets/images/user-avatar.jpg";
import Button from "../../components/Button/Button";
import PhotoBox from "../../components/PhotoBox/PhotoBox";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="cv-container">
      <PhotoBox
        name="Дьяковский Егор"
        title="Горный Гид, Альпинист, Веб-разработчик"
        description=" Основатель проекта Горный Клуб Алматы, горы как дом родной. С 2016
        года организую походы и восхождения разной сложности"
        avatar={avatar}
      />
      <Link to="/inner">
        <Button styleForText={"color-white"}>Узнать больше</Button>
      </Link>
    </div>
  );
}

export default Home;
