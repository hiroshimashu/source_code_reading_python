import React, { Component } from 'react';
import iBtn from '../static/i-btn.png';
import interview from '../static/interview.png';
import Title from './Title';
import { Link } from 'react-router-dom';


class Interview extends Component {
    render() {
        return(
            <div className = 'interviewWrap' style = {styles.wrapper}>
                <Title>アーティストからのコメント集</Title>
            </div>
        );
    }
}

const styles = {
    wrapper: {
        width: '960px',
        height: '100px',
        margin: '1000px auto 0 auto',
        position: 'relative',
        zIndex: 5
    },
    iBtn: {
        width: '146px',
        height: '146px',
        marginTop: '100px',
        margin: '25px auto 0 auto'
    },
    link: {
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
        verticalAlign:'baseline',
        background: 'transparent',
        textDecoration: 'none'
    },
    btnImage: {
        width: '146px',
        height: '146px',
        marginTop:'70px',
        margin: '25px 0 auto 0 auto'
    }

}
export default Interview;

