import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors';




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


/***
 * Old school destructuring
 * 
 * const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
})
***/

/*** 
 * 1. 1st approach to use selectors
 * 
 * const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})
***/

/*** 
 * 2. 2nd approach to use selectors - use createstructuredSelectors
***/

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}) 




export default connect(mapStateToProps)(Header);