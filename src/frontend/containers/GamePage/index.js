import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import { hasAccountToken } from '@/utils';
import { Button, Modal, Icon } from 'semantic-ui-react';
import GameCell from '../../components/GameCell/index.js';
import GameBoard from '../../components/GameBoard/index.js';

import './styles.scss';

var playerArray = ["A", "B", "C", "D"];
var lastPosArray = [null, null, null, null];

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
      activePlayer: 0,
      //number of seconds per turn
      activePlayerPosition: 0,
      turnTime: 60,
      inventoryVisible: false,
      board: Array(9).fill(null)
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

  onClick(index) {
    let newBoard = this.state.board
    console.log(index);
    newBoard[index] = playerArray[this.state.activePlayer];
    (lastPosArray[this.state.activePlayer] != null) ? (newBoard[lastPosArray[this.state.activePlayer]] = null)
      : ( console.log("Turn 1") )
    lastPosArray[this.state.activePlayer] = index;
    let newActivePlayer = (this.state.activePlayer+1) % 4;

    this.setState({
      board: newBoard,
      activePlayerPosition: index,
      activePlayer: newActivePlayer
    })
  }

  render() {
    if (!hasAccountToken()) {
      return(
        <Redirect to="/" />
      );
    }

    const Board = this.state.board.map(
      (box, index) => <div className="box"
      onClick={() => this.onClick(index)} key={index}>
      {box}
      </div>)

    return (
      <div class="gamePage">
        <div class="Content">
        <center>
          <h2>Game</h2>
          <Button id="homeButton" onClick={this.openModal}>Back to Home Page</Button>
          <Button id="inventoryButton" onClick={this.showInventory}>Inventory</Button>

          <div className="container">
            <div className="board">
              {Board}
            </div>
          </div>

          <p>activePlayerPosition: {this.state.activePlayerPosition}</p>
          <p>activePlayer: {this.state.activePlayer}</p>

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

//<GameBoard id="currentGame" activePlayerPosition={this.state.activePlayerPosition} />
// legacy GameBoard component
