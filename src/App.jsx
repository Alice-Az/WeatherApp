import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar/TopBar';
import WeatherOverview from './components/WeatherContainers/WeatherOverview/WeatherOverview';
import WeatherDetails from './components/WeatherContainers/WeatherDetails/WeatherDetails';
import { GetWeather, GetLocations } from './services/WeatherAPI';

function App() {

  const temperature = '15 °C';

  const [location, setLocation] = useState('Stockholm');

  return (
    <>
      {/* <TopBar onClick={setLocation}/> */}
      <TopBar onClick={setLocation}/>
      <WeatherOverview location={location} temperature={temperature}/>
      <WeatherDetails/>
    </>
  )
}

export default App
