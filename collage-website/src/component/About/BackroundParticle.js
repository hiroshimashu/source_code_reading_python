import React from 'react';
import Particles from 'react-particles-js';

const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const particleHeight =  windowHeight * 0.33;


function BackgroundParticles(props) {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 50
                    },
                    size: {
                        value: 20,
                        random: false
                    },
                    color:{
                        value:'#e9e9e9'
                    },
                    line_linked: {
                        enable: false
                    }
                }
            }}
            width = {'100%'}
            height = {'100%'}
            style =  {{
                position:'absolute',
                zIndex: '-100',
                left: 0
            }}
            className =   'particleWrapper'
        />
    );
}

export default BackgroundParticles;