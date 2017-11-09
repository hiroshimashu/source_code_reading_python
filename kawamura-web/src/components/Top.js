import React, { Component } from 'react';
import Jacket from '../static/KawamuraYuka_Hallelujah.jpg';
import AlbumTitle from './AlbumTitle';
import Yoyaku from '../static/yoyaku.png';

class Top extends Component {
    render() {
        return(
            <div className = 'topWrapper' style = {styles.topWrapper}>
                <div className = 'topLeft' style = {styles.left}>
                     <AlbumTitle />
                     <p className = 'price' style = { styles.price } >
                         CRCP-40531 / ¥2,315+税 / ALBUM / 全8曲収録
                     </p>
                     <a href="http://amzn.asia/38IwiL4" target="_blank">
                         <div className="yoyaku" style = {styles.yoyaku}></div>
                     </a>
                </div>
                <img src = {Jacket} alt = 'jacket' style = {styles.jacket}/>
            </div>
        );
    }
}

const styles = {
    topWrapper: {
        verticalAlign: 'baseline',
        width: '960px',
        height: '456px',
        margin: '0',
        padding: '0',
        border: '0',
        zIndex: 5,
        position: 'relative'
    },
    left: {
        height: '335px',
        marginTop: '60px',
        marginLeft: '80px',
        marginRight:'35px',
        float: 'left',
        zIndex: 5,
    },
    albumTitle: {
        marginTop: '0px',
        marginLeft: '0px',
        marginBottom: '10px',
        zIndex: 5
    },
    price: {
        marginTop: '3px',
        fontSize:  '12px',
        color: '#4D4D4D',
        lineHeight: '170%',
        marginLeft: '50px',
        zIndex: 5
    },
    yoyaku: {
        backgroundImage: `url(${Yoyaku})`,
        width: '160px',
        height: '26px',
        marginTop: '15px',
        zIndex: 5
    },
    jacket: {
        width: '312px',
        height: '312px',
        marginTop: '40px',
        marginLeft: '60px',
        float: 'left',
        zIndex: 5
    }
}


export default Top;