import React from 'react'

function WeatherCard({weather,unit,weatherIcon}:{weather:any,unit:any,weatherIcon:any}) {

    const weatherCondition = weather.weather.find((item:any)=>item.main).main

   
    
  return (


    <div className="weather-card">
      <h2 className="weather-title">{weather.name}, {weather.sys.country}</h2>
      <p className="temperature">{weather.main.temp}°{unit === "metric" ? "C" : "F"}</p>
      <p className="weather-detail">Humidity: {weather.main.humidity}%</p>
      <p className="weather-detail">Wind: {weather.wind.speed} {unit === "metric" ? "km/h" : "mph"}</p>
      <p className="weather-detail">Weather Condition: {weatherCondition}</p>
      <img 
    src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} 
    alt={weather.weather[0].description} 
    className="weather-icon"
  />


    </div>
  )
}

export default WeatherCard