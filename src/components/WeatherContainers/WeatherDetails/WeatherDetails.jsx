import { useState } from 'react';
import TabBar from './TabBar/TabBar';
import DetailsTab from './DetailsTab/DetailsTab';
import DailyTab from './DailyTab/DailyTab';
import HourlyTab from './HourlyTab/HourlyTab';
import './WeatherDetails.css';

const WeatherDetails = () => {

    const [view, setView] = useState('details');

    return (
        <div className='weather-details'>
            <TabBar view={view} onClick={setView}/>
            {view==='details' && <DetailsTab/>}
            {view==='daily' && <DailyTab/>}
            {view==='hourly' && <HourlyTab/>} 
        </div>
    );
};

export default WeatherDetails;
