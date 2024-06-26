import './LocationSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useState } from 'react';
import { GetLocations } from '../../../services/WeatherAPI';
import Overlay from '../../Overlay/Overlay';

const LocationSearch = (props) => {

    const location = useRef();

    const [listVisible, setListVisible] = useState(false);

    const [locations, setLocations] = useState([]);

    const setResults = async (input) => {
        setLocations(await GetLocations(input));
        setListVisible(true);
    };

    const setChoice = (choice) => {
        props.onClick(choice);
        setListVisible(false);
    };

    return (
        <div className='location-search'>
            <input type="text" className='location-input' placeholder='Search for a city...' ref={location}/>
            <button className='search-icon' onClick={() => setResults(location.current.value)}><FontAwesomeIcon icon={faMagnifyingGlassLocation} /></button>
            {
                listVisible ? <div className='location-results'>
                { locations.length > 0 
                ? locations.map(location => <p key={location.Key} className='location-item' onClick={() => setChoice(location)}>{location.LocalizedName}
                                                <span className='location-details'>&emsp;{location.Country}, {location.AdministrativeArea}</span>
                                            </p>) 
                : <p className='location-item no-result'>No results found...</p>}
                            </div>
                :<></>
            }
            <Overlay isVisible={listVisible} onClick={() => setListVisible(false)}/>
        </div>
    );
};

export default LocationSearch;