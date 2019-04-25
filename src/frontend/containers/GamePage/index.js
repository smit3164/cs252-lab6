import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import { hasAccountToken } from '@/utils';
import { Button, Modal, Icon } from 'semantic-ui-react';
import GameCell from '../../components/GameCell/index.js';
import GameBoard from '../../components/GameBoard/index.js';

import './styles.scss';


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      showHomeModal: false,
      //get gameID from database or generate new if no acceptable games exist
      gameID: 12345,
      playerTable: null,
      playerCount: 0,
      aliveCount: 0,
      //get playerTable from database given gameID
      activePlayer: /*playerTable[0]*/null,
      //number of seconds per turn
      turnTime: 60,
      inventoryVisible: false,
      activePlayerPosition: 0
    }
  }

  updateTurnTime = (reset) => {
    if(reset) {
      this.setState({
        turnTime: 60
      })
    } else {
      this.setState({
        turnTime: this.turnTime-1
        // Not sure if this works
      })
    }
  }
  updateAliveCount = (death) => {
    if(death) {
      this.setState({
        aliveCount: this.aliveCount-1
      })
    } else {
      this.setState({
        aliveCount: this.AliveCount+1
      })
    }
  }
  updatePlayers = (joined/*, playerID somehow*/) => {
    if(joined) {
      this.setState({
        playerCount: this.playerCount+1
      })
      //add playerID to playerTable
    } else {
      this.setState({
        playerCount: this.playerCount-1
      })
      //remove playerID from playerTable
    }
  }
  updateActivePlayer = () => {
    //move to playerTable[i+1]
  }
  showInventory =() => {
    this.setState({
      inventoryVisible: true
    })
    console.log("showInventory");
  }
  hideInventory = () => {
    this.setState({
      inventoryVisible: false
    })
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
          <GameBoard activePlayerPosition={this.state.activePlayerPosition} />
          <Button id="inventoryButton" onClick={this.showInventory}>Inventory</Button>

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
