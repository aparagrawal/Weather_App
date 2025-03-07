import React from "react";

const Forecast = ({ forecast, unit }:{forecast:any,unit:string}) => {
  return (
    <div className="forecast-container">
      <h2 className="forecast-title">5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day:any, index:any) => (
          <div key={index} className="forecast-card">
            <p className="forecast-date">{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p className="forecast-temp">High: {day.main.temp_max}°{unit === "metric" ? "C" : "F"}</p>
            <p className="forecast-temp">Low: {day.main.temp_min}°{unit === "metric" ? "C" : "F"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
