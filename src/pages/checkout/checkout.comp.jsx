import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.comp';
import StripeButton from '../../components/stripe-button/stripe-button.comp';
import './checkout.styles.scss';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span> 
            </div>

            </div> 
        {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>
            <span>Total: ${cartTotal}</span>
        </div>
        <div className='test-warning'>
                *Please use the following test credit cart
                <br /> 
                4242 4242 4242 4242 - Exp 01/21 - CVC 123
        </div>
        <StripeButton price={cartTotal} />
    </div>
)
const mapStateToProps=createStructuredSelector(
    {cartItems: selectCartItems,
    cartTotal: selectCartTotal}
)
export default connect(mapStateToProps)(CheckoutPage);