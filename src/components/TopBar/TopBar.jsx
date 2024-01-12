import './TopBar.css';
import LocationSearch from './LocationSearch/LocationSearch';
import Menu from './Menu/Menu';
import AppIcon from './AppIcon/AppIcon';

const TopBar = () => {
    return(
    <div className='top-bar'>
            <AppIcon/>
            <LocationSearch/>
            <Menu/>
    </div>
    );
};

export default TopBar;