import React from 'react';
import backgroundEllipse2 from "../../static/backgroundEllipse2.svg";
import "../../backgroundEllipse2.css";


const BackgroundEllipse2 = () => {
    return (
        <div className="background-ellipse2-wrapper">
            <img src = { backgroundEllipse2 }  className = "background-ellipse2" alt = "background-ellipse2" />
        </div>
    )
}

export default BackgroundEllipse2;