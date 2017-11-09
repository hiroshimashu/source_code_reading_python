import React from 'react';
import background from '../static/flame.png';


function Message(props) {
   return(
       <div className = 'message' style = {{position: 'relative', marginTop: `${props.top}`, marginLeft: `${props.left}`, width: '450px', height: '200px'}}>
           <div style =  {{
               backgroundColor: `${props.backgroundColor}`,
               position: 'absolute',
               width:`${props.bw}`,
               height:`${props.bh}`,
               top:'50px',
               left:'40%',
               marginLeft:`${props.marginLeft}`}}
            >
              <div style = {{
                  width: `${props.cw}`,
                  height: `${props.ch}`,
                  marginTop: '11px',
                  marginLeft: '11px',
                  backgroundColor: 'white'
              }}>
                <p style = {styles.comment}>
                    {props.children}
                </p>
                  <p style = {{
                      position:'absolute',
                      top: `${props.top2}`,
                      left: `${props.left2}`,
                      fontSize:'16px'
                  }}>
                      {props.name}
                  </p>
              </div>
           </div>
       </div>
   )
}

const styles = {

    name1: {
       position:'absolute',
       top: '150px',
       left: '270px'
    },
    comment: {
       position: 'absolute',
       top: '10px',
       left: '15px',
       fontSize: '18px',
        lineHeight: '1.5em',
        fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif"
    },
    background: {
        background: `url(${background})`,
        position: 'absolute',
        width:'420px',
        height:'220px',
        top:'50px',
        left:'40%',
        marginLeft:'-355px',
    },
    commentWrapper: {
        width: '400px',
        height: '200px',
        marginTop: '11px',
        marginLeft: '13px',
        backgroundColor: 'white'
    }

}

export default Message;

