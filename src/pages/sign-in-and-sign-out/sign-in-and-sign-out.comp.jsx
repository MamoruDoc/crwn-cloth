import React from 'react';
import SignIn from '../../components/sign-in/sign-in.comp';
import SignUp from '../../components/sign-up/sign-up.comp';
import './sign-in-and-sign-out.styles.scss';


const SingInAndSignOut = () => (
    <div className='sign-in-and-sign-out'>
      <SignIn />
      <SignUp /> 
    </div>
)

export default SingInAndSignOut;