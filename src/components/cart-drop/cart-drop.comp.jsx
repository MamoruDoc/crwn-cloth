import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import CustomButton from '../custom-button/custom-button.comp';
import CartItem from '../cart-item/cart-item.comp';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-drop.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDrop = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
<div className='cart-items'> 
 {  cartItems.length? 
     (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
     : (<span className='empty-message'>Your cart is empty</span>)
 }
</div>
<CustomButton onClick={() => {
    history.push('/checkout');
    dispatch(toggleCartHidden())}}>
        Go to checkout</CustomButton>
    </div>
)  
const mapStateToProps = createStructuredSelector(
    {cartItems: selectCartItems }
)
export default withRouter(connect(mapStateToProps)(CartDrop));