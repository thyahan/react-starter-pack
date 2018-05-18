import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import FrontEnd from './modules/FrontEnd';
import NotFound from './modules/NotFound';

const App = () => {
    return (
            <Router>
                <div>
                    <Route exact path='/' component={FrontEnd} />
                    <Route path="/front-end" component={FrontEnd} />
                </div>
            </Router>
    );
};

export default App;