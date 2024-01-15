import './LocationSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const LocationSearch = (props) => {

    const location = useRef();

    return (
    <>
        <div className='location-search'>
            <input type="text" className='location-input' placeholder='Search for a city...' ref={location}/>
            <button className='search-icon' onClick={() => props.onClick(location.current.value)}><FontAwesomeIcon icon={faMagnifyingGlassLocation} /></button>
        </div>
    </>
        
        
    );
};

export default LocationSearch;