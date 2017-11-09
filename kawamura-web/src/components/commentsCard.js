import React from 'react';
import Comment from '../static/comment.png';
import Close from '../static/close.png';

function CommentCard(props) {
    return(
        <div className="cmt" style = {{
            height: '3184px',
            position:'absolute',
            top:  `${props.top}`,
            left: '500px',
            width: '100%',
            height: '100%',
            zIndex: '100'}}>
            <div style = {props.style1}>
                <img src = {Close} style = {props.style2} onClick = {props.handleClick}/>
                <p style = {styles.p1}>
                    <span style = {styles.span}>
                      {props.children1}
                    </span>
                      {props.children2}
                </p>
                <p style ={styles.p2}>
                   {props.children}
                </p>
            </div>
        </div>
    );
}

const styles = {

    p1: {
        fontSize:'19px',
        color:'#4D4D4D',
        marginTop:'4px',
        marginLeft:'38px',
        lineHeight: '170%'
    },
    p2: {
        fontSize: '12px',
        color: '#4D4D4D',
        marginTop: '3px',
        marginLeft: '38px',
        lineHeight: '170%'
    },
    span: {
        fontSize:'16px',
        color: '#4D4D4D'
    }
}

export default CommentCard;