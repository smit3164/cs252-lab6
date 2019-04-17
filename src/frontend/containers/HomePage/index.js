import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from "react-router-dom";

import './styles.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div class="homePage">
        <div class="Content">
        <h2>Sneaky Strikers</h2>
        <Link to="/game"><button class="button" id="startButton">Start a game</button></Link>
        <Link to="/login"><button class="button" id="loginButton">Already have an account? Log In</button></Link>
        <Link to="/register"><button class="button" id="signUpButton">Don't have an account? Sign Up Here!</button></Link>
        </div>
      </div>
    );
  }
};
