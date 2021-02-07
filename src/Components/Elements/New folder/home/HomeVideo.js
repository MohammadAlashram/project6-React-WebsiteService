import React from "react";
import ReactPlayer from "react-player";

const HeroVideo = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="headVid" style={{ textAlign: "center" }}>
        Take a Sneak Peak
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPlayer url="https://www.youtube.com/watch?v=8mTmJkfgbwI" />
      </div>
      <p
        id="vidP"
        style={{
          margin: "auto",
          textAlign: "center",
          paddingTop: "2rem",
          fontWeight: "bold",
          textAlign: "justify",
        }}
      >
        Don’t worry though, it’s perfectly safe. We provide full protective gear
        including coveralls, a face shield, gloves, vest, and hard hat. We also
        provide weapons (bats, mallets, pipes, and etc.), and items to break.
        We’ll take care of you, don’t worry about a thing. Come relieve your
        stress and take it out on us!
      </p>
    </div>
  );
};

export default HeroVideo;
