import React from 'react';
import {Switch, Route} from  'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.comp';
import ShopPage from './pages/shoppage/shoppage.comp';

const HatPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
);
function App() {
  return (
    <div> 
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
} 

export default App;
