import React, { Component } from 'react';
import TopBtn from '../static/topbtn.png';
import scrollToComponent from 'react-scroll-to-component';


class GoToTop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src = {TopBtn}  alt = 'top' style = {{
                position: 'fixed',
                width: '36px',
                height: '36px',
                right: '0px',
                bottom: '56px',
                zIndex: 5
            }}
            onClick={() => {
                this.props.disappear();
                return(scrollToComponent(this.props.target0, { offset:  0, align: 'top', duration: 500}))
            }}
            />
        );
    }
}

export default GoToTop;