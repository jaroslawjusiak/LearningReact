import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from './../../UI/Button/Button';

class OrderSummary extends React.Component {
    componentDidUpdate(){
        console.log('[OrderSummary] did update')
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;