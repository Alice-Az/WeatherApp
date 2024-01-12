import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <button className='menu-button'>
            <FontAwesomeIcon icon={faBars} className='menu-icon'/>
        </button>
        
    );
};

export default Menu;