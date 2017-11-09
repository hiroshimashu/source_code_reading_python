import React, { Component } from 'react';
import background from '../static/player-graphics.png';
import Coming from '../static/coming.png';



class SongList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <tr style={{
                height: '200px',
                fontSize: ' 14px',
                margin: 0,
                padding: 0,
                border: '0',
                outline: 0,
                verticalAlign: 'baseline',
                fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif"
            }}>
                <td style={{verticalAlign: 'middle', borderBottom: '1px #000 solid', position: 'relative'}}>
                    <div style = {{marginBottom: '20px',fontSize: '18px', }}>{this.props.name}</div>
                    <div style = {{fontSize: '13px'}}>{this.props.children}</div>
                </td>
                <td style={{width: 2, verticalAlign: 'middle', borderBottom: '1px #000 solid', textAlign: 'right', position: 'relative'}}>
                    <img
                        src = {Coming}
                        alt = 'coming'
                        style={{
                        display: 'block',
                        width: '91px',
                        height: '36px',
                        textIndent: ' 100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textDecoration: 'none',
                        marginLeft: '100px',
                        position: 'absolute'
                    }}
                         onClick={this.props.fetch}
                    />
                </td>
                <td style = {{verticalAlign: 'middle', borderBottom: '1px #000 solid', width: '2px'}}>
                </td>
            </tr>
        );
    }
}

export default SongList;