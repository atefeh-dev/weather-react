/** @format */

import React, { useState } from "react";
const WeatherTemperature = ({ temp }) => {
  const [unit, setUnit] = useState("celsius");
  const [temperature, setTemperature] = useState(temp);

  const Fahrenheit = () => {
    return (temp * 9) / 5 + 32;
  };
  const celsiusOnClickHandle = (e) => {
    e.preventDefault();
    setUnit("celsius");
    setTemperature(temp);
  };
  const FahrenheitOnClickHandle = (e) => {
    e.preventDefault();
    setUnit("Fahrenheit");
    setTemperature(Fahrenheit());
  };
  switch (unit) {
    case "celsius":
      return (
        <div>
          <strong>{Math.round(temperature)}</strong>
          <span className="units ml-1">
            °C |{" "}
            <a href="/" onClick={(e) => FahrenheitOnClickHandle(e)}>
              °F
            </a>
          </span>
        </div>
      );
    case "Fahrenheit":
      return (
        <div>
          <strong>{Math.round(temperature)}</strong>
          <span className="units ml-1">
            <a href="/" onClick={(e) => celsiusOnClickHandle(e)}>
              °C
            </a>{" "}
            |°F
          </span>
        </div>
      );
    default:
      return <div> imposible! </div>;
  }
};

export default WeatherTemperature;
