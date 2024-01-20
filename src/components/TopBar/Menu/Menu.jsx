import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Overlay from '../../Overlay/Overlay';


const Menu = (props) => {

    const [favListVisible, setFavListVisible] = useState(false);

    const [favList, setFavList] = useState([]); 

    const setResults = () => {
        let favLocations = [];
        let keys = Object.keys(localStorage);

        for(let i = 0; i < keys.length; i++) {
            const storageLocation = localStorage.getItem(keys[i]);
            favLocations.push(JSON.parse(storageLocation));
        };   
        setFavList(favLocations);
        setFavListVisible(favListVisible === true ? false : true);
    };

    const setChoice = (choice) => {
        props.onClick(choice);
        setFavListVisible(false);
    };

    return (
        <div className='menu-bar'>
            <button className='menu-button' onClick={setResults}>
                <FontAwesomeIcon icon={faBars} className='menu-icon'/>
            </button>
            {
                favListVisible ? <div className='favLocation-results'>
                    <div><FontAwesomeIcon icon={faStar}/> Favorites <FontAwesomeIcon icon={faStar}/></div>
                { favList.length > 0 
                ? favList.map(favLocation => <p key={favLocation.Key} className='favLocation-item' onClick={() => setChoice(favLocation)}>{favLocation.LocalizedName}
                                                <span className='favLocation-details'>&emsp;{favLocation.Country}, {favLocation.AdministrativeArea}</span>
                                            </p>) 
                : <p className='favLocation-item no-result'>No favorites yet...</p>}
                            </div>
                :<></>
            }
            <Overlay isVisible={favListVisible} onClick={() => setFavListVisible(false)}/>
        </div>
    );
};

export default Menu;