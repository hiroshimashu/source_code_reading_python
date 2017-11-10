import React , {Component}from 'react';
import Map from './GoogleMap';
import Logo from '../../static/collage_logo_cut.jpg';
import Title from '../../static/Access.gif';
import BackgroundParticle from '../About/BackroundParticle';


class Access extends Component {
    render() {
        return (
            <div className="wrapper" style={{position: 'relative', widht: '100%', height: '500px'}}>
                <BackgroundParticle height ={500}/>
                <div style = {{position: 'absolute', top: '2%', left:'30%', width: '540px', height:'110px'}}>
                    <img src = {Title} style = {{width: '540px', height:'110px'}}/>
                </div>
                <div style={{position: 'absolute', top: '2%', left: '2%', width: '30px', height: '30px'}}>
                    <img src={Logo} style={{width: '30px', height: '30px'}}/>
                </div>
                <div style={{position: 'absolute', width: '100px', height: '50px', font: '16px', top: '50%'}}>
                    所在地
                </div>
                <div style={{
                    position: 'absolute',
                    width: '300px',
                    height: '50px',
                    font: '16px',
                    left: '10%',
                    top: '50%'
                }}>
                    〒106-0032 東京都港区六本木5-9-20
                </div>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '400px', width: '50%', top: '25%' ,position: 'absolute', left: '45%'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                />
            </div>
        );
    }
}



export default Access;