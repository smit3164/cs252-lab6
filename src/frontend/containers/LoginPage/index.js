import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';


import './styles.scss';


export default class Login extends React.Component {
  verifyPass(password) {
    //console.log('Inputted password (verifyPass): ', password);

    //check for valid lengths
    if(password.length < 6){
      return false;
    }

    if(password.length > 32){
      return false;
    }

    //check that password has letters AND numbers

    //modular regex design
    var letters = /[a-zA-Z]+/;
    var numbers = /[0-9]+/;

    if(password.match(letters) == null || password.match(numbers) == null) {
      return false;
    }

    return true;
  }


  loginProcedure() {
    document.getElementById("passwordPrompt").textContent = "";

    // Grab username and password from field
    let username = document.getElementById("usernameField").value;
    let password = document.getElementById("passwordField").value;
    console.log('Inputted username (loginProcedure): ', username);
    console.log('Inputted password (loginProcedure): ', password);


      if ((this.verifyPass(password)) == true) {
        console.log('Valid regex for password!');

        // Connect with backend to verify login information is correct
       
        this.props.history.push('/');
        
      } else {
        console.log('Invalid password!');
        document.getElementById("passwordPrompt").textContent = "(Invalid password!)";
        document.getElementById("passwordPrompt").style = "color:red;";
      }
    

  }

  enterPressedOnPassword() {
    if (event.keyCode === 13) {
      document.getElementById("loginButton").click();
    }
  }

  handlePasswordChange(event) {
    if (this.verifyPass(event.target.value)) {
      document.getElementById("passwordPrompt").textContent = "";
    }
  }

  render() {
    return (
      <div class="loginPage">
        <div class="Content">
        <center>
          <h2>Login</h2>
          <form>
            <p>Username or Email</p>
            <input type="text" name="usernameField" id="usernameField" placeholder="Username"></input><br></br>

            <p>Password<p id="passwordPrompt"></p></p>
            <input type="password" name="passwordField" id="passwordField" onChange={(event) => {this.handlePasswordChange(event)}} onKeyDown={(e) => this.enterPressedOnPassword()} placeholder="Password"></input>
          </form>
          <p><button class="button" id="loginButton" onClick={(e) => this.loginProcedure()}>Log In</button><p id="successParagraph"></p></p>
          <p><Link id="forgotPasswordLink" to="/login/#">Forgot Password?</Link></p>
          <Link to="/register"><button class="button" id="signUpButton">Don't have an account? Sign Up Here!</button></Link>
        </center>
        <div class="Footer">
          <div class="Flex">
          </div>
        </div>

        </div>
      </div>
    );
  }
};