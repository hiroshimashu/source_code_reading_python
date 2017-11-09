import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App';
import App2 from '../App2';

function Main() {
    return(
        <Router>
           <div>
                <Route exact path = '/' component =  {App} />
                <Route path = '/message' component = {App2} />
           </div>
        </Router>

    );
}

export default Main;

