import React, { Component } from 'react';
import Aux  from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component  {
    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate')
    }

    render () {
        const ingredientsSummary =  Object.keys(this.props.ingredients)
            .map((igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}:</span>  {this.props.ingredients[igKey]}
                    </li>)
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious Burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total price:</strong> {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
};

export default OrderSummary;