/** @format */

import React, { useState } from "react";
import weatherApi from "../Apis/weatherApi";

import "../Style/Search.css";
import WeatherInfo from "./WeatherInfo";
const Search = () => {
  const [term, setTerm] = useState("paris");
  const [weatherData, setWeatherData] = useState({ ready: false });
  const searchWeather = () => {
    weatherApi
      .get("/weather", {
        params: {
          q: term,
        },
      })
      .then((res) => {
        handleResponse(res.data);
        console.log(res.data);
      });
  };
  const handleResponse = (response) => {
    setWeatherData({
      ready: true,
      coordinates: response.coord,
      temperature: response.main.temp,
      humidity: response.main.humidity,
      date: new Date(response.dt * 1000),
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      wind: response.wind.speed,
      city: response.name,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    searchWeather();
  };
  return (
    <div>
      <form className="mb-3" onSubmit={onFormSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="type a city ..."
              autoFocus="on"
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100 "
              value="Search"
            />
          </div>
        </div>
      </form>
      <WeatherInfo />
    </div>
  );
};
export default Search;
