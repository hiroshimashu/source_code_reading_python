import React from 'react';
import Feature from '../../../../static/FEATURE.png';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 / 1200;
const interactive2Width = windowWidth * 0.674;
const interactive2Height = windowHeight *  0.491;
function CalculateX() {
    return (windowWidth - interactive2Width) / 2;
}
const interactive2X = CalculateX();
const interactive2Y = windowHeight * 227 / 750;



function InteractiveScreen2() {
    return(
        <img src = {Feature} alt = 'feature' style ={styles.img}/>
    );
}

const styles = {
    img: {
        position: 'absolute',
        width: interactive2Width,
        height: interactive2Height,
        top: interactive2Y,
        left: interactive2X,
        right: interactive2X,
        zIndex: 100
    }
}

export default InteractiveScreen2;