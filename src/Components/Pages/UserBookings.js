import React from "react";
import "../../assets/css/Profile.css";

const UserBookings = (props) => {
  return (
    <div>
      <div>
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
                    <h4 className="media-heading bookingBox">
                      {props.service}
                    </h4>
                    <p className="">
                      date:{props.datepiker} and time: {props.time}{" "}
                    </p>
                    <p>Phone Number: {props.phonenumber}</p>
                    <p>Email: {props.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookings;
