import React from "react";
import "../../assets/css/Header2.css";
import Angry from "../../assets/images/Angry.png";

const styleH = {
  marginTop: "9rem",
  paddingBottom: "0px",
};

const style2 = {
  height: "5rem",

  backgroundColor: "black",
};
const Header2 = (props) => {
  return (
    <nav style={style2} id="navRes" className="navbar navbar-expand-lg navbar">
      <a
        className="navbar-brand"
        id="logo2"
        href="#"
        style={styleH}
        onClick={props.onClick}
      >
        <img src={Angry} alt="logoangry" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">☰</span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav ">
          <li className="nav-item  ">
            <a
              id="home"
              className="nav-link"
              style={{ float: "right", color: "#fff" }}
              href="#"
              onClick={props.onClick}
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="services"
              className="nav-link"
              style={{ float: "right", color: "#fff" }}
              href="#"
              onClick={props.onClick}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              id="auth"
              className="nav-link"
              style={{ float: "right", color: "#fff" }}
              href="#"
              onClick={props.onClick}
            >
              Login/Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header2;
