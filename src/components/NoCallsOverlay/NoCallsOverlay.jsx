import "./NoCallsOverlay.css";

const NoCallsOverlay = ({ isCallsReached }) => {
    return (
        <>
            {isCallsReached && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <p>
                            Today's API calls limit has been reached, please try
                            again tomorrow!
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default NoCallsOverlay;
