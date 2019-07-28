import React from "react";
import FormInput from "../form-input/formInput";
import CusButton from "../button/button.jsx";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtils";
import './signIn.scss'


class SignIn extends React.Component {
    constructor (props) {
        super(props)

        this.state= {
            email: '',
            password: ''
        }
    }//constructor ends here

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };
    render () {
        return (
            <div className='sing-in'>
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onClick={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label ="email"
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        label="password"
                        required 
                    />
                    <div className='buttons'>
                        <CusButton type='submit'> Sign in </CusButton>
                        <CusButton onClick={signInWithGoogle} isGoogleSignIn> 
                            Signin with Google 
                        </CusButton>
                    </div>
                    
                </form>
            </div>
        )//return ends here
    } //render ends here
}//class ends here

export default SignIn