import React from "react";
import "../../assets/css/Single.css";
import ReactPlayer from "react-player";
import kalas3 from "../../assets/images/kalas3.mp4";
import Hero from "../Elements/home/Hero";
import Book from "./Book";
function All(props) {
  return <div>{props.children}</div>;
}

function ServiceContent(props) {
  return (
    <p className="content">
      Rage Room, also known as smash room or anger room, is a room designed to
      vent anger and destroy items within the room. Clients can break items by
      throwing them against hard surfaces or destroy items by smashing them with
      tools. These tools include sledge hammers, baseball bats, golf clubs or
      crow bars.
    </p>
  );
}
function Servicevedio() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactPlayer url="https://www.youtube.com/watch?v=8mTmJkfgbwI&ab_channel=HoldenHardman" />
    </div>
  );
}
function Button() {
  return (
    <div className="containerButton" style={{ marginBottom: "3rem" }}>
      <div className="row">
        <div className="col text-center">
          {/* <a id="button" href="#" style={{backgroundColor:'#CC3333', color:'#fff'}} class="btn btn btn-lg active" role="button" aria-pressed="true" >Book Now</a> */}
        </div>
      </div>
    </div>
  );
}

function RageRoom() {
  return (
    <div>
      <Hero
        vid={kalas3}
        header="RAGE ROOM"
        para="COME RELIEVE YOUR STRESS AND TAKE IT OUT ON US!"
      />
      <All>
        {/* <ServiceHeader /> */}
        <ServiceContent />
        <Servicevedio />
        <Button />
      </All>
      <Book />
    </div>
  );
}

export default RageRoom;
