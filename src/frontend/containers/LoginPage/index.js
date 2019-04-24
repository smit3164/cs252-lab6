import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { hasAccountToken } from '@/utils';
import './styles.scss';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
	apiKey: "AIzaSyALA3XU5__hCv9xc0a0siWrdJEdEOU1bzg",
	authDomain: "sneaky-strikers.firebaseapp.com",
	databaseURL: "https://sneaky-strikers.firebaseio.com",
	projectId: "sneaky-strikers",
	storageBucket: "sneaky-strikers.appspot.com",
	messagingSenderId: "586549421572"
  };
  
  firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

export default class Login extends React.Component {

  loginProcedure = () => {
    localStorage.setItem('accountToken', "hey");
    this.props.history.push('/');
  }
  render() {
    if (hasAccountToken()) {
      return(
        <Redirect to="/" />
      );
    }

    return (
      <div class="loginPage">
        <div class="Content">
        <center>
          <h2>Login</h2>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
          
          <Link to="/"><Button id="homeButton">Back to Home Page</Button></Link>
          <Button onClick={this.loginProcedure} id="homeButton">Back to Home Page pseudo login</Button>
        </center>
          <div class="Flex">
          </div>

        </div>
      </div>
    );
  }
};