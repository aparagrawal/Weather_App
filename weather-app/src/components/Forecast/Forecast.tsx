import { useContext, useEffect, useState } from 'react';
import './Forecast.css';
import useApiServices from '../../services/useApiServices';
import { WeatherContext } from '../../context/WeatherContext';
import ErrorModal from '../../Utils/ErrorModal';
import Apiloader from '../../Utils/Apiloader';

const Forecast = () => {

  const { fetachForecastDetails } = useApiServices();
  const { weatherData: { city, unit } } = useContext(WeatherContext);

  const [forecast, setForecast] = useState<any[]>([]);
  const [showErrorModal,setShowErrorModal] = useState(false)
  const [showLoader,setShowLoader] = useState(false)



  useEffect(() => {
    if(city && unit) {
      const getForecastDetails = async (cityName:string, unit: string) => {
        setShowLoader(true)
        try {
          const response = await fetachForecastDetails(cityName, unit);

          if(response.status === 200 && response.data) {
            setForecast(response.data.list.filter((_:any, i:number) => i % 8 === 0));
          } else {
           setShowErrorModal(true)
          }

        } catch (error) {
          setShowErrorModal(true)
        }
        finally{
          setShowLoader(false)
        }
      };

      getForecastDetails(city, unit);
    }
  }, [city, unit]);

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
      {showErrorModal && (
        <ErrorModal setShowErrorModal={setShowErrorModal}/>
      )}
       {showLoader && <Apiloader/>}
    </div>
   
  );
};

export default Forecast;
