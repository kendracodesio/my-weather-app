import React from "react";
import "./Header.css";

export default function FormattedDate(props) {

  if (props.data) {
  let timezone = props.data.timezone / 3600;

  function formatDate(timestamp) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "October", "Nov", "Dec"];
    return `${days[timestamp.getDay()]}, ${months[timestamp.getMonth()]} ${timestamp.getDate()}, ${timestamp.getFullYear()}`;
  }

  function displayDateAtCity(timezone) {
    let date = new Date();
    let usersLocalTime = date.getTime();
    let currentOffset = date.getTimezoneOffset() * 60000;
    let utc = usersLocalTime + currentOffset;
    let citysLocalDate = new Date(utc + 3600000 * timezone);
    return formatDate(citysLocalDate);
  }

    return (
      <h2 className="Header-date"> {displayDateAtCity(timezone)}</h2>

    )
  }
}









