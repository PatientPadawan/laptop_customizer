import React, { Component } from 'react';
import slugify from 'slugify';
import './Choices.css';

class Choices extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
            const itemHash = slugify(`item-${item.name}-${idx}`);
            return (
                <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.state.selected[feature].name}
                    onChange={(e) => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                </label>
                </div>
            );
            });

            return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
            );
        })

        return (
            <div>
                {features}
            </div>
        );
    }
}

export default Choices;