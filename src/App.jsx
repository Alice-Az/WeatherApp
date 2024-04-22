import { useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import WeatherOverview from "./components/WeatherContainers/WeatherOverview/WeatherOverview";
import WeatherDetails from "./components/WeatherContainers/WeatherDetails/WeatherDetails";
import {
    GetWeather,
    GetLocations,
    GetForecastHourly,
    GetForecastDaily,
    GetGeolocationResult,
} from "./services/WeatherAPI";
import NoCallsOverlay from "./components/NoCallsOverlay/NoCallsOverlay";

const App = () => {
    const [location, setLocation] = useState();

    const [weather, setWeather] = useState();

    const [forecastHr, setForecastHr] = useState();

    const [forecastDay, setForecastDay] = useState();

    const [isLoading, setLoading] = useState(true);

    const [isCallsReached, setIsCallsReached] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                let startLocation = await GetGeolocationResult(
                    position.coords.latitude,
                    position.coords.longitude
                );
                if (startLocation === null) {
                    setIsCallsReached(true);
                } else {
                    setLocation(startLocation);
                    await GetAllWeather(startLocation.Key);
                }
            },
            async () => {
                let startLocation = await GetGeolocationResult(
                    "59.325",
                    "18.05"
                );
                if (startLocation === null) {
                    setIsCallsReached(true);
                } else {
                    setLocation(startLocation);
                    await GetAllWeather(startLocation.Key);
                }
            }
        );
    }, []);

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
            <NoCallsOverlay isCallsReached={isCallsReached} />
            {!isCallsReached && (
                <>
                    <TopBar onClick={UpdateWeather} />
                    <WeatherOverview
                        location={location}
                        weather={weather}
                        forecastDay={forecastDay}
                        isLoading={isLoading}
                    />
                    <WeatherDetails
                        weather={weather}
                        forecastDay={forecastDay}
                        forecastHr={forecastHr}
                        isLoading={isLoading}
                    />
                </>
            )}
        </>
    );
};

export default App;
