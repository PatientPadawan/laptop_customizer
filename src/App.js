import React, { Component } from 'react';

import './App.css';
import Custom from './Custom/Custom';
import Cart from './Cart/Cart';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    console.log(`update feature ${feature} to ${newValue}:`, selected)
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Custom
            features={this.props.features}
            USCurrencyFormat={USCurrencyFormat}
            state={this.state}
            updateFeature={this.updateFeature}
          />
          <Cart
            USCurrencyFormat={USCurrencyFormat}
            features={this.props.features}
            state={this.state}
          />
        </main>
      </div>
    );
  }
}

export default App;
