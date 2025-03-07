import { useContext, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const UnitSwitch = () => {

    const { weatherData: { unit }, setUnit } = useContext(WeatherContext);
    const [metric, setMetric] = useState("°C")

    const hanldeSwitch = () => {
        setUnit(unit === "metric" ? "imperial" : "metric");
        setMetric(unit === "metric" ? "°F" : "°C");
    }

    return (
        <div>
            <button onClick={hanldeSwitch}>{metric}</button>
        </div>
    );
}

export default UnitSwitch;