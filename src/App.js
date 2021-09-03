
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Oders from './components/Oders/Oders';
import ManageItems from './components/ManageItems/ManageItems';
import Extra from './components/ManageItems/Extra/Extra';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout'
import { createContext, useState } from 'react';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';




export const UserContex = createContext()

function App() {
  const [logInUser,setLogInUser] = useState({});
  return (
    <div >
     <UserContex.Provider value = {[logInUser,setLogInUser]}>
       
      
     <Router>
     
         <Switch>
          {/* <Route path="/oders">
           <Oders></Oders>
          </Route> */}
          <Route exact path="/">
           <Home></Home>
          </Route>


          {/* <Route path="/admin">
          <Admin></Admin>
          </Route> */}
          
          <PrivateRoute path="/admin">
              <Admin></Admin>
          </PrivateRoute>

          {/* <Route path="/oders">
           <Extra></Extra>
          </Route> */}
          
          <Route path="/login">
           <Login></Login>
          </Route>

          <PrivateRoute path="/deals/:id">
           <Checkout></Checkout>
          </PrivateRoute>

          <Route path="/manageitems">
           <ManageItems></ManageItems>
          </Route>
          <PrivateRoute path="/oders">
           <Oders></Oders>
          </PrivateRoute>
         




         </Switch>




     </Router>

     </UserContex.Provider>

    </div>
  );
}

export default App;
