import React, { Component } from 'react';
import './Custom.css';
import Choices from '../Choices/Choices';

class Custom extends Component {
    render() {
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <Choices 
                features={this.props.features}
                USCurrencyFormat={this.props.USCurrencyFormat}
                state={this.props.state}
                updateFeature={this.props.updateFeature}
            />
          </form>
        );
    }
}

export default Custom;