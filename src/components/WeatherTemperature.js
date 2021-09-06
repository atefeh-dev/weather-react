/** @format */

import React from "react";
const WeatherTemperature = ({ celsius }) => {
  return (
    <div>
      <strong>{Math.round(celsius)}</strong>
      <span className="units ml-1">
        <a href="/">°C</a> | <a href="/">°F</a>
      </span>
    </div>
  );
};

export default WeatherTemperature;
