import React, { Component } from 'react';

class D extends Component {
    constructor(){
        super();
        this.state = {
            value: 'value of D',
        }
    }
    onChange(e){
        this.setState(Object.assign({}, this.state, {
            value: e.target.value,
        }));
        this.props.onChange(e.target.value);
    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.onChange}/>
            </div>
        );
    }
}

export default D;