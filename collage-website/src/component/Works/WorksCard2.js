import React from 'react';


function WorksCard2(props) {
    return(
        <div>
            <img className= 'img' src =  {props.src1} alt = {props.title} style = {props.imgStyle}/>
            <img className="title" src =  {props.src2} alt = {props.title} style =  {props.titleStyle} />
            {props.background && <div style = {props.background} />}
        </div>
    );
}

export default WorksCard2;