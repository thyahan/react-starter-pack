import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import InputField from './components/InputField';
import ResponseField from './components/ResponseField';

class FronEnd extends Component {
    constructor(){
        super();
        this.state = { 
            input: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(e){
        this.setState(Object.assign({}, this.state, { input: e.target.value }));
    }
    render() {
        return (
            <div className='front-end'>
                <InputField onChange={this.onInputChange} />
                <ResponseField data={this.state.input} />
            </div>
        );
    }
}

FronEnd.propTypes = {
};

FronEnd.defaultProps = {
}

export default FronEnd;