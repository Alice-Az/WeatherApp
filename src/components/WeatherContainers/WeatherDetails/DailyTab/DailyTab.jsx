import './DailyTab.css';

const DailyTab = () => {
    return (
        <table className='daily-table'>
            <tbody>
                <tr>
                    <td className='daily-header'>2024-02-01</td>
                    <td className='daily-data'>10 °C</td>
                </tr>
                <tr>
                    <td className='daily-header'>2024-02-02</td>
                    <td className='daily-data'>12 °C</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DailyTab;