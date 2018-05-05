import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './components/Profile';

class Home extends Component {
    renderProfile(){
        return <Profile />;
    }
    render() {
        return (
            <div>
               <p>{this.props.name}</p> 
               <p>{this.props.name}</p> 
                {this.renderProfile()}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
};

Home.defaultProps = {
    name: 'REACT STARTER PACK'
}

export default Home;