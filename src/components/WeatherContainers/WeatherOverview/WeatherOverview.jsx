import './WeatherOverview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

const WeatherOverview = () => {
    return (
        <>
            <div className='weather-overview'>
            <div className='weather-data'>
                <p className='location'>Stockholm</p>
                <p className='temperature'>3 °C</p>
            </div>
            <FontAwesomeIcon icon={faCloudSunRain} className='weather-image'/>
        </div>
        </>
        
    );
};

export default WeatherOverview;