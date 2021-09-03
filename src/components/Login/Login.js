import React, { useContext } from 'react';
import './Login.css';

import icong from '../../icons/Group 573.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContex } from './../../App';
import { useHistory, useLocation } from 'react-router-dom';
 



const Login = () => {
  const [logInUser,setLogInUser] = useContext(UserContex);
  console.log(logInUser)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    if(!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
   const googleSignIn = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
  
    const  {displayName,email} = result.user;
    const signInUser = {name: displayName,email}
    
    console.log(signInUser)
    setLogInUser(signInUser);
    history.replace(from);
    
  }).catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
    
    var email = error.email;
   
    var credential = error.credential;

  });
   }


    return (
        <div>
         
         <h1 className="top">FRESH VELLY</h1>




            <div className="formBox">
                <form >
                 <h2>Login</h2>
                 <input className="input" type="text" placeholder="User name Or Email" />
                 <br />
                 <input  className="input" type="text" placeholder="Password" />
                 <br />
                 <input  type="checkbox" name="" id="" /> <span className="check">Remember Me</span>  <a className="remember"   href="/create account"> Forgot Password? </a>
                 
                 <br />
                 <button className="loginbtn">Login</button>
                
                 

                </form>
            </div>
            <div className="googlebtn">
            <img src={icong} alt="" />
            <button  className="google" onClick={googleSignIn} >  Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;