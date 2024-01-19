import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faSmog } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faIcicles } from '@fortawesome/free-solid-svg-icons';
import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './WeatherIcon.css';

const WeatherIcon = (props) => {

    let icon = 0;

    const iSun= [faSun, 1];
    const iCloudSun = [faCloudSun, 2,3,4,5,6];
    const iCloud = [faCloud, 7,8];
    const iSmog = [faSmog, 11];
    const iCloudShowersHeavy = [faCloudShowersHeavy, 12];
    const iCloudSunRain = [faCloudSunRain, 13,14];
    const iCloudBolt = [faCloudBolt, 15,16,17,41,42];
    const iCloudRain = [faCloudRain, 18,26,29];
    const iSnowFlake = [faSnowflake, 19,20,21,22,23,43,44];
    const iIcicles = [faIcicles, 24];
    const iCloudMeatball = [faCloudMeatball, 25];
    const iTempHigh = [faTemperatureHigh, 30];
    const iTempLow = [faTemperatureLow, 31];
    const iWind = [faWind, 32];
    const iMoon = [faMoon, 33];
    const iCloudMoon = [faCloudMoon, 34,35,36,37,38];
    const iCloudMoonRain = [faCloudMoonRain, 39,40];
    
    const iconLists = [iSun, iCloudSun, iCloud, iSmog, iCloudShowersHeavy, iCloudSunRain, iCloudBolt, iCloudRain, 
                    iSnowFlake, iIcicles, iCloudMeatball, iTempHigh, iTempLow, iWind, iMoon, iCloudMoon, iCloudMoonRain];
    
    if (props.weatherNr !== undefined) {
        for (let i = 0; i<iconLists.length; i++) {
            iconLists[i].forEach(iNr => {
                if (iNr == props.weatherNr) {
                    icon=(iconLists[i])[0];
                };
            });

            if (icon !== 0) break;
        };
    };

    return(
        <FontAwesomeIcon className={props.className} icon={icon !== 0 ? icon : faSpinner}/>
    ); 
};

export default WeatherIcon;