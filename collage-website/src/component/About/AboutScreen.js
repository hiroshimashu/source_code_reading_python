import React, { Component } from 'react';

import Concept from './Concept';
import CompanyProfile from './CompanyProfile';
import Group from './Group';
import Title from '../../static/About.gif';




class AboutScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div ref = {aboutWrapper => this.aboutWrapper = aboutWrapper} className="aboutWrapper"  style={{position:'relative',width: '100%', height: '2150px'}}>
                <div style = {{backgroundColor:'rgba(248,251,253, 1)', width: '60%', height:'720px', marginLeft: '20%', position:'absolute' ,zIndex:1}}>
                    <div style = {{width: '100%', height:'10%', zIndex:2 , marginTop: '5%'}}>
                        <img src = {Title} alt = 'title' style = {{width:'400px', height:'94px'}}/>
                    </div>
                    <Concept />
                </div>
                <CompanyProfile />
                <Group />
            </div>
        );
    }
}

export default AboutScreen;