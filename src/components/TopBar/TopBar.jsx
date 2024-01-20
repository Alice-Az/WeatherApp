import './TopBar.css';
import LocationSearch from './LocationSearch/LocationSearch';
import Menu from './Menu/Menu';
import AppIcon from './AppIcon/AppIcon';

const TopBar = (props) => {
    return(
    <div className='top-bar'>
            <AppIcon/>
            <LocationSearch onClick={props.onClick}/>
            <Menu onClick={props.onClick}/>
    </div>
    );
};

export default TopBar;