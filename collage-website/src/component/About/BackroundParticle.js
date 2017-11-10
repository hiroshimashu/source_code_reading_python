import React from 'react';
import Particles from 'react-particles-js';

function BackgroundParticles(props) {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 100
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
            style = {{
                zIndex: -100,
                position: 'absolute',
                left: '0'
            }}
            width = {'100%'}
            height = {props.height}
        />
    );
}

export default BackgroundParticles;