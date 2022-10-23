import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faMagnifyingGlass, faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import Weather from "./Weather";
import './Header.css';


export default function Header() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const weatherIcon = <FontAwesomeIcon icon={faCloudSunRain} />;

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0ced1399882a9c58450ec5c738defd7a";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getData);
  }

  function getData(response) {
    setData(response.data);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <Container fluid className="Header-container">
        <Row className="Header-head ps-5 shadow">
          <Col xs={12} md={3}  className="Header-col">
            <div className="Header-logo-wrapper">
              <div className="text-left Header-logo-box">
                <h1>{weatherIcon}<br />TruWeather</h1>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="Header-col">
            <Form className="Header-form" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-md-center">
                <Button id="getLocation" className="me-1 Header-location-btn">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </Button>
                <Form.Control
                  onChange={getCity}
                  type="search"
                  className="Header-input"
                  placeholder="Search City"
                  autoComplete="off"
                  autoFocus={true}
                />
                <Button type="submit" value="Search" className="ms-1 Header-search-btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </div>

            </Form>
          </Col>
          <Col xs={12} md={3}>
            <div className="text-right flex-column d-md-flex justify-content-md-left">
              <div className="Header-date-container pe-">
                <h2 className="Header-date">Friday, October 21, 2022</h2>
              </div>
            </div>
          </Col>
        </Row>
          <Weather data={data} />
      </Container>
    </div>
  );
}
