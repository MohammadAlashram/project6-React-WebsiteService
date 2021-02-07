import React from "react";
import HeroHome from "../Elements/home/Home";
import HomeCTA from "../Elements/home/HomeCTA";
import HomeServices from "../Elements/home/HomeServices";
import HomeTeam from "../Elements/home/HomeTeam";
import HomeTeamProp from "../Elements/home/HomeTeamProp";
import HomeTes from "../Elements/home/HomeTes";
import HeroVideo from "../Elements/home/HomeVideo";
import lojain from "../../assets/images/lojain1.jpeg";
import ashram from "../../assets/images/ashram.jpeg";
import aburuman from "../../assets/images/aburuman.jpeg";
import lara from "../../assets/images/lara.jpg";
import adam from "../../assets/images/adam.jpg";
import Header2 from "../Layouts/Header2";
import Footer from "../Layouts/Footer";

const Home = (props) => {
  return (
    <div>
      <HeroHome />
      <HomeServices onClick={props.onClick} />
      <HeroVideo />
      <HomeTes />
      <HomeCTA />
      <div className="jumbotron">
        <HomeTeam />
        <div className="card-deck">
          <HomeTeamProp name="Ahmad" img={aburuman} />
          <HomeTeamProp name="Lojain" img={lojain} />
          <HomeTeamProp name="Adam" img={adam} />
          <HomeTeamProp name="Lara" img={lara} />
          <HomeTeamProp name="Mohammad" img={ashram} />
        </div>
      </div>
    </div>
  );
};

export default Home;
