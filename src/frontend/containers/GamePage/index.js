import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import { hasAccountToken } from '@/utils';
import { Button, Modal, Icon } from 'semantic-ui-react';


import './styles.scss';


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      showHomeModal: false
    }
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

  goHome = () => {
    this.props.history.push("/");
  }


  render() {
    if (!hasAccountToken()) {
      return(
        <Redirect to="/" />
      );
    }

    return (
      <div class="gamePage">
        <div class="Content">
        <center>
          <h2>Game</h2>
          <Button id="homeButton" onClick={this.openModal}>Back to Home Page</Button>


          <Modal
                open={this.state.showHomeModal}
                onClose={this.closeModal}
                closeIcon
              >
                <Modal.Header>Leave Game</Modal.Header>
                <Modal.Content>
                  <p>Are you sure you want to leave the game and go back to the home page?</p>
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
        </center>
          <div class="Flex">
          </div>

        </div>
      </div>
    );
  }
};