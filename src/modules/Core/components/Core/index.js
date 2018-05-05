import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Core extends Component {
    constructor(){
        super();
        this.onCoreValueChange = this.onCoreValueChange.bind(this);
    }
    onCoreValueChange(e){
        this.props.updateCoreValue(e.target.value);
    }
    render() {
        return (
            <div className='core'>
                <p>example: change value of redux store</p>
                <input value={this.props.core.coreValue}  onChange={this.onCoreValueChange} />
                <p>your coreValue: {this.props.core.coreValue}</p>
            </div>
        );
    }
}

Core.propTypes = {
    core: PropTypes.object,
    updateCoreValue: PropTypes.func,
};

export default Core;