import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import DarkModeToggle from "./components/DarkMode";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
function App() {
	const [city, setCity] = useState("Delhi");
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState([]);
	const [unit, setUnit] = useState("metric");
	const [darkMode, setDarkMode] = useState(false);

	const fetchWeather = async (cityName:string) => {
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=32ace481cdc30f16760fa8ea026f834b
`,
			);
			setWeather(data);
      

			const forecastRes = await axios.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=32ace481cdc30f16760fa8ea026f834b`,
			);
			setForecast(forecastRes.data.list.filter((_:any, i:any) => i % 8 === 0));
		} catch (error) {
			alert("City not found!");
		}
	};
	const toggleUnit = () => {
		setUnit(unit === "metric" ? "imperial" : "metric");
	};

	const handleSearch = (e:any) => {
		console.log("This is my city");
		if (e.key === "Enter") fetchWeather(city);
	};

	useEffect(() => {
		fetchWeather(city);
	}, [unit]);

	return (
		<div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
			<h1 className="title">Weather Dashboard</h1>

			<input
				type="text"
				value={city}
				onChange={(e) => setCity(e.target.value)}
				onKeyDown={handleSearch}
				placeholder="Search City..."
				className="search-input"
			/>
			<button onClick={toggleUnit} className="unit-toggle">
				Switch to {unit === "metric" ? "°F" : "°C"}
			</button>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {weather && <WeatherCard weather={weather} unit={unit} />}
      {forecast.length > 0 && city !=='' && <Forecast forecast={forecast} unit={unit} />}
		</div>
	);
}

export default App;
