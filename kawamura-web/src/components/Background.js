import React from 'react';
import bg2 from '../static/bg.jpg';
import wall from '../static/bgwall.png';

function Background() {
    return(
        <div className="bg2" style = {styles.bg2}>
            <div className="bg" style = {styles.bg}>
                <div className="bgwall" style = {styles.bgwall}/>
            </div>
        </div>
    );
}

const styles = {
    bg2: {
        background: `url(${bg2}) repeat`
    },
    bg: {
        background: `url(${bg2}) repeat`,
        position:'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        zIndex: '0'
    },
    bgwall: {
        background: `url(${wall}) repeat-x`,
        position:'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '666px',
        overflow:'hidden',
        zIndex: 1
    }
}

export default Background;