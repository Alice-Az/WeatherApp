import './LocationSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useState } from 'react';
import { GetLocations } from '../../../services/WeatherAPI';
import LocationResults from './LocationResults/LocationResults';

const LocationSearch = () => {

    const location = useRef();

    const [visible, setList] = useState(false);

    const [locations, setLocations] = useState([]);

    const setResults = async (input) => {
        setLocations(await GetLocations(input));
        setList(true);
    };
    
    

    return (
        <div className='location-search'>
            <input type="text" className='location-input' placeholder='Search for a city...' ref={location}/>
            <button className='search-icon' onClick={() => setResults(location.current.value)}><FontAwesomeIcon icon={faMagnifyingGlassLocation} /></button>
            {
                visible ? <div className='location-results'>
                { locations.length > 0 
                ? locations.map(location => <p key={location.Key} className='location-item'>{location.LocalizedName}, {location.AdministrativeArea}, {location.Country}</p>) 
                : <p className='location-item no-result'>No results found...</p>}
                            </div>
                :<></>
            }
        </div>
    );
};

export default LocationSearch;