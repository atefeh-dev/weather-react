/** @format */

import React, { useEffect } from "react";

import "../Style/WeatherInfo.css";

const WeatherInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="overview">
      <h1>{data.city}</h1>
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>{data.description}</li>
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
            <strong>{Math.round(data.temperature)}</strong>
            <span className="units ml-1">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: {data.humidity}</li>
            <li>Wind: {data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
