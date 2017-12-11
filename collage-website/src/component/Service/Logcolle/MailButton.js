import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1334 / 750;
const ButtonWidth = windowWidth * 0.631;
const ButtonHeight = windowHeight *  0.065;
function calculateButtonX() {
    const  x = (windowWidth - ButtonWidth)/2;
    return x;
}
const ButtonX = calculateButtonX();
const ButtonY = windowHeight * 1193 / 1334;


function MailButton() {
    return(
        <div style =  {styles.wrapper} onClick ={() => {console.log('question?');}}>

        </div>
    );
}

const styles = {
    wrapper: {
        position: 'absolute',
        width: ButtonWidth,
        height:  ButtonHeight,
        top: ButtonY,
        right: ButtonX,
        left: ButtonX,
        zIndex:2,
        border: '1px solid',
        borderRadius: '0.1em'
    }
}

export default MailButton;