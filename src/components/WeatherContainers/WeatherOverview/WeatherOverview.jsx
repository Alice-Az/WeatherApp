import './WeatherOverview.css';
import WeatherIcon from '../../icons/weatherIcon/weatherIcon';

const WeatherOverview = (props) => {

    return (
        <>
            <div className='weather-overview'>
                <div className='weather-data'>
                    <p className='location'>{props.location?.LocalizedName}</p>
                    <p className='region-country'>{props.location?.Country} {props.location?.AdministrativeArea}</p>
                    <div className='overview-temp'>
                        <p className='overview-temp-avg'>{props.isLoading ? 'Loading...' : props.weather.Temperature}</p>
                        <div className='overview-temp-minmax'>
                            <p className='overview-temp-min'><span className='overview-temp-min-text'>Min: </span>{props.isLoading ? '' : props.forecastDay[0].TemperatureMin}&ensp;<span className='overview-temp-small'>to&ensp;</span></p>
                            <p className='overview-temp-max'><span className='overview-temp-max-text'>Max: </span>{props.isLoading ? '' : props.forecastDay[0].TemperatureMax}</p>
                        </div>
                    </div>
                    
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