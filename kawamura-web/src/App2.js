import React, { Component } from 'react';
import Background from './components/Background';
import MessageMain from './components/MessageMain';

class App2 extends Component {
    render() {
        return(
            <div  style = {styles.appWrapper}>
                <Background />
                <MessageMain />
            </div>
        );
    }
}

const styles = {

    appWrapper: {
        position: 'relative',
        width: '960px',
        height: '3120px',
        margin: '0 auto',
        marginBottom: '140px',
        overflow: 'hidden',
        zIndex: 5
    }
}

export default App2;
