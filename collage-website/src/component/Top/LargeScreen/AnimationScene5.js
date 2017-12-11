import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Logo from '../../../static/collage_red.png';
import Menu from './Menu';
import MenuButton from './MenuButton';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const titleWidth = 535;
const titleHeight = 94;
function calculateTitleX() {
    const width = (windowWidth - titleWidth) / 2;
    return width;
}
const titleX = calculateTitleX();
console.log(titleX);
function  calculateTitleY() {
    const height = (windowHeight - titleHeight) / 2;
    return height;
}
const titleY = calculateTitleY();

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

        this.state = {
            show: false,
            ready: false
        };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked!')
        this.setState((prevState) => {
            return {ready: !prevState.ready};
        });
    }

    render() {
        return(
            <Fade in = { this.state.show} timeout = {1000}>
                <div>
                    <img src = {Logo} alt = 'sceen1' style = { styles.collage}/>
                    {!this.state.ready &&<Menu handleClick = {this.handleClick}/>}
                    {this.state.ready && <MenuButton
                        target1 = {this.props.target1}
                        target2 = {this.props.target2}
                        target3 = {this.props.target3}
                        target4 = {this.props.target4}
                    />}
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