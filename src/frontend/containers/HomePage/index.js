import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from "react-router-dom";
import { Button, Modal, Icon } from 'semantic-ui-react';
import { hasAccountToken } from '@/utils';
import './styles.scss';
import * as firebase from 'firebase';
var provider = new firebase.auth.GoogleAuthProvider();

/*var config = {
	apiKey: "AIzaSyALA3XU5__hCv9xc0a0siWrdJEdEOU1bzg",
	authDomain: "sneaky-strikers.firebaseapp.com",
	databaseURL: "https://sneaky-strikers.firebaseio.com",
	projectId: "sneaky-strikers",
	storageBucket: "sneaky-strikers.appspot.com",
	messagingSenderId: "586549421572"
  };

firebase.initializeApp(config);*/


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showLogoutModal: false,
      loggedIn: false
    }
  }

  openModal = () => {
    this.setState({
      showLogoutModal: true
    })
  }
  closeModal = () => {
    this.setState({
      showLogoutModal: false
    })
  }

  componentDidMount() {
    let self = this;
    this.authChecker = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        self.setState( {
          loggedIn: true
        });
      } else {
        console.log('not logged in');
        self.setState( {
          loggedIn: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.authChecker();
  }

  loginProcedure = () => {
    let self = this;
    let fb = firebase;
    let cs = console;
    firebase.auth().signInWithPopup(provider).then(function (result) {
      cs.log('I\'m in');
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      localStorage.setItem('accountToken', token);
      // The signed-in user info.
      var user = result.user;
      localStorage.setItem('user', user);
      let uid = user.uid;
      let wins = 0;
      let kills = 0;
      let email = user.email;
      let name = user.displayName;
      let location = 'PlayerInfo/listOfPlayers/' + uid;

      // Insert user as player in database if not in already
      fb.database().ref('PlayerInfo/listOfPlayers/').once("value", snap => {
        cs.log('hasChild: ', snap.hasChild(uid));
        if (!snap.hasChild(uid)) {
          fb.database().ref(location).set({
            name,
            email,
            wins,
            kills
          }).then((data) => {
            //success callback
            console.log('data ', data);

          }).catch((error) => {
            //error callback
            console.log('error ', error);
          });
        }
      });

    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

logoutProcedure = () => {
  firebase.auth().signOut();
  localStorage.removeItem('accountToken');
  localStorage.removeItem('user');
  this.setState({
    showLogoutModal: false
  });
}

render() {
  if (hasAccountToken()) {
    return (
      <div className="homePage">
        <div className="Content">
          <center>
            <h1><b>Sneaky Strikers</b></h1>
            <Link to="/game"><Button size="big" id="startButton"><Icon name='game' />Start a game</Button></Link>
            <Link to="/leaderboard"><Button size="big" id="leaderboardButton"><Icon name='chess king' />Leaderboard</Button></Link>
            <Button size="big" onClick={this.openModal}><Icon name='log out' />Log out</Button>

            <Modal
              open={this.state.showLogoutModal}
              onClose={this.closeModal}
              closeIcon
            >
              <Modal.Header>Log out</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to log out?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' onClick={this.logoutProcedure}>
                  <Icon name='checkmark' /> Yes
                </Button>
                <Button color='red' onClick={this.closeModal}>
                  <Icon name='remove' /> No, do not log out
                </Button>
              </Modal.Actions>
            </Modal>
          </center>
          <div className="Flex">
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="homePage">
      <div className="Content">
        <center>
          <h2>Sneaky Strikers</h2>
          <Button id="loginButton" onClick={this.loginProcedure}><Icon name='google' />Log In with Google</Button>
          <Link to="/leaderboard"><Button id="leaderboardButton"><Icon name='chess king' />Leaderboard</Button></Link>
        </center>
        <div className="Flex">
        </div>
      </div>
    </div>
  );
}
};
