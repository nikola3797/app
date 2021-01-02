import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Auxiliary>
                <h3>Vasa narudzbina</h3>
                <p>Socan burger sa sledecim namirnicama:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Ukupna cena: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Nastavite?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Ponisti</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Nastavi</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;