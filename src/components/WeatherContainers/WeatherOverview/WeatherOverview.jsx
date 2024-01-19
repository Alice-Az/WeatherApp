import './WeatherOverview.css';
import WeatherIcon from '../../icons/weatherIcon/weatherIcon';

const WeatherOverview = (props) => {

    return (
        <>
            <div className='weather-overview'>
                <div className='weather-data'>
                    <p className='location'>{props.location?.LocalizedName}</p>
                    <p className='region-country'>{props.location?.Country} {props.location?.AdministrativeArea}</p>
                    <p className='temperature'>{props.isLoading ? 'Loading...' : props.weather.Temperature}</p>
                </div>
                <div className='weather-display'>
                    <WeatherIcon className='weather-image' weatherNr={props.weather?.WeatherIcon}/>
                    <p className='weather-text'>{props.weather?.WeatherText}</p>
                </div>
            </div>
        </>
        
    );
};

export default WeatherOverview;