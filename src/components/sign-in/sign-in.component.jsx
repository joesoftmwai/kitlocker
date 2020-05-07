import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart, mySignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { mySignInStart, emailSignInStart } = this.props;
        const { email, password } = this.state;

        // mySignInStart(email, password);
        emailSignInStart(email, password);

        
    }

    handleChange = (event) => {
        event.preventDefault();

        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email"
                        label="Email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>
                
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required/>

                   <div className="buttons">
                        <CustomButton type="submit">
                            Sign in
                        </CustomButton>
                        {/* <CustomButton type="submit">
                            My Sign In
                        </CustomButton> */}
                        <CustomButton type="button" onClick={ googleSignInStart } isGoogleSignIn>
                            Sign in with google
                        </CustomButton>
                   </div>
                    

                    
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
    mySignInStart: (email, password) => dispatch(mySignInStart({email, password}))
}) 

export default connect(null, mapDispatchToProps)(SignIn);