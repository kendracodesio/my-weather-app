import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function Weather(props) {
  const caretIcon = <FontAwesomeIcon icon={faAngleUp} />;
  if (props.data) {
    return (
      <div className="container">
      <div className="card pt-3 mx-auto">
        <div className="card-header" role="tab" id="headingOne">
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="mt-1 accordion-heading">{props.data.name}</h3>
            </div>
            <div>
              <p> as of 10:20pm PST</p>
            </div>
          </div>
        </div>
        <div className="card-body">
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
        </div>
      </div >
      </div>
    );
  }
}



