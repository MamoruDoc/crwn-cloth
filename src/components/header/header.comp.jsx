import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from './crown.svg';
import CartIcon from '../cart-icon/cart-icon.comp';
import CartDrop from '../cart-drop/cart-drop.comp';
const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
        <Link to='/shop' className='option'>
            SHOP
        </Link>
        <Link to='/contact' className='option'>
            CONTACT
        </Link>
        {
            currentUser?
            <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
            : <Link to='/signin' className='option'>SIGN IN</Link>
        }
        <CartIcon />
        </div>
        {hidden? null :  <CartDrop />}
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);