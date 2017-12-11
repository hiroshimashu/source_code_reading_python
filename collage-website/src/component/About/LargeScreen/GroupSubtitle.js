import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const titleWidth =  windowWidth * 0.078;
const titleHeight = windowHeight *  0.007;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}

const titleX = calculatePositionX()
const titleY = 183 / 2744 * windowHeight;


function GroupSubTitle() {
    return(
        <div style = {styles.subtitle}>
            GROUP
        </div>
    );
}

const styles = {
    subtitle: {
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#a2a2a2',
        fontSize: '25px',
        textAlign: 'center',
        position: 'absolute',
        letterSpacing: '0.1em',
        lineHeight: '41.316px',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX
    }
};

export default GroupSubTitle;