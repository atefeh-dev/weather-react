/** @format */

import React, { useEffect } from "react";
import WeatherIcon from "./WeatherIcon";

import "../Style/WeatherInfo.css";

const WeatherInfo = ({ data }) => {
  useEffect(() => {
    console.log("This will run after 1 second!");
    return () => {
      console.log("i'm  clear");
    };
  });

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
            <div className="float-left">
              <WeatherIcon code={data.icon} size={52} />
            </div>

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
