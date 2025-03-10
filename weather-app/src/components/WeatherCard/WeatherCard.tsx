import { useContext, useEffect, useState } from 'react';
import './WeatherCard.css';
import useApiServices from '../../services/useApiServices';
import { WeatherContext } from '../../context/WeatherContext';
import SearchBar from '../SearchBar/SearchBar';
import UnitSwitch from '../UnitSwitch/UnitSwitch';
import ErrorModal from '../../Utils/ErrorModal';
import Apiloader from '../../Utils/Apiloader';

interface WeatherData {
  name: string;
  country: string;
  temperature: string;
  humidity: string;
  speed: string;
  condition: string;
  icon?: string;
}

const WeatherCard = () => {

  const { fetchWeatherDetails } = useApiServices();
  const { weatherData: { city, unit } } = useContext(WeatherContext);

  const [weather, setWeather] = useState<WeatherData>({
    name: "",
    country: "",
    temperature: "",
    humidity: "",
    speed: "",
    condition: ""
  });
  const [showErrorModal,setShowErrorModal] = useState(false)
  const [showLoader,setShowLoader] = useState(false)

  useEffect(() => {
    if(city && unit) {

      const getWeatherDetails = async (cityName: string, unit: string) => {
        setShowLoader(true)
        try {
          const response = await fetchWeatherDetails(cityName, unit);
          
          if(response.status === 200 && response.data) {
            
            const weatherData = response.data;
            const data = {
              name: weatherData.name ?? "",
              country: weatherData.sys.country ?? "",
              temperature: weatherData.main.temp ?? "",
              humidity: weatherData.main.humidity ?? '',
              speed: weatherData.wind.speed  ?? "",
              condition: weatherData.weather[0].main ?? "",
              icon: weatherData.weather[0].icon ?? ""
            }
            
            setWeather(data);
          } else {
            alert("Something went wrong!");
          }
        } catch (error) {
          setShowErrorModal(true)
        }
        finally{
          setShowLoader(false)
        }
      };
      
      getWeatherDetails(city, unit);
    }
  }, [city, unit]);

  return (<>
    <SearchBar/>
    <UnitSwitch/>
   {showLoader && <Apiloader/>}
    <div className="weather-card">
      <h2 className="weather-title">{weather.name}, {weather.country}</h2>
      <p className="temperature">{weather.temperature}°{unit === "metric" ? "C" : "F"}</p>
      <p className="weather-detail">Humidity: {weather.humidity}%</p>
      <p className="weather-detail">Wind: {weather.speed} {unit === "metric" ? "km/h" : "mph"}</p>
      <p className="weather-detail">Weather Condition: {weather.condition}</p>
      <img 
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
        alt={weather.condition} 
        className="weather-icon"
      />
    </div>
    {showErrorModal && 
    <ErrorModal  setShowErrorModal={setShowErrorModal} />
    }
   
  </>
  )
}

export default WeatherCard