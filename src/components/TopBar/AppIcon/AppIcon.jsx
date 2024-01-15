import './AppIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

const AppIcon = () => {
    return (
        <>
        <div className='app-icon'>
            <FontAwesomeIcon icon={faFeatherPointed} className='feather-image'/>      
            <p className='app-name'>MyRandomWeather</p>
        </div>
        </>
        
    );
};

export default AppIcon;