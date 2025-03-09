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
				<div style={{ gridArea: "heading", textAlign: "left" }}>
					<h2 className="title">Weather App</h2>
				</div>
				<div style={{ gridArea: "toggle", display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
					<DarkModeToggle />
				</div>
				<div style={{ gridArea: "main" }}>
					<WeatherCard />
				</div>
				<div style={{ gridArea: "forecast" }}>
					<Forecast />
				</div>
			</DashboardLayout>
		</WeatherContextProvider>
	</>
}

export default App;
