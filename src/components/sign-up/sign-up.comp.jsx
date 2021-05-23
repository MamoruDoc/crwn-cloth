import React, { useState } from 'react';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {
    const emptyUser = {
        displayName: "",
        email:"",
        password: "",
        confirmPassword: ""
};
const [newUser, setUser] = useState(emptyUser);
const handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = newUser;
    if (password !== confirmPassword) {
        alert("passwords do not match");
        return
    }
    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, {displayName});
        setUser(emptyUser)
    }
    catch (error) {
            console.log(error)
             
    }
}
const handleChange = event => {
    setUser({
        ...newUser,
        [event.target.name]: event.target.value,
      })
} 
return (
    <div className="sign-up">
        <h2 className='title'>I do not have an accout</h2>
        <span> Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput 
            type='text' 
            name='displayName' 
            value={newUser.displayName} 
            onChange={handleChange}
            label='Display Name'
            required />
            <FormInput 
            type='email' 
            name='email' 
            value={newUser.email} 
            onChange={handleChange}
            label='Email'
            required />
            <FormInput 
            type='password' 
            name='password' 
            value={newUser.password} 
            onChange={handleChange}
            label='Password'
            required />
            <FormInput 
            type='password' 
            name='confirmPassword' 
            value={newUser.confirmPassword} 
            onChange={handleChange}
            label='Confirm Password'
            required />
            <CustomButton type='submit'>Sign Up </CustomButton>
        </form>
         </div>
)}
export default SignUp;
