import React from 'react';

function GroupInformation(props) {
    return(
        <div>
            <img src = {props.src} style = {props.cImage} alt = {props.alt}/>
            <div className="divider" style = {props.divider}/>
            <div className = 'name' style = {props.nameStyle}>
                {props.name}
            </div>
            <div className= 'explanation' style = {props.exStyle}>
                {props.explanation}
            </div>
        </div>
    );
}

export default GroupInformation;