import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
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
      <Container>
        <div className="card mt-5 mx-auto shadow">
          <div className="card-header">
            <div className="d-flex justify-content-left align-items-center pt-2 ms-2">
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
                          <a href="#/action-1"><strong>F</strong></a>⎯<a href="#/action-2">C</a>
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
        <Accordion className="mx-auto p-0 shadow" defaultActiveKey="0">
          <Accordion.Item className="pt-0" eventKey="0">
            <Accordion.Header className="p-0">Five Day Forecast</Accordion.Header>
            <Accordion.Body >
              <Row>
                <Col>
                  <ul>
                    <li className="Weather-forecast">
                      <div className="d-flex justify-content-between">
                        <div>
                          Saturday 🌤 
                        </div>
                        <div>
                          <strong>67º</strong> | 56º
                        </div>
                      </div>
                    </li>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Sunday ☀️
                        </div>
                        <div>
                          <strong>69º</strong> | 50º
                        </div>
                      </div>
                    </li>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Monday ☀️
                        </div>
                        <div>
                          <strong>70º</strong> | 63º
                        </div>
                      </div>
                    </li>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Tuesday 🌤
                        </div>
                        <div>
                          <strong>60º</strong> | 53º
                        </div>
                      </div>
                    </li>
                    <li className="Weather-details-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          Wednesday ☀️
                        </div>
                        <div>
                          <strong>70º</strong> | 63º
                        </div>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
        <footer className="pt-5 pb-3 text-center">
          <div>An <a href="https://github.com/kendracodesio/my-weather-app.git" target="_blank" rel="noreferrer">open-source project </a> 
          by Kendra Reynolds</div>
        </footer>
      </Container>
    );

  }

}



