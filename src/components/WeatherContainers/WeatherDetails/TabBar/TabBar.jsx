import './TabBar.css';
import TabButton from './TabButton/TabButton';

const TabBar = (props) => {

    return (
        <div className='tab-bar'>
            <TabButton name='Details' onClick={() => props.onClick('details')}/>
            <TabButton name='Hourly' onClick={() => props.onClick('hourly')}/>
            <TabButton name='Daily' onClick={() => props.onClick('daily')}/>
        </div>
    );
};

export default TabBar;