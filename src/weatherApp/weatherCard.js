import React, { useState } from "react";
const Weathercard =  ( {tempInfo} ) => {
  const {temp,humidity,pressure,weatherMood,name,speed,sunrise,sunset}= tempInfo;
  const [realTime,setRealTime]= useState(new Date().toLocaleString())
 
 setInterval(()=>{
    setRealTime(new Date().toLocaleString())
    
  },1000)

  let sec= sunset;
  let date = new Date(sec * 1000)
  let timeStr = `${date.getHours()}:${date.getMinutes()}`
 
  return(
    <>
  <div className="weatherInfo">
  <div className="temperature">
    <span>{temp}&deg;</span>
  </div>
  <div className="description">
    <div className="weatherCondition">Sunny</div>
    <div className="place">{name}, India</div>
  </div>
</div>
<div className="date">{realTime}</div>
<div className="extra-temp">
<div className="temp-info-minmax">
<div className="two-sided-section">
<p>
  <i className={"wi wi-sunset"}></i>
</p>
<p className="extra-info-leftside">
  {timeStr} PM <br />
  Sunset
</p>
</div>

<div className="two-sided-section">
<p>
  <i className={"wi wi-humidity"}></i>
</p>
<p className="extra-info-leftside">
  {humidity} <br />
  Humidity
</p>
</div>
</div>

<div className="weather-extra-info">
<div className="two-sided-section">
<p>
  <i className={`wi wi-${weatherMood}`}></i>
</p>
<p className="extra-info-leftside">
  {pressure} <br />
  Pressure
</p>
</div>

<div className="two-sided-section">
<p>
  <i className={"wi wi-strong-wind"}></i>
</p>
<p className="extra-info-leftside">
  {speed} <br />
  Speed
</p>
</div>
</div>
</div>
</>
  )
};

export default Weathercard;
