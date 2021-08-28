import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";

const App = () => {
  const [query, setQuery] = useState("Delhi");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchWeather(query);
    console.log(data);
    setWeather(data);
    setQuery("");
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="serch . . . "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      <button type="submit" className="search-btn" onClick={handleSubmit}>
        Search
      </button>
      {weather.main && (
        <div className="city-card">
          <h2>
            <span>{weather.name}</span>
            <sup className="location">{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className="desc">{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
