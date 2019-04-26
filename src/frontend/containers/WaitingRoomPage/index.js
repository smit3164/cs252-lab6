import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from "react-router-dom";
import { Button, Modal, Icon } from 'semantic-ui-react';
import { hasAccountToken } from '@/utils';
import './styles.scss';
import * as firebase from 'firebase';
import RoomList from '@/components/RoomList'


/*var config = {
	apiKey: "AIzaSyALA3XU5__hCv9xc0a0siWrdJEdEOU1bzg",
	authDomain: "sneaky-strikers.firebaseapp.com",
	databaseURL: "https://sneaky-strikers.firebaseio.com",
	projectId: "sneaky-strikers",
	storageBucket: "sneaky-strikers.appspot.com",
	messagingSenderId: "586549421572"
  };

firebase.initializeApp(config);*/


export default class WaitingRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      showHomeModal: false
    }
  }

  goHome = () => {
    this.props.history.push("/");
  }

  openModal = () => {
    this.setState({
      showHomeModal: true
    })
  }
  closeModal = () => {
    this.setState({
      showHomeModal: false
    })
  }
render() {

    if (!hasAccountToken()) {
        return(
          <Redirect to="/" />
        );
      }

    return (
      <div className="waitingRoomPage">
        <div className="Content">
          <center>
            <h2>Rooms</h2>
            <Button id="homeButton" onClick={this.openModal}><Icon name='arrow left' />Back to Home Page</Button>
            <br /><br />
            <div className="table">
              <RoomList />
              <Modal
                  open={this.state.showHomeModal}
                  onClose={this.closeModal}
                  closeIcon
                >
                  <Modal.Header>Leave Waiting Room</Modal.Header>
                  <Modal.Content>
                    <p>Are you sure you want to leave the waiting room and go back to the home page?</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='green' onClick={this.goHome}>
                      <Icon name='checkmark' /> Yes
                  </Button>
                    <Button color='red' onClick={this.closeModal}>
                      <Icon name='remove' /> No, do not leave
                  </Button>
                  </Modal.Actions>
                </Modal>
              </div>
          </center>
          <div className="Flex">
          </div>
        </div>
      </div>
    );

}
};
