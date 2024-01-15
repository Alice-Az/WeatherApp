import './WeatherOverview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

const WeatherOverview = (props) => {
    return (
        <>
            <div className='weather-overview'>
            <div className='weather-data'>
                <p className='location'>{props.location}</p>
                <p className='temperature'>{props.temperature}</p>
            </div>
            <FontAwesomeIcon icon={faCloudSunRain} className='weather-image'/>
        </div>
        </>
        
    );
};

export default WeatherOverview;