import React from "react";
import "./Header.css";

export default function FormattedDate(props) {
  

  function displayFormattedDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "October", "Nov", "Dec"];
    return (`${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);
  }

  if (props.data) {

    return (
      <h2 className="Header-date"> {displayFormattedDate(props.data.dt)}</h2>

    )
  }
}








