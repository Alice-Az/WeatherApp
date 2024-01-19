import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar/TopBar';
import WeatherOverview from './components/WeatherContainers/WeatherOverview/WeatherOverview';
import WeatherDetails from './components/WeatherContainers/WeatherDetails/WeatherDetails';
import { GetWeather, GetLocations, GetForecastHourly, GetForecastDaily } from './services/WeatherAPI';


const App = () => 
{

  const [location, setLocation] = useState({LocalizedName: 'Stockholm'});

  const [weather, setWeather] = useState();

  const [forecastHr, setForecastHr] = useState();

  const [forecastDay, setForecastDay] = useState();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    GetAllWeather('314929');
  },[]);
  
  const UpdateWeather = (location) => {
    setLocation(location);
    GetAllWeather(location.Key);
  };

  const GetAllWeather = async (locationKey) => {
    setLoading(true);
    const weatherPromise = GetWeather(locationKey);
    const forecastHrPromise = GetForecastHourly(locationKey);
    const forecastDayPromise = GetForecastDaily(locationKey);

    const weatherData = await weatherPromise;
    const forecastHrData = await forecastHrPromise;
    const forecastDayData = await forecastDayPromise;

    setWeather(weatherData);
    setForecastHr(forecastHrData);
    setForecastDay(forecastDayData);
    setLoading(false);
  };

  return (
    <>
      <TopBar onClick={UpdateWeather}/>
      <WeatherOverview location={location} weather={weather} forecastDay={forecastDay} isLoading={isLoading}/>
      <WeatherDetails locationKey={location.Key} weather={weather} forecastDay={forecastDay} forecastHr={forecastHr} isLoading={isLoading}/>
    </>
  )
}

export default App
