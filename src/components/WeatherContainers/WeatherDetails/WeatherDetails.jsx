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
            <TabBar className='tab-bar' onClick={setView}></TabBar>
            {view==='details' && <DetailsTab className='details-tab'/>}
            {view==='daily' && <DailyTab className='daily-tab'/>}
            {view==='hourly' && <HourlyTab className='hourly-tab'/>}
        </div>
    );
};

export default WeatherDetails;
