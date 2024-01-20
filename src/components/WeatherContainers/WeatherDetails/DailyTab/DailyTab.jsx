import './DailyTab.css';
import WeatherIcon from '../../../icons/weatherIcon/weatherIcon';

const DailyTab = (props) => {

    return (
        <div className='daily-table'>
                {props.isLoading? <></> : props.forecastDay.map(day =>
                    <div key={day.Date} className='daily-row'>
                        <div className='daily-date'>{day.Date}</div>
                        <div className='daily-data-min'>
                            <span className='daily-data-text'>Min: </span>
                            {day.TemperatureMin}
                            <span className='daily-data-small'>&ensp;to&ensp;</span>
                        </div>
                        <div className='daily-data-max'><span className='daily-data-text'>Max: </span>{day.TemperatureMax}</div>
                        <div className='daily-icon'><WeatherIcon weatherNr={day.WeatherIcon}/></div>
                        <div className='daily-icon-text'>{day.WeatherText}</div>
                    </div>
                )}
        </div>
    );
};

export default DailyTab;