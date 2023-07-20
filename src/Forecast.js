import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


export default function Forecast(props) {

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (props.forecastData) {


    return (
      <Accordion className="mx-auto p-0 shadow" defaultActiveKey="0">
        <Accordion.Item className="pt-0" eventKey="0">
          <Accordion.Header className="p-0">Five Day Forecast</Accordion.Header>
          <Accordion.Body >
            <Row>
              <Col>
                <ul className="Weather-forecast">
                  {props.forecastData.slice(1, 6).map((forecast, index) => {
                    const date = new Date(forecast.dt * 1000);
                    const day = days[date.getDay()];
                    const tempMax = Math.round(forecast.temp.max);
                    const tempMin = Math.round(forecast.temp.min);
                    const iconCode = forecast.weather[0].icon

                    return (
                      <li key={index} className="Weather-details-item">
                        <div className="d-flex justify-content-between">
                          <div>
                            {day}  <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="weather icon" /> 
                          </div>
                          <div>
                            <strong>{tempMax}º</strong> | {tempMin}º
                          </div>
                        </div>
                      </li>
                    );
                      })}
                </ul>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

    );
  }
}
