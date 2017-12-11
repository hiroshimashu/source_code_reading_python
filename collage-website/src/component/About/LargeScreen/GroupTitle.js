import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const titleWidth =  windowWidth * 0.165;
const titleHeight = windowHeight *  0.012;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}

const titleX = calculatePositionX()
const titleY = 133 /2744 * windowHeight;

function GroupTitle() {
    return(
        <div className="groupTitle" style = {styles.group}>
            COLLAGE
        </div>
    );
}

const styles = {
    group: {
        color:  '#2d2d2d',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontWeight: 600,
        fontSize: '40px',
        textAlign: 'center',
        letterSpacing: '0.1em',
        position: 'absolute',
        lineHeight: '41.316px',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX,
    }
}

export default GroupTitle;