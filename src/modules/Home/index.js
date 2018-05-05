import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        return (
            <div>
               <p>{this.props.name}</p> 
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