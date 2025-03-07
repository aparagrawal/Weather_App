import axios from 'axios';

const useApiServices = () => {

    const apiKey = import.meta.env.VITE_APP_API_KEY;

    const fetchWeatherDetails = async (cityName:string, unit:string) => {
        return  await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`)
    };

    const fetachForecastDetails = async (cityName:string, unit:string) => {
        return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=${apiKey}`);
    }
    
    return {
        fetchWeatherDetails,
        fetachForecastDetails
    };
}

export default useApiServices;