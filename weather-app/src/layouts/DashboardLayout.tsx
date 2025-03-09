import { useContext } from 'react';
import './DashboardLayout.css';
import { WeatherContext } from '../context/WeatherContext';
const DashboardLayout = ({ children }: any) => {

  const { weatherData: { mode } } = useContext(WeatherContext);
  return (
    <>
      <div 
       className={`dashboard-layout app-container ${mode !== "light" ? 'dark-mode' : ''}`}
      >
        {children}
      </div>
    </>
  );
}

export default DashboardLayout;