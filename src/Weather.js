import React from "react";
import './Weather.css';

export default function Weather(props) {
  if (props.data) {
    return (
      <div>
    
        <ul>
          <li>Temperature: {Math.round(props.data.main.temp)}ºF</li>
          <li>Description: {props.data.weather[0].description}</li>
          <li>Humidity: {props.data.main.humidity}%</li>
          <li>Wind Speed: {props.data.wind.speed.toFixed(1)} mph</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </li>
        </ul>
      </div >
    );
  }
}