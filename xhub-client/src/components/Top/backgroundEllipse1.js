import React from 'react';
import backgroundEllipse1 from "../../static/backgroundEllipse.svg";
import "../../backgroundEllipse.css";


const BackgroundEllipse1 = () => {
    return (
        <div className="background-ellipse1-wrapper">
            <img src = { backgroundEllipse1 }  className = "background-ellipse1" alt = "background-ellipse1" />
        </div>
    )
}

export default BackgroundEllipse1;