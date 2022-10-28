import React from "react";



export default function FormattedTime(props) {

  let timezone = props.timezone / 3600;

  function formatTimezone(timezone) {
    if (timezone > 0) {
      return (`+${timezone}`);
    } else {
      return (`${timezone}`);
    }
  }

  function formatDate(newDate) {
    let hr = newDate.getHours();
    let min = newDate.getMinutes();
    let time = convertTimeAmPm(hr, min);
    return `As of ${time} (GMT${formatTimezone(timezone)})`
  }

  function getTime(timezone) {
    let date = new Date();
    let usersLocalTime = date.getTime();
    let currentOffset = date.getTimezoneOffset() * 60000;
    let utc = usersLocalTime + currentOffset;
    console.log(timezone);
    let citysLocalTime = new Date(utc + 3600000 * timezone);
    return formatDate(citysLocalTime);
  }

  function convertTimeAmPm(hours, minutes) {
    let amOrPm = "";
    if (hours >= 12) {
      amOrPm = "PM";
    } else {
      amOrPm = "AM";
    }
    hours = ((hours + 11) % 12) + 1;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes} ${amOrPm}`
  }


  return(
    <div>
      {getTime(timezone)}
    </div>
  );
}