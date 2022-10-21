import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1e443f6da9b633764beaeb76bb472402";
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
      <h1>Weather App</h1>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <Form.Control
            onChange={getCity}
            className ="w-50"
            type="search"
            placeholder="enter a city..."
            autoComplete="off"
            autoFocus={true}
          />
          <Button type="submit" value="Search">
            Search
          </Button>
        </div>
      </Form>
    <div className="text-left">
      <Weather data={data} />
    </div>
    </div>
  );
}
