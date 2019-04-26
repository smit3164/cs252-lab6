import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import { hasAccountToken } from '@/utils';
import { Button, Modal, Icon } from 'semantic-ui-react';
import GameCell from '../../components/GameCell/index.js';
import GameBoard from '../../components/GameBoard/index.js';
import * as firebase from 'firebase'

import './styles.scss';

//localStorage.getItem('user') for UIDs
var markerArray = ["A", "B", "C", "D"];
var lastPosArray = [0, 7, 56, 63];


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    let newBoard = Array(64).fill("");
    newBoard[0] = "A"
    newBoard[7] = "B"
    newBoard[56] = "C"
    newBoard[63] = "D"

    this.state = {
      showHomeModal: false,
      //get gameID from database or generate new if no acceptable games exist
      gameID: "someRandomRoomUID",
      gameList: [],
      isPlaying: false,
      playerTable: null,
      playerCount: 0,
      aliveCount: 0,
      //get playerTable from database given gameID
      activePlayer: 0,
      chosenRPS: Array(3).fill(false),
      //number of seconds per turn
      turnCount:3,
      activePlayerPosition: 0,
      //turnTime: 60,
      inventoryVisible: false,
      board: newBoard,
      fbPlayerList: [],
      playerArray: []
    }
  }

  componentDidMount() {
    this.setState({
      gameID: this.props.match.params.gameID
    })
    let self = this;
    let currData = [];

    firebase.database().ref("Rooms/"+this.state.gameID+"/players").on('value', snap => {
      snap.forEach(snapChild => {
        currData.push(snapChild.toJSON());
      });

      this.setState( {
        fbPlayerList: currData
      });
      //console.log(self.state.fbPlayerList[0].blockNum);
      ///console.log(self.state.fbPlayerList[0].isAlive);
      let pa = this.state.playerArray;
      for(let i in self.state.fbPlayerList) {
        pa[i] = self.state.fbPlayerList[i]
        console.log(pa[i].isAlive)
      }
      this.setState({
        playerArray: pa
      })
    });

    firebase.database().ref("Rooms/"+this.state.gameID).on('value', snap => {
      snap.forEach(snapChile => {
        currdata.push(snapChild.toJSON());
      });

      this.setState({
        isPlaying: currData[0].isPlaying,
        playerCount: currData[0].playerCount
      })
    })
  }

  /*updateTurnTime = (reset) => {
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
  }*/

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
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
  /*showInventory =() => {
    this.setState({
      inventoryVisible: true
    })
    console.log("showInventory");
  }
  hideInventory = () => {
    this.setState({
      inventoryVisible: false
    })
  }*/

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

  setRPS = (num) => {
    let arr = Array(3).fill(false);
    arr[num] = true;
    this.setState({
      chosenRPS: arr
    });
    //move to playerTable[i+1]
  }

  movePossible(src, dest) {

    // (src%8!=0&&src%8!=7)
    return (this.state.fbPlayerList.length == 4) && (this.state.chosenRPS[0]||this.state.chosenRPS[1]||this.state.chosenRPS[2]) && (((src - 1 === dest) && (src%8!=0 && dest%8!=7)) ||
      ((src + 1 === dest) && (src%8!=7 && dest%8!=0)) ||
      (src + 8 === dest) ||
      (src - 8 === dest))
    }

  onClick(index) {
    console.log(index);
    //************************************************
    //console.log("test: ", this.state.fbPlayerList[0].blockNum)
    console.log("playerArray[0].isAlive: ", this.state.playerArray[0].isAlive)
    if(this.state.playerArray[1] != null) {
      console.log("playerArray[1].isAlive: ", this.state.playerArray[1].isAlive)
    }
    if(this.movePossible(lastPosArray[this.state.activePlayer], index)) {
      for(let i = 0; i < 4; i++) {
        if(index != lastPosArray[this.state.activePlayer] && index == lastPosArray[i]) {
          console.log("Fight Clubbbbb")
          return
        }
      }
      let newBoard = this.state.board
      newBoard[index] = markerArray[this.state.activePlayer];
      (lastPosArray[this.state.activePlayer] != null && lastPosArray[this.state.activePlayer] != index) ?
        (newBoard[lastPosArray[this.state.activePlayer]] = null) :
        ( console.log("garbage blah blah") )
      lastPosArray[this.state.activePlayer] = index;

      let newActivePlayer = this.state.activePlayer;
      let tc = 0;
      if(this.state.turnCount == 3) {
          //next move
        tc = 2;
      } else if(this.state.turnCount == 2) {
        tc = 1;
      } else if(this.state.turnCount == 1) {
        let curr = this.state.activePlayer;
        // let playa = handleChangePlayer(curr);
        newActivePlayer = (this.state.activePlayer+1) % 4;
        tc = 3;
      } else if(this.state.turnCount == 0) {
        console.log("not right turn num left");
        newActivePlayer = 0;
        tc = 3;
      } else {
        console.log("Invalid activePlayer value")
      }
      console.log("tc= "+tc);
      this.setState({
        board: newBoard,
        activePlayerPosition: index,
        activePlayer: newActivePlayer,
        turnCount: tc
      })
    } else {
      console.log("Not a legal move.")
    }
  }

  render() {
    //Wait for game to start
    /*while(!this.state.isPlaying) {
      console.log("Waiting for players ("+this.state.playerCount+"/4)")
    }*/

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
      <div className="gamePage">
        <div className="Content">
        <center>
          <h1><b>Game</b></h1>
          <Button size="big" id="homeButton" onClick={this.openModal}><Icon name='arrow left' />Back to Home Page</Button>

          <div className="container">
            <div className="board">
              {Board}
            </div>
          </div>
          <Button.Group>
            <Button size="big" toggle active={this.state.chosenRPS[0]} onClick={() => this.setRPS(0)}><Icon name='hand rock' /></Button>
            <Button.Or size="big" />
            <Button size="big" toggle active={this.state.chosenRPS[1]} onClick={() => this.setRPS(1)}><Icon name='hand paper' /></Button>
            <Button.Or size="big" />
            <Button size="big" toggle active={this.state.chosenRPS[2]} onClick={() => this.setRPS(2)}><Icon name='hand scissors' /></Button>
          </Button.Group>
          <p>activePlayerPosition: {this.state.activePlayerPosition}</p>
          <p>activePlayer: {this.state.activePlayer}, {markerArray[this.state.activePlayer]}</p>
          <p>lastPosArray[{this.state.activePlayer}]: {lastPosArray[this.state.activePlayer]}</p>
          <p>Number Of Moves Remaining: {this.state.turnCount}</p>

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
          <div className="Flex">
          </div>

        </div>
      </div>
    );
  }
};

//<GameBoard id="currentGame" activePlayerPosition={this.state.activePlayerPosition} />
// legacy GameBoard component
