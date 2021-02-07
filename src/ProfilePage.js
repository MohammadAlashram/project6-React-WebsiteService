import React, { Component } from "react";
import UserBookings from "./Components/Pages/UserBookings";
import Weather from "./Components/Api/Weather";
const Api_key = "a5ac4b89f08c79017573f0cf0e683f00";

class ProfilePage extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    weatherStatus: "",
    weatherBg: "",
    error: "",
  };
  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    // const city = e.target.city.value;
    // const country = e.target.country.value;

    const city = "Amman";
    const country = "Jordan";
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`
    );
    const data = await api.json();
    console.log(data);

    //  NEW CODE FOR WEATHER STATUS
    var tempreature = Math.round(data.main.temp - 273.15);
    // for test
    //  tempreature = 45;
    if (tempreature >= -20 && tempreature <= 3) {
      var weatherStatus = "Frozen";
      var weatherBg =
        "https://images.pexels.com/photos/3690511/pexels-photo-3690511.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    } else if (tempreature >= 4 && tempreature <= 12) {
      weatherStatus = "Cold";
      // document.getElementById("weatherBg").style.backgroundImage= "url('https://images.pexels.com/photos/4947146/pexels-photo-4947146.jpeg?cs=srgb&dl=pexels-maria-orlova-4947146.jpg&fm=jpg')";
      weatherBg =
        "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    } else if (tempreature >= 13 && tempreature <= 22) {
      weatherStatus = "Cool";
      weatherBg =
        "https://images.pexels.com/photos/4710693/pexels-photo-4710693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    } else if (tempreature >= 23 && tempreature <= 33) {
      weatherStatus = "Hot";
      weatherBg =
        "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    } else if (tempreature >= 34 && tempreature <= 50) {
      weatherStatus = "Chicken Dinner";
      weatherBg =
        "https://images.pexels.com/photos/1151282/pexels-photo-1151282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
      document.getElementById("weatherBg").style.color = "black";
    }
    //  NEW CODE FOR WEATHER STATUS

    if (city && country) {
      this.setState({
        tempreature: Math.round(data.main.temp - 273.15),
        // tempreature: 45,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        weatherStatus: weatherStatus,
        weatherBg: weatherBg,
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        weatherStatus: "",
        weatherBg: "",
        error: "Please Enter Data",
      });
    }
  };
  render() {
    let bookings;
    let storage;
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (localStorage.getItem("books")) {
      storage = JSON.parse(localStorage.getItem("books"));
      bookings = (
        <div>
          <h2 className="newPadding font">YOUR BOOKINGS</h2>
          <div className="container">
            {storage.map((booking) => {
              return (
                <UserBookings
                  service={booking.service}
                  datepiker={booking.datepiker}
                  time={booking.time}
                  phonenumber={booking.phonenumber}
                  email={booking.email}
                  firstname={booking.firstname}
                  lastname={booking.lastname}
                />
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className={"background"}>
          <h1 className="title">Hello {loggedUser.firstname}</h1>
        </div>
        {bookings}
        <div className="wrapper">
          <div className="">
            <Weather
              tempreature={this.state.tempreature}
              city={this.state.city}
              country={this.state.country}
              weatherStatus={this.state.weatherStatus}
              weatherBg={this.state.weatherBg}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
