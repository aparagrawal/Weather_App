import { useContext } from 'react';
import './DarkModeToggle.css';
import { WeatherContext } from '../../context/WeatherContext';

const DarkModeToggle = () => {

  const { weatherData: { mode }, setMode } = useContext(WeatherContext);

  return (
    <button
      onClick={() => setMode()}
      className="btn dark-mode-btn"
    >
      {mode === 'light' ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
