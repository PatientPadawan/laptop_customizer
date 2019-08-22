import React, { Component } from 'react';
import './Total.css';

class Total extends Component {
    render() {
        const total = Object.keys(this.props.state.selected).reduce(
            (acc, curr) => acc + this.props.state.selected[curr].cost, 0
        );

        return (
            <div>{this.props.USCurrencyFormat.format(total)}</div>
        );
    }
}

export default Total;