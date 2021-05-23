import React, {useState} from 'react';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'; 
import './sign-in.styles.scss';

const SignIn = () => {

    const [user, setUser] = useState({
        email:"",
        password: ""
})

const handleChange = event => {
    setUser({
        ...user,
        [event.target.name]: event.target.value,
      })
}

const handleSubmit = async event => {
    event.preventDefault();
    try {
        await auth.signInWithEmailAndPassword(user.email, user.password);
        setUser({email:"",
    password: ""})
    } catch(error) {console.log(error)}
}

return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with yout email and password</span>
        <form onSubmit={handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                value={user.email} 
                handleChange={handleChange}
                label="email"
                required />
                <FormInput 
                name="password" 
                type="password" 
                value={user.password} 
                handleChange={handleChange}
                label="password"
                required />
                <div className="buttons">
                <CustomButton type="submit" value="Submit form">Sign In</CustomButton> 
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>  
                </div>
        </form>
    </div>
)
}

export default SignIn;