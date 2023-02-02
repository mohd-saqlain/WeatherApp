import React, { useEffect, useState } from "react";
import "./style.css";
 import Weathercard  from "./weatherCard";

const Temp = () => {
  const [searchValue, setSearchvalue] = useState("kanpur");
  const [tempInfo,setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      const id = "b6ee393aad9a9576a732a36b8f1cc803";
      let url = `https:api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${id}`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { sunrise, sunset } = data.sys;
      const info = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        sunrise,
        sunset,
      };
      console.log(info)
      setTempInfo(info);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
 
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            id="search"
            className="searchTerm"
            defaultValue={searchValue}
            onChange={(e) => setSearchvalue(e.target.value)}
          />
          <button
            type="submit"
            className="searchButton"
            onClick={() => getWeatherInfo()}
          >
            Search
          </button>
        </div>
      </div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
       <Weathercard tempInfo={tempInfo} />
      </article>
    </>
  );
};

export default Temp;
