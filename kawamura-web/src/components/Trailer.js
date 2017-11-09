import React, {Component} from 'react';
import title from '../static/trailer.png';
import Title from '../components/Title';
import background from '../static/flame.png';

class Trailer extends Component {
    render() {
        return (
            <div className='trailerWrap' style={styles.wrapper}>
                <Title>トレーラー</Title>
                <div className='mvFrame1' style={styles.mvFrame}>
                    <iframe title='kawamura' style={styles.mv} src="https://youtube.be/embed/XD6jSLBOE60"
                            allowFullScreen frameBorder={0}/>
                </div>
                <div className='mvFrame2' style={styles.mvFrame2}>
                    <iframe title='kanpai' style={styles.mv} src="https://youtube.be/embed/7HrX0Py6P24" allowFullScreen
                            frameBorder={0}/>
                </div>

            </div>
        )
    }
}

const styles = {
    wrapper: {
        position: 'relative',
        width: '960px',
        height: 'auto',
        marginBottom: '190px',
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
        verticalAlign:'baseline'
    },
    mvFrame: {
        backgroundColor: '#6EBF86',
        position: 'absolute',
        width:'710px',
        height:'410px',
        top:'160px',
        left:'50%',
        marginLeft:'-355px',
        zIndex: '110'
    },
    mvFrame2: {
        backgroundColor:'#E1A026',
        position: 'absolute',
        width:'710px',
        height:'410px',
        top:'600px',
        left:'50%',
        marginLeft:'-355px',
        zIndex: '110'
    },
    mv: {
        width: '680px',
        height: '380px',
        marginTop: '11px',
        marginLeft: '13px',
    }
}
export default Trailer;