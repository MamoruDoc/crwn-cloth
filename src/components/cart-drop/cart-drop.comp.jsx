import React from 'react';
import CustomButton from '../custom-button/custom-button.comp';
import './cart-drop.styles.scss';

const CartDrop = () => (
    <div className='cart-dropdown'>
<div className='cart-items' />
<CustomButton>Go to checkout</CustomButton>
    </div>
)  
export default CartDrop;