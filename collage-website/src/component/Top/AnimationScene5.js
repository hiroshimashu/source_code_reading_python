import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import Logo from '../../static/collage_red.png';
import SNS from './SNS';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;
const titleWidth = windowWidth *  0.713;
const titleHeight = windowHeight * 0.07;
const titleX =  106 / 750 *  windowWidth;
const titleY = 632 / 1334 *  windowHeight;


const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);



class AnimationSceen5 extends Component {
    constructor(props){
        super(props);

        this.state = { show: false };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);
    }

    render() {
        return(
            <Fade in = { this.state.show} timeout = {1000}>
                <div>
                    <img src = {Logo} alt = 'sceen1' style = { styles.collage}/>
                    <SNS />
                </div>
            </Fade>
        );
    }
}

const styles = {
    collage: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        zIndex: 100
    }
}


export default AnimationSceen5;