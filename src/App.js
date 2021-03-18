import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';
import Homepage from './containers/Homepage';
import Loginpage from './containers/Loginpage';
import Registerpage from './containers/Registerpage';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import {isLoggedInUser} from './actions';
import NavBar from './containers/drawer';
import Profil from './profil'
function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()

  useEffect(() =>{
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  },[]);

  return (
    <div className="App">
      
      <Router>
        {/* only logged in user can access this home route*/} 
        <PrivateRoute path= "/" exact component= {Homepage} />
       
        <Route path= "/login" component= {Loginpage} />
        <Route path= "/signup" component= {Registerpage} />
        <Route path= "/profil" component= {Profil} />

      </Router>
     
      
     
    </div>
  );
}

export default App;
