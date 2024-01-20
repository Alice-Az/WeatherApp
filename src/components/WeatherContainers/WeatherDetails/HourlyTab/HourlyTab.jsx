import './HourlyTab.css';
import WeatherIcon from '../../../icons/weatherIcon/weatherIcon';

const HourlyTab = (props) => {

    return (
        <table className='hourly-table'>
            <tbody>
                {props.isLoading? <></> : props.forecastHr.map(hour =>
                    <tr key={hour.DateTime}>
                        <td className='hourly-date'>{hour.DateTime}</td>
                        <td className='hourly-data'>{hour.Temperature}</td>
                        <td className='hourly-icon'><WeatherIcon weatherNr={hour.WeatherIcon}/></td>
                        <td className='hourly-icon-text'>{hour.WeatherText}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default HourlyTab;