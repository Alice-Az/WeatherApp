import './TabBar.css';
import TabButton from './TabButton/TabButton';

const TabBar = (props) => {


    return (
        <div className='tab-bar'>
            <TabButton name='Details' selected={props.view === 'details'} onClick={() => props.onClick('details')}/>
            <TabButton name='Hourly' selected={props.view === 'hourly'} onClick={() => props.onClick('hourly')}/>
            <TabButton name='Daily' selected={props.view === 'daily'} onClick={() => props.onClick('daily')}/>
        </div>
    );
};

export default TabBar;