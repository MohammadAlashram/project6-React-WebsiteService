import React from "react";
import "../../../assets/css/home.css";
import img1 from "../../../assets/images/service1.jpg";
import img2 from "../../../assets/images/service2.png";
import img3 from "../../../assets/images/service3.jpg";

const HomeServices = (props) => {
  return (
    <div id="services-section">
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={img1} alt="Card image cap" />

          <div id="cardser" className="card-body">
            <h3 id="titleser" className="card-title">
              Rage Room
            </h3>
            <a
              id="rage-room"
              href="#"
              style={{ backgroundColor: "#CC3333", color: "#fff" }}
              class="btn btn btn active"
              role="button"
              aria-pressed="true"
              onClick={props.onClick}
            >
              Book it
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={img2} alt="Card image cap" />
          <div id="cardser" className="card-body">
            <h3 id="titleser" className="card-title">
              Rage Painting
            </h3>
            <a
              id="rage-painting"
              href="#"
              style={{ backgroundColor: "#CC3333", color: "#fff" }}
              class="btn btn btn active"
              role="button"
              aria-pressed="true"
              onClick={props.onClick}
            >
              Book it
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={img3} alt="Card image cap" />
          <div id="cardser" className="card-body">
            <h3 id="titleser" className="card-title">
              Smash Party
            </h3>
            <a
              id="smash-party"
              href="#"
              style={{ backgroundColor: "#CC3333", color: "#fff" }}
              class="btn btn btn active"
              role="button"
              aria-pressed="true"
              onClick={props.onClick}
            >
              Book it
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
