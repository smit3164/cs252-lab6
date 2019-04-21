import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from "react-router-dom";
import { Button, Modal, Icon } from 'semantic-ui-react';
import { hasAccountToken } from '@/utils';
import './styles.scss';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showLogoutModal: false
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

  logoutProcedure = () => {
    localStorage.removeItem('accountToken');
    this.props.history.push("/");
  }

  render() {
    if (hasAccountToken()) {
      return (
        <div class="homePage">
          <div class="Content">
            <center>
              <h2>Sneaky Strikers</h2>
              <Link to="/game"><Button id="startButton">Start a game</Button></Link>
              <Link to="/leaderboard"><Button id="leaderboardButton">Leaderboard</Button></Link>
              <Button onClick={this.openModal}>Log out</Button>

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
            <div class="Flex">
          </div>
          </div>
        </div>
      );
    }
    return (
      <div class="homePage">
        <div class="Content">
          <center>
            <h2>Sneaky Strikers</h2>
            <Link to="/login"><Button id="loginButton">Log In</Button></Link>
            <Link to="/register"><Button id="signUpButton">Register</Button></Link>
            <Link to="/leaderboard"><Button id="leaderboardButton">Leaderboard</Button></Link>
          </center>
          <div class="Flex">
          </div>
        </div>
      </div>
    );
  }
};
