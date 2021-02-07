import React from "react";
import "../../../assets/css/home.css";

const Hero = (props) => {
  return (
    <div
      className="jumbotron"
      style={{ marginLeft: "0", marginRight: "0", padding: "0" }}
    >
      <video className="videoHero" autoPlay muted loop>
        <source src={props.vid} type="video/mp4" />
      </video>{" "}
      <div
        className="container"
        style={{ marginLeft: "0", marginRight: "0", padding: "0" }}
      >
        <div className="heroText">
          <h1 className="head" style={{ fontWeight: "bold" }}>
            {props.header}
          </h1>
          <p className="p" style={{ color: "#fff" }}>
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
