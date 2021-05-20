import React, {useState, useEffect} from 'react';
import {Switch, Route} from  'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.comp';
import ShopPage from './pages/shoppage/shoppage.comp';
import Header from './components/header/header.comp';
import SingInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.comp';
import {auth} from './firebase/firebase.utils';
const HatPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
);
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect( ()=> {
    auth.onAuthStateChanged( user => {
      setCurrentUser(user);
      console.log(user)
    }
    )    
  })
  return (
    <div> 
      <Header currentUser={currentUser} />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SingInAndSignOut} />
      </Switch>
    </div>
  );
} 

export default App;
