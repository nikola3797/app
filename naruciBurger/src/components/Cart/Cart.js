import React, {useState, Component, useEffect } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../Order/Order';

const Cart = (props) => {
  
   const [ings, setIngs] = useState();
   const [dis, setDis] = useState(false);
   const [arr, setArr] = useState([]);

    useEffect(()=> {
        setIngs(props.ings);
        console.log(ings);
        if (ings) {
            setArr([ings]);
            setDis(true);
        }
    },[ings])

        let orders = <Spinner />;
        if ( !props.loading ) {
            if (dis) {
                orders = arr.map( igKey => (
                <Order
                key={igKey}
                ingredients={props.ings}
                price={props.price} />
            )) 
            }
           
        }
        return (
            <div>
                {orders}
            </div>
        );

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        error: state.burgerBuilder.error,
        isAuthenticated: state.newAuth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);