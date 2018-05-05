import React, { Component } from 'react';
const E = props => {
    return <div>E: <input value={props.value} onChange={props.onChange}/></div>
}
const D = props => {
    return <div>D: <input value={props.value} onChange={props.onChange}/></div>
}
const C = props => {
    return (<div>
                <D onChange={props.onValueDChange} />
                <E onChange={props.onValueEChange} />
            </div>);
}
const B = props => {
    return (
        <div>
            <p>D: {props.valueD}</p>
            <p>E: {props.valueE}</p>
        </div>
    );
}
class A extends Component {
    constructor(){
        super();
        this.state = {
            valueD: 'D',
            valueE: 'E',
        }
        this.onValueDChange = this.onValueDChange.bind(this);
        this.onValueEChange = this.onValueEChange.bind(this);
    }
    onValueDChange(e){
        this.setState(Object.assign({}, this.state, {
            valueD: e.target.value,
        }));
    }
    onValueEChange(e){
        this.setState(Object.assign({}, this.state, {
            valueE: e.target.value,
        }));
    }
    render() {
        return (
            <div>
                <C onValueDChange={this.onValueDChange} onValueEChange={this.onValueEChange} />
                <B valueD={this.state.valueD} valueE={this.state.valueE}/>
            </div>
        );
    }
}
export default A;