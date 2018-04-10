import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import Home from './modules/Home';
// import About from './modules/About';
import NotFound from './modules/NotFound';


const Home = () => <p>Home</p>;
const About = () => <p>About</p>;
const Topics = () => <p>Topics</p>;

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
                        <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                     <hr />
                    <Route exact path='/' component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
    );
};

export default App;