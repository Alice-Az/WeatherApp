import "./WeatherOverview.css";
// import WeatherIcon from '../../icons/weatherIcon/weatherIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

const WeatherOverview = (props) => {
    const [isSaved, setlocationSave] = useState(false);

    useEffect(() => {
        setlocationSave(localStorage.getItem(props.location?.Key) !== null);
    });

    const SaveLocation = () => {
        if (props.location !== null) {
            localStorage.setItem(
                `${props.location?.Key}`,
                `${JSON.stringify(props.location)}`
            );
            setlocationSave(true);
        }
    };

    const UnSaveLocation = () => {
        localStorage.removeItem(`${props.location?.Key}`);
        setlocationSave(false);
    };

    localStorage.getItem(props.location?.Key);
    return (
        <>
            <div className="weather-overview">
                <div className="weather-data">
                    <div className="location">
                        <p className="location-name">
                            {props.location?.LocalizedName}
                        </p>
                        {!isSaved && !props.isLoading && (
                            <button
                                className="save-location"
                                onClick={SaveLocation}
                            >
                                <FontAwesomeIcon
                                    className="save-location-icon"
                                    icon={starEmpty}
                                />
                            </button>
                        )}
                        {isSaved && !props.isLoading && (
                            <button
                                className="save-location"
                                onClick={UnSaveLocation}
                            >
                                <FontAwesomeIcon
                                    className="save-location-icon"
                                    icon={starFull}
                                />
                            </button>
                        )}
                    </div>
                    <p className="region-country">
                        {props.location?.Country}{" "}
                        {props.location?.AdministrativeArea}
                    </p>
                    <div className="overview-temp">
                        <p className="overview-temp-avg">
                            {props.isLoading
                                ? "Loading..."
                                : props.weather.Temperature}
                        </p>
                        <div className="overview-temp-minmax">
                            <p className="overview-temp-min">
                                <span className="overview-temp-min-text">
                                    Min:{" "}
                                </span>
                                {props.isLoading
                                    ? ""
                                    : props.forecastDay[0].TemperatureMin}
                                &ensp;
                                <span className="overview-temp-small">
                                    to&ensp;
                                </span>
                            </p>
                            <p className="overview-temp-max">
                                <span className="overview-temp-max-text">
                                    Max:{" "}
                                </span>
                                {props.isLoading
                                    ? ""
                                    : props.forecastDay[0].TemperatureMax}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="weather-display">
                    {/* <WeatherIcon className='weather-image' weatherNr={props.weather?.WeatherIcon}/> */}
                    <p className="weather-text">{props.weather?.WeatherText}</p>
                </div>
            </div>
        </>
    );
};

export default WeatherOverview;
