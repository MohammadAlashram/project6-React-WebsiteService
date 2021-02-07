import React from 'react';
import '../../assets/css/Weather.css'


const Weather = (props) => { 
     return( 
        <div className={""}>
        {props.children}
        <div className="containerWeather">
          <div className="weather-side" id="weatherBg" style={{backgroundImage: `url(${props.weatherBg})`}} >
            <div className="weather-gradient" style={{backgroundImage: `url(${props.weatherBg})`}}/>
            <div className="date-container">
              <h2 className="date-dayname">{props.country}</h2><span className="location">{props.city}</span><span id="newDate"className="date-day"></span><i className="location-icon" data-feather="map-pin" />
            </div>
            <div className="weather-container"><i className="weather-icon" data-feather="sun" />
              <h1 className="weather-temp">{props.tempreature}°C</h1>
              <h3 className="weather-desc">{props.weatherStatus}</h3>
            </div>
          </div>
          <div className="info-side">
            <div className="today-info-container">
              <div className="today-info">
                <div className="precipitation"> <span className="title1">Country</span><span className="value">{props.country}</span>
                  <div className="clear" />
                </div>
                <div className="humidity"> <span className="title1">City</span><span className="value">{props.city}</span>
                  <div className="clear" />
                </div>
                <div className="humidity"> <span className="title1">Tempreature</span><span className="value">{props.tempreature}°C</span>
                  <div className="clear" />
                </div>
                <div className="humidity"> <span className="title1">Humidity</span><span className="value"> {props.humidity} </span>
                  <div className="clear" />
                </div>
                <div className="wind"> <span className="title1">Wind</span><span className="value">6.3 km/h</span>
                  <div className="clear" />
                </div>
              </div>
            </div>
            <div className="week-container">
              <ul className="week-list">
                <li className="active"><i className="day-icon" data-feather="sun" /><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
                <li><i className="day-icon" data-feather="cloud" /><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
                <li><i className="day-icon" data-feather="cloud-snow" /><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
                <li><i className="day-icon" data-feather="cloud-rain" /><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
                <div className="clear" />
              </ul>
            </div>
          </div>
        </div>
      </div>
     )
}

export default Weather