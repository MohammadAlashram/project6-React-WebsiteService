import React, { Component } from "react";
import "../../assets/css/Services.css";
import kalas2 from "../../assets/images/kalas2.mp4";
import Hero from "../Elements/home/Hero";
import HomeServices from "../Elements/home/HomeServices";

class Services extends Component {
  render() {
    return (
      <div>
        <section id="services">
          <Hero vid={kalas2} header="SMASH TO YOUR HEART’S DESIRE" />
          <HomeServices onClick={this.props.onClick} />
          <div id="imgSliderCon" className="container">
            <h2 id="imgSliderTitle">CHECK OUT THE GALLERY</h2>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="https://i.ibb.co/XCDtygD/624.jpg"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://i.ibb.co/5rzmFkZ/5afb6eb6bcadc-image-1.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://i.ibb.co/zPWdpMV/624.gif"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
