import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Forecast from "./components/Forecast/Forecast";
import DashboardLayout from "./layouts/DashboardLayout";
import { WeatherContextProvider } from "./context/WeatherContext";
function App() {
	return <>
		<WeatherContextProvider>
			<DashboardLayout>
				<div style={{ gridArea: "heading", textAlign: "center" }}>
					<h2>Weather App</h2>
				</div>
				<div className="toggle">
					<DarkModeToggle />
				</div>
				<div className="main">
					<WeatherCard />
				</div>
				<div className="forecast">
					<Forecast />
				</div>
			</DashboardLayout>
		</WeatherContextProvider>
	</>
}

export default App;
