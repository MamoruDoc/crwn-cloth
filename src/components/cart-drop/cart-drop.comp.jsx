import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.comp';
import CartItem from '../cart-item/cart-item.comp';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-drop.styles.scss';

const CartDrop = ({cartItems}) => (
    <div className='cart-dropdown'>
<div className='cart-items'> 
 {
     cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
 }
</div>
<CustomButton>Go to checkout</CustomButton>
    </div>
)  
const mapStateToProps = (state) => (
    {cartItems: selectCartItems(state)}
)
export default connect(mapStateToProps)(CartDrop);