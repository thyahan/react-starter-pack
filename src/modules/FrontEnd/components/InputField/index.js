import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class InputField extends Component {
    render() {
        return (
            <div className='area-input'>
                <textarea className='input-field' onChange={this.props.onChange}></textarea>
            </div>
        );
    }
}

InputField.propTypes = {
    onChange: PropTypes.func,
};

export default InputField;