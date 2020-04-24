import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>

            <Link className="option" to="/contact">
                Contact
            </Link>

            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div> 
                ) : (
                    <Link className="option" to="/signin">
                        Sign In
                    </Link>
                )
            }

            <CartIcon />
        </div>

        {/* Cart dropdown sits just below options div */}
        {/* dynamically render cart dropdown based on hidden value */}

        { hidden ? null : <CartDropdown />}


    </div>
);


const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);