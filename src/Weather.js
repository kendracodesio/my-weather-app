import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
// import Card from 'react-bootstrap/Card';
import './Weather.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function Weather(props) {
  // const caretIcon = <FontAwesomeIcon icon={faAngleUp} />;
  if (props.data) {
    return (
      <div className="container">
        <div className="card mt-3 mx-auto">
          <div className="card-header" role="tab" id="headingOne">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="mt-1 card-heading Weather-city">{props.data.name}</h3>
              </div>
              <div>
                <p className="mt-2 Weather-time"> as of 10:20pm PST</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <Container>
              <Row className="d-flex justify-content-between">
                <Col className="d-block">
                  <div className="Weather-temp d-flex">{Math.round(props.data.main.temp)}º
                    <div className="d-flex flex-column units ps-2 justify-content-center align-items-center"><a href="#/action-1"><strong>F</strong></a>⎯<a href="#/action-2">C</a></div></div>
                  <div className="Weather-description">{props.data.weather[0].description}</div>
                </Col>
                <Col className="d-block p-0">
                  <img className="p-0 d-block"
                    src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                    alt="weather icon"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}



/* <div>Humidity: {props.data.main.humidity}%</div>
<div>Wind Speed: {props.data.wind.speed.toFixed(1)} mph</div>  */


<Dropdown className="d-inline">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Units
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Imperial</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Metric</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>