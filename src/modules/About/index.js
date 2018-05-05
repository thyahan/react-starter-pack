import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

About.propTypes = {
    text: PropTypes.string,
};

About.defaultProps = {
    text: 'Created by Yutthana Yahan<thyahan@gmail.com>',
}

export default About;