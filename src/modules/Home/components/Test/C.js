import React, { Component } from 'react';
import D from './D';
import E from './E';

class C extends Component {
    render() {
        return (
            <div>
                <D onChange={this.props.onValueDChange} />
                <E onChange={this.props.onValueEChange} />
            </div>
        );
    }
}

export default C;