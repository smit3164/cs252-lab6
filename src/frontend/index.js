import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App'
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';

var provider = new firebase.auth.GoogleAuthProvider();

var config = {
	apiKey: "AIzaSyALA3XU5__hCv9xc0a0siWrdJEdEOU1bzg",
	authDomain: "sneaky-strikers.firebaseapp.com",
	databaseURL: "https://sneaky-strikers.firebaseio.com",
	projectId: "sneaky-strikers",
	storageBucket: "sneaky-strikers.appspot.com",
	messagingSenderId: "586549421572"
  };

firebase.initializeApp(config);

ReactDOM.render((
  <div>
    <App/>
  </div>
), document.getElementById('app'));
