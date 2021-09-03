/** @format */

import React from "react";
import "../Style/WeatherInfo.css";
const WeatherInfo = () => {
  return (
    <div className="overview">
      <h1> NewYork</h1>
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Cloudy"
              width="75"
              className="float-left"
            />
            <strong>19</strong>
            <span className="units ml-1">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 40</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
