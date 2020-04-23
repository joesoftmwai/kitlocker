import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        event.preventDefault();

        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
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
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            Sign in with google
                        </CustomButton>
                   </div>
                    

                    
                </form>
            </div>
        )
    }
}

export default SignIn;