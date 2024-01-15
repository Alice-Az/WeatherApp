import './HourlyTab.css';

const HourlyTab = () => {
    return (
        <table className='hourly-table'>
            <tbody>
                <tr>
                    <td className='hourly-header'>10:00</td>
                    <td className='hourly-data'>12 °C</td>
                </tr>
                <tr>
                    <td className='hourly-header'>11:00</td>
                    <td className='hourly-data'>14 °C</td>
                </tr>
            </tbody>
        </table>
    );
};

export default HourlyTab;