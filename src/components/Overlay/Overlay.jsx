import './Overlay.css';

const Overlay = (props) => {

    if (props.isVisible) return <div className="overlay" onClick={props.onClick}></div>;
    else return <></>;
};

export default Overlay;