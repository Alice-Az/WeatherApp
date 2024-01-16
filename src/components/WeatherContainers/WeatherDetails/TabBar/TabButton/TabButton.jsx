import './TabButton.css';

const TabButton = (props) => {
    return(
        <button className={`tab-button ${props.selected ? "selected-tab" : ""}`} onClick={props.onClick}>{props.name}</button>
    );
};

export default TabButton;