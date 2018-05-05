import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from './modules/Home';
import Core from './modules/Core';
import About from './modules/About';
import NotFound from './modules/NotFound';

const App = () => {
    return (
            <Router>
                <div>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/core">Topics</Link>
                        </li>
                    </ul>

                     <hr />
                    <Route exact path='/' component={Core} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/core" component={Core} />
                </div>
            </Router>
    );
};

export default App;