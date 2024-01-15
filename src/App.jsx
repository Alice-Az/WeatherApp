import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar/TopBar';
import WeatherOverview from './components/WeatherContainers/WeatherOverview/WeatherOverview';
import WeatherDetails from './components/WeatherContainers/WeatherDetails/WeatherDetails';

function App() {

  const location = 'San Francisco, CA';
  const temperature = '15 °C';

  return (
    <>
      <TopBar/>
      <WeatherOverview location={location} temperature={temperature}/>
      <WeatherDetails/>
    </>
  )
}

export default App
