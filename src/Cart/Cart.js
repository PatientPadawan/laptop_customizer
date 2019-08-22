import React, { Component } from 'react';
import './Cart.css';
import Item from '../Item/Item';
import Total from '../Total/Total';

class Cart extends Component {
    render() {
 return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Item 
                USCurrencyFormat={this.props.USCurrencyFormat}
                features={this.props.features}
                state={this.props.state}
            />
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                <Total 
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    state={this.props.state}
                />
            </div>
            </div>
        </section>
        )
    }
}

export default Cart;