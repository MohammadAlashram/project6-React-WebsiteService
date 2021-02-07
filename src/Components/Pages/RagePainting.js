import React from "react";
import "../../assets/css/Single.css";
import ReactPlayer from "react-player";
import kalas4 from "../../assets/images/kalas4.mp4";
import Hero from "../Elements/home/Hero";
import Book from "./Book";

function All(props) {
  return <div>{props.children}</div>;
}
// function ServiceHeader(props) {
//   return (
//       <div className="background">
//       <h1 className="title" style={{fontSize:"50px"}}>Rage Painting</h1>
//       <p className="para"> Do I have to be destructive?</p>
//     </div>
//   );
// }
function ServiceContent(props) {
  return (
    <p className="content">
      There are many ways to burn off the rage, so we also offer rage painting.
      With 2 canvases and 30 minutes you have the opportunity to use your rage
      to be creative! Create two unique paintings and have fun while doing it.
    </p>
  );
}
function Servicevedio() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactPlayer url="https://www.youtube.com/watch?v=RtHbIfyQHBU&ab_channel=Sorastro%27sPainting" />
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

function RagePainting(props) {
  return (
    <div>
      <Hero
        vid={kalas4}
        header="RAGE PAINTING"
        para="Do I have to be destructive?"
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

export default RagePainting;
