import React from "react";
import "../../../assets/css/home.css";

import kalas1 from "../../../assets/images/kalas1.mp4";

const HeroHome = () => {
  return (
    <div
      className="jumbotron"
      style={{ marginLeft: "0", marginRight: "0", padding: "0" }}
    >
      <video className="videoHero" autoPlay muted loop>
        <source src={kalas1} type="video/mp4" />
      </video>{" "}
      <div
        className="container"
        style={{ marginLeft: "0", marginRight: "0", padding: "0" }}
      >
        <div className="heroText">
          <h1 className="head" style={{ fontWeight: "bold", color: "#fff" }}>
            TAKE IT ALL OUT ON US!
          </h1>
          <p className="p" style={{ color: "#fff" }}>
            It’s safe, stress relieving, and indulges your destructive desires.
            We all know KALAS means KALAS!
          </p>
          <a
            id="button"
            href="#services-section"
            style={{ backgroundColor: "#CC3333", color: "#fff" }}
            class="btn btn btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
