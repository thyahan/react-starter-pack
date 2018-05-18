import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ResponseField extends Component {
    renderResponse(data=''){
        return <textarea className='response-field' disabled value={data} />;
    }
    render() {
        return (
            <div className='area-response'>
                {this.renderResponse(this.props.data)}
            </div>
        );
    }
}

ResponseField.propTypes = {
    data: PropTypes.string,
};

export default ResponseField;