import React, {Component} from 'react';
import Music from '../static/musical-note.png';

class Title extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
         <div style = {{display: 'flex'}}>
            <img src={Music} alt='title'
                 style={{paddingTop: '40px', marginLeft: '60px', position: 'relative', zIndex: 5, width: '20px', height: '40px', opacity: '0.4'}}/>
            <div style = {{paddingTop: '40px', paddingLeft: '2px', zIndex: 5, verticalAlign: 'baseline', fontSize: '28px', color: 'rgba(72, 72, 72, 0.4)',fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif"}}>
                {this.props.children}
            </div>
         </div>
        )
    }
}

export default Title;