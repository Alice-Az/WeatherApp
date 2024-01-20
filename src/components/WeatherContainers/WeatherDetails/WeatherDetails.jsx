import { useState, useEffect } from 'react';
import TabBar from './TabBar/TabBar';
import DetailsTab from './DetailsTab/DetailsTab';
import DailyTab from './DailyTab/DailyTab';
import HourlyTab from './HourlyTab/HourlyTab';
import './WeatherDetails.css';

const WeatherDetails = (props) => {

    const [view, setView] = useState('details');

    useEffect(() => {
        if (view !== 'details' && props.isLoading) setView('details');
    });
    
    return (
        <div className='weather-details'>
            <TabBar view={view} onClick={setView}/>
            {view==='details' && <DetailsTab weather={props.weather}/>}
            {view==='daily' && <DailyTab forecastDay={props.forecastDay} isLoading={props.isLoading}/>}
            {view==='hourly' && <HourlyTab forecastHr={props.forecastHr} isLoading={props.isLoading}/>} 
        </div>
    );
};

export default WeatherDetails;
