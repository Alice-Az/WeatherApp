import './TabButton.css';

const TabButton = (props) => {
    return(
        <button className="tab-button" onClick={props.onClick}>{props.name}</button>
    );
};

export default TabButton;