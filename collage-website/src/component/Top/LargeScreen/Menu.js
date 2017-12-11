import React, { Component } from 'react';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const menuWidth = windowWidth *  0.058;
const menuHeight = windowHeight * 0.021;
const menuX =  565 / 1200 *  windowWidth;
const menuY = 701 / 750 *  windowHeight;

const arrowWidth = windowWidth *  0.013;
const arrowHeight = windowHeight * 0.013;
const arrowX =  591 / 1200 *  windowWidth;
const arrowY = 725 / 750 *  windowHeight;

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <div style = {styles.menu}>menu</div>
                    <DownArrow style = {styles.arrow} onClick = {this.props.handleClick}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    menu: {
        position: 'absolute',
        width:menuWidth,
        height:menuHeight,
        top:menuY,
        left:menuX,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#b3b3b3',
        fontSize: '28px',
        textAlign: 'left',
        lineHeight: '28px'
    },
    arrow: {
        position: 'absolute',
        width: arrowWidth,
        height: arrowWidth,
        top: arrowY,
        left: arrowX,
        color: '#b3b3b3',
        zIndex:100
    }
};
export default Menu;