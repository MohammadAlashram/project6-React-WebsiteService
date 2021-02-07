import React from "react";
import "../../assets/css/Single.css";
import ReactPlayer from "react-player";
import kalas5 from "../../assets/images/kalas5.mp4";
import Hero from "../Elements/home/Hero";
import Book from "./Book";

function All(props) {
  return <div>{props.children}</div>;
}
// function ServiceHeader(props) {
//   return (
//       <div className="background">
//       <h1 className="title" style={{fontSize:"50px"}}>Smash Party</h1>
//       <p className="para">WANNA PARTY AT OUR Smash Party ROOM?</p>
//     </div>
//   );
// }
function ServiceContent(props) {
  return (
    <p className="content">
      Well, you can party like never before here at Rage Ground! All of our
      rooms open up into one giant room and can fit up to 15 people at a time
      for the ultimate breaking experience. For larger groups, we’re able to
      cycle you in and out one group at a time.
    </p>
  );
}
function Servicevedio() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactPlayer url="https://www.youtube.com/watch?v=H2uTFHRIzWs&ab_channel=wttwchicago" />
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

function SmashParty() {
  return (
    <div>
      <Hero
        vid={kalas5}
        header="SMASH PARTY"
        para="WANNA PARTY AT OUR Smash Party ROOM?"
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

export default SmashParty;
