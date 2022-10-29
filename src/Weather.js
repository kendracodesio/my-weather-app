import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forecast from "./Forecast";
import FormattedTime from "./FormattedTime";
import './Weather.css';

export default function Weather(props) {

  if(props.data) {
    const countryCode = props.data.sys.country;
    const regionNames = new Intl.DisplayNames(
      ['en'], { type: 'region' }
    );

    const countryName = (regionNames.of(countryCode));


    return (
      
      <Container className="Weather-container">
        <div className="card mt-5 mx-auto shadow">
          <div className="card-header">
            <div className="d-flex justify-content-left align-items-center Weather-header pt-2 ms-2">
              <div>
                <h3> <span className="Weather-city">{props.data.name},</span> <span className="Weather-country">{countryName}</span></h3>
              </div>
              <div>
                <div className="ms-3 Weather-time">
                  <FormattedTime timezone={props.data.timezone} />
                </div>
              </div>
            </div>
          </div>
            <div className="card-body">
              <Row className="pb-0">
                <Col className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-left align-items-center">
                    <div>
                      <div className="Weather-temp">{Math.round(props.data.main.temp)}º</div>
                    </div>
                    <div>
                      <div>
                        <div className="d-flex flex-column units justify-content-center align-items-center ps-2">
                          <strong>F</strong>
                          {/* ⎯<a href="/" >C</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <div>
                        <img className="Weather-icon"
                          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                          alt="weather icon" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Row className="pt-0 pb-3 Weather-row">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <span className="Weather-temp-today-hi"><strong>↑{Math.round(props.data.main.temp_max)}º</strong></span>  <span className="Weather-temp-today-lo">↓{Math.round(props.data.main.temp_min)}º</span>
                    </div>
                    <div>
                      <div className="Weather-description">{props.data.weather[0].description}</div>
                    </div>
                  </div>
                </Row>
              </Row>
              <Row>
                <Col className="pt-3">
                  <ul>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Feels Like:
                        </div>
                        <div>
                          {Math.round(props.data.main.feels_like)}ºF
                        </div>
                      </div>
                    </li>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Wind Speed:
                        </div>
                        <div>
                          {props.data.wind.speed.toFixed(1)} mph
                        </div>
                      </div>
                    </li>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Humidity:
                        </div>
                        <div>
                          {props.data.main.humidity}%
                        </div>
                      </div>
                    </li>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Pressure:
                        </div>
                        <div>
                          {props.data.main.pressure} hPa
                        </div>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
        </div>

        <Forecast />
       
        <footer className="mx-auto d-flex pb-3 pt-4">
          <div>This project was coded by <a href="https://astonishing-gnome-05de92.netlify.app/" target="_blank" rel="noreferrer">Kendra Reynolds</a> and made <a href="https://github.com/kendracodesio/my-weather-app.git" target="_blank" rel="noreferrer">open source on GitHub</a></div>
        </footer>
   
      </Container>
        
    );

  }

}



