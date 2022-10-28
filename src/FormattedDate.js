import React from "react";
import "./Header.css";

export default function FormattedDate(props) {

  if (props.data) {

  const timezone = props.data.timezone / 3600;

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

  function getCitysDate(timezone) {
    let date = new Date();
    let usersLocalTime = date.getTime();
    let currentOffset = date.getTimezoneOffset() * 60000;
    let utc = usersLocalTime + currentOffset;
    let citysLocalDate = new Date(utc + 3600000 * timezone);
    return formatDate(citysLocalDate);

  }


  // function displayDay(timestamp) {
  //   let date = new Date(timestamp * 1000);
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "October", "Nov", "Dec"];
  //   return (`${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);
  // }





    return (
      <h2 className="Header-date"> {getCitysDate(timezone)}</h2>

    )
  }
}








