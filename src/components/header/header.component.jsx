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

import { signOutStart } from '../../redux/user/user.actions';

// import './header.styles.scss';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo"/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>

            <OptionLink to="/contact">
                Contact
            </OptionLink>

            {
                currentUser ? (
                    <OptionLink as='div' onClick={signOutStart}>
                        Sign Out
                    </OptionLink> 
                ) : (
                    <OptionLink to="/signin">
                        Sign In
                    </OptionLink>
                )
            }

            <CartIcon />
        </OptionsContainer>

        {/* Cart dropdown sits just below options div */}
        {/* dynamically render cart dropdown based on hidden value */}

        { hidden ? null : <CartDropdown />}


    </HeaderContainer>
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


const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})



export default connect(mapStateToProps, mapDispatchToProps)(Header);