import React, { Component } from "react";
import Header2 from "./Components/Layouts/Header2";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import RageRoom from "./Components/Pages/RageRoom";
import RagePainting from "./Components/Pages/RagePainting";
import SmashParty from "./Components/Pages/SmashParty";
import ProfilePage from "./ProfilePage";
import Auth from "./Components/Pages/Auth";
import Footer from "./Components/Layouts/Footer";
//
import "./assets/css/style.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "home",
    };
  }
  checkAuth = () => {
    this.setState({ activePage: "auth" });
  };
  navigation = (e) => {
    let linkName = e.target.id;
    if (linkName == "logo2") {
      this.setState({ activePage: "home" });
    }
    if (linkName == "home") {
      this.setState({ activePage: "home" });
    }
    if (linkName == "services") {
      this.setState({ activePage: "services" });
    }
    if (linkName == "rage-painting") {
      this.setState({ activePage: "rage-painting" });
    }
    if (linkName == "rage-room") {
      this.setState({ activePage: "rage-room" });
    }
    if (linkName == "smash-party") {
      this.setState({ activePage: "smash-party" });
    }
    if (linkName == "profile") {
      this.setState({ activePage: "profile" });
    }
    if (linkName == "auth") {
      this.setState({ activePage: "auth" });
    }
  };
  render() {
    let displayPage;
    let activePage = this.state.activePage;
    // console.log(activePage);
    if (activePage == "home") {
      displayPage = <Home onClick={this.navigation} />;
    }
    if (activePage == "services") {
      displayPage = <Services onClick={this.navigation} />;
    }
    if (activePage == "rage-painting") {
      displayPage = <RagePainting />;
    }
    if (activePage == "rage-room") {
      displayPage = <RageRoom />;
    }
    if (activePage == "smash-party") {
      displayPage = <SmashParty />;
    }
    if (activePage == "profile") {
      displayPage = <ProfilePage />;
    }
    if (activePage == "auth") {
      displayPage = <Auth />;
    }
    console.log(displayPage);
    return (
      <div>
        <Header2 onClick={this.navigation} />
        {displayPage}
        <Footer />

        {/* Auth start \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
        {/* <Auth /> */}
        {/* Auth end \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <ProfilePage /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
