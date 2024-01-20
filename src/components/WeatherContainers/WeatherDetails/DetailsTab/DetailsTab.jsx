import './DetailsTab.css';

const DetailsTab = (props) => {
    return (
        <table className='details-table'>
            <tbody>
                <tr>
                    <td className='details-header'>Feels like</td>
                    <td className='details-data'>{props.weather?.RealFeelTemperature}</td>
                </tr>
                <tr>
                    <td className='details-header'>Humidity</td>
                    <td className='details-data'>{props.weather?.RelativeHumidity}</td>
                </tr>
                <tr>
                    <td className='details-header'>Dew Point</td>
                    <td className='details-data'>{props.weather?.DewPoint}</td>
                </tr>
                <tr>
                    <td className='details-header'>Wind</td>
                    <td className='details-data'>{props.weather?.Wind}</td>
                </tr>
                <tr>
                    <td className='details-header'>UV Index</td>
                    <td className='details-data'>{props.weather?.UVIndex}</td>
                </tr>
                <tr>
                    <td className='details-header'>Precipitation</td>
                    <td className='details-data'>{props.weather?.Precipitation}</td>
                </tr>
                <tr>
                    <td className='details-header'>Visibility</td>
                    <td className='details-data'>{props.weather?.Visibility}</td>
                </tr>
                <tr>
                    <td className='details-header'>Pressure</td>
                    <td className='details-data'>{props.weather?.Pressure}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DetailsTab;