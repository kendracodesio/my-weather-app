import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faMagnifyingGlass, faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import Weather from "./Weather";
import FormattedDate from "./FormattedDate";
import './Header.css';

const apiKey = "0ced1399882a9c58450ec5c738defd7a";
const units = "imperial";


export default function Header(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ ready: false });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getApiData = () => {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(getData);
    }

    getApiData();
  }, [props.defaultCity]);


  const weatherIcon = <FontAwesomeIcon icon={faCloudSunRain} />;


  function getApiDataByCity(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getData);

  }

  function getApiDataByCityStateCountry(cityName, stateAbbrOrCountry) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateAbbrOrCountry},US&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.includes(",")) {
      let cityArray = inputValue.split(",");
      getApiDataByCityStateCountry(cityArray[0], cityArray[1]);
    } else {
      getApiDataByCity(inputValue);
    }
    setCity(inputValue);
    setInputValue('');
  };

  function getData(response) {
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;

    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then((onecallResponse) => {
      setData({
        ready: true,
        cityName: response.data.name,
        country: response.data.sys.country,
        timezone: response.data.timezone,
        temperature: response.data.main.temp,
        maxTemp: onecallResponse.data.daily[0].temp.max,
        minTemp: onecallResponse.data.daily[0].temp.min,
        feelsLike: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        pressure: response.data.main.pressure,
        latitude: lat,
        longitude: lon,
        dailyData: onecallResponse.data.daily
      });

    });
  }

  function handleGeolocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      alert("Geolocation is not supported by this broswer.");
    }
  }

  function handleSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getData);

  }

  function handleError(error) {
    console.error("Error obtaining geolocation", error);
  }


  if ((city === props.defaultCity) && !(data.ready)) {
    getApiDataByCity(city);

  }

  return (
    <div>
      <Container fluid className="Header-container">
        <Row className="Header-head ps-5 shadow">
          <Col xs={12} md={3} className="Header-col">
            <div className="Header-logo-wrapper">
              <div className="text-left Header-logo-box">
                <h1>{weatherIcon}<br />TruWeather</h1>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="Header-col">
            <Form className="Header-form" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-md-center">
                <Button id="getLocation" className="me-1 Header-location-btn" onClick={handleGeolocationClick}>
                  <FontAwesomeIcon icon={faLocationArrow} />
                </Button>
                <Form.Control
                  name="city"
                  onChange={event => setInputValue(event.target.value)}
                  value={inputValue}
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
              <div className="Header-date-container">
                <FormattedDate data={data} />
              </div>
            </div>
          </Col>
        </Row>
        <Weather data={data} />
      </Container>
    </div>
  );
}


