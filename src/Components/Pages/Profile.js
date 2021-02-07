// 1 - import react and reactDom
import React from "react";
// import ReactDOM from "react-dom";
import "../../assets/css/Profile.css";
// import "../../assets/css/Header2.css"

// 2 - Create React Components //App Function Component

function All(props) {
  return <div>{props.children}</div>;
}
function Booking(props) {
  return (
    <div>
      <h2 className={"newPadding font"}>YOUR BOOKINGS</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-md">
              <div className="media">
                <div className="media-body">
                  <div className="col-4">
                    <a className="pull-left imgBox" href="#">
                      <img
                        className="media-object imgBox"
                        src="http://placehold.it/120"
                      />
                    </a>
                  </div>
                  <a href="#" className="btn btn-xs btn-default pull-right">
                    <span className="glyphicon glyphicon glyphicon-remove" />
                  </a>
                  <div className="">
                    <h4 className="media-heading bookingBox">Service Name</h4>
                    <p className="">Date and time 4/2/2021 3:30 AM</p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vitae quisquam laborum nihil voluptatibus delectus iure
                      debitis deleniti illo. Distinctio maiores nihil sit
                      libero. Neque minus, repudiandae exercitationem enim sint
                      eum facere unde omnis inventore et eos doloremque
                      doloribus id nihil!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Profile(props) {
  return <Booking />;
}

// ReactDOM.render(<Profile />, document.getElementById("root"));

export default Profile;
