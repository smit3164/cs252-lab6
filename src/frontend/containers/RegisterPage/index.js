import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';

import './styles.scss';

export default class Register extends React.Component {


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

  verifyEmail(email) {
    //console.log('Inputted email (verifyEmail): ', email);

    //modular regex design
    var emailregex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    //check if email looks like an email
    if(email.match(emailregex) == null){
      return false;
    }

    return true;
  }

  signUpProcedure() {
    document.getElementById("passwordPrompt").textContent = "";
    document.getElementById("emailPrompt").textContent = "";
    document.getElementById("confirmPrompt").textContent = "";

    // Grab username and password from field
    var username = document.getElementById("usernameField").value;
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;
    var confirmPassword = document.getElementById("confirmPasswordField").value;

    console.log('Inputted username (signUpProcedure): ', username);
    console.log('Inputted email (signUpProcedure): ', email);
    console.log('Inputted password (signUpProcedure): ', password);
    console.log('Inputted password #2 (signUpProcedure): ', confirmPassword);


    if (password == confirmPassword) {
      if ((this.verifyEmail(email)) == true) {
        console.log('Valid email!');
        
          if ((this.verifyPass(password)) == true) {
            console.log('Valid password!');

            // Connect with backend to register account
            
              this.props.history.push('/login');
          

          } else {
            console.log('Invalid password! Make sure your password contains at least 1 number and is longer than 6 characters');
            document.getElementById("passwordPrompt").textContent = "(Invalid password! Make sure your password contains at least 1 number and is longer than 6 characters)";
            document.getElementById("passwordPrompt").style = "color:red;";
          }
      } else {
        console.log('Invalid email!');
        document.getElementById("emailPrompt").textContent = "(Invalid email!)";
        document.getElementById("emailPrompt").style = "color:red;";
      }
    } else {
      console.log('Passwords do not match, check again');
      document.getElementById("confirmPrompt").textContent = "(Passwords are not the same, check again!)";
        document.getElementById("confirmPrompt").style = "color:red;";
    }
  }


  enterPressedOnEmail() {
    if (event.keyCode === 13) {
      document.getElementById("signUpButton").click();
    }
  }

  handlePasswordChange(event) {
    if (this.verifyPass(event.target.value)) {
      document.getElementById("passwordPrompt").textContent = "";
    }
  }

  handleEmailChange(event) {
    if (this.verifyEmail(event.target.value)) {
      document.getElementById("emailPrompt").textContent = "";
    }
  }

  render() {
    return (
      <div class="registerPage">
        <div class="Content">
        <center>
          <h2>Register</h2>
          <form>
            <p>Username<p id="usernamePrompt"></p></p>
            <input type="text" name="usernameField" id="usernameField" placeholder="Username" ></input><br></br>
            <p>Password<p id="passwordPrompt"></p></p>
            <input type="password" name="passwordField" id="passwordField" onChange={(event) => {this.handlePasswordChange(event)}} placeholder="Password"></input><br></br>
            <p>Confirm Password<p id="confirmPrompt"></p></p>
            <input type="password" name="confirmPasswordField" id="confirmPasswordField" placeholder="Confirm Password"></input><br></br>
            <p>Email<p id="emailPrompt"></p></p>
            <input type="text" name="emailField" id="emailField"  onChange={(event) => {this.handleEmailChange(event)}} onKeyDown={(e) => this.enterPressedOnEmail()}  placeholder="someone@example.com"></input><br></br>
          </form>
          <p><button id="signUpButton" class="button" onClick={(e) => this.signUpProcedure()}>Sign Up</button><p id="successParagraph"></p></p>

          <Link to="/login"><button class="button" id="loginButton">Already have an account? Log In</button></Link>
        </center>
        <div class="Footer"></div>
          <div class="Flex">
          </div>
        </div>

      </div>
    );
  }
};