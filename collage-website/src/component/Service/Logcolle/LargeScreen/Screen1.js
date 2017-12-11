import React from 'react';
import whiteScreen from '../../../../static/Iphone_Screen.png';
import LogColle from '../../../../static/logcolle.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const screenWidth = windowWidth * 0.142;
const screenHeight = windowHeight * 0.403;
const screenX = 377 / 1200 * windowWidth
const screenY = windowHeight * 273 / 750;

const logWidth = windowWidth * 0.083;
const logHeight = windowHeight * 0.133;
const logX = 410 / 1200 * windowWidth
const logY = windowHeight * 360 / 750;


function Screen1() {
    return(
        <div>
            <img src = {whiteScreen} style ={styles.screen} />
            <img src = {LogColle} style = {styles.log} />
        </div>
    );
}

const styles = {
    screen: {
        position: 'absolute',
        width: screenWidth,
        height: screenHeight,
        top: screenY,
        left: screenX
    },
    log: {
        position: 'absolute',
        width: logWidth,
        height: logHeight,
        top: logY,
        left: logX
    },


};

export default Screen1;