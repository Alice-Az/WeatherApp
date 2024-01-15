import './DetailsTab.css';

const DetailsTab = () => {
    return (
        <table className='details-table'>
            <tbody>
                <tr>
                    <td className='details-header'>Feels like</td>
                    <td className='details-data'>10 °C</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DetailsTab;