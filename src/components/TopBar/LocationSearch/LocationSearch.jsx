import './LocationSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

const LocationSearch = () => {
    return (
    <>
        <div className='location-search'>
            <input type="text" className='location-input' placeholder='Search for a city...' />
            <button className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlassLocation} /></button>
        </div>
    </>
        
        
    );
};

export default LocationSearch;