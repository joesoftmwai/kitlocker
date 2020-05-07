import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions'





class App extends React.Component {

  // state = {
  //   currentUser: null
  // };

  // unsubscribeFromAuth = null;

  componentDidMount() {

    const { checkUserSession } = this.props;
    checkUserSession();

    // const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
 
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({ 
    //           id: snapshot.id,
    //           ...snapshot.data()
    //       }, () => {
    //         // console.log(this.state);
    //       });
    //     });
    //   }

    //   setCurrentUser(userAuth);

    // });
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) }/>
        </Switch>
      </div>
    );
  }

}

/**
 * Use select selectors
 * 
 * const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  })

*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
 