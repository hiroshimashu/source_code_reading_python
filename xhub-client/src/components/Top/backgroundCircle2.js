import React from 'react';
import backgroundCircle1 from "../../static/backgroundCircle1.svg";
import "../../backgroundCircle2.css";


const BackgroundCircle2 = () => {
    return (
        <div className="background-circle2-wrapper">
            <img src = { backgroundCircle1 }  alt = "background-circle2" />
        </div>
    )
}

export default BackgroundCircle2;