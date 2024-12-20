import React, { useState } from "react";
import "./Portfolio.css";
import card1 from "./../../assets/images/portfolio-card-1.png";
import card2 from "./../../assets/images/portfolio-card-2.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      category: "Code",
      img: card2,
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
      link: "View resource",
    },
    {
      id: 2,
      category: "Code",
      img: card1,
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
      link: "View resource",
    },
    {
      id: 3,
      category: "Ui",
      img: card2,
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
      link: "View resource",
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <div className="Portfolio">
      <div className="portfolio-filter">
        <a
          className={`filter-link ${filter === "All" ? "active" : ""}`}
          href="#!"
          onClick={() => setFilter("All")}
        >
          All
        </a>{" "}
        /{" "}
        <a
          className={`filter-link ${filter === "Code" ? "active" : ""}`}
          href="#!"
          onClick={() => setFilter("Code")}
        >
          Code
        </a>{" "}
        /{" "}
        <a
          className={`filter-link ${filter === "Ui" ? "active" : ""}`}
          href="#!"
          onClick={() => setFilter("Ui")}
        >
          Ui
        </a>
      </div>
      <div className="portfolio-wrapper">
        {filteredItems.map((item) => (
          <div key={item.id} className={`portfolio-card ${item.category}`}>
            <img src={item.img} alt="" />
            <div className="portfolio-card__info">
              <p className="portfolio-card__info-title">{item.title}</p>
              <p className="portfolio-card__info-text">{item.text}</p>
              <a className="portfolio-card__info-link">{item.link}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
