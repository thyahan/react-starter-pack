import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoreContainer from './containers/CoreContainer';

class Core extends Component {
    render() {
        return (
            <div>
                <CoreContainer />
            </div>
        );
    }
}

Core.propTypes = {

};

export default Core;