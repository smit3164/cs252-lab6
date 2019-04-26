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
var playerArray = ["A", "B", "C", "D"];
var lastPosArray = [0, 7, 56, 63];

export default class Game extends React.Component {
 constructor() {
   super();
   let newBoard = Array(64).fill("");
   newBoard[0] = "A"
   newBoard[7] = "B"
   newBoard[56] = "C"
   newBoard[63] = "D"

   this.state = {
     showHomeModal: false,
     //get gameID from database or generate new if no acceptable games exist
     gameID: 12345,
     playerTable: null,
     playerCount: 0,
     aliveCount: 4,
     //get playerTable from database given gameID
     activePlayer: 0,
     chosenRPS: Array(3).fill(false),
     //number of seconds per turn
     turnCount:3,
     activePlayerPosition: 0,
     turnTime: 60,
     inventoryVisible: false,
     board: newBoard,
     isAlive:Array(4).fill(true),
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
   return (this.state.chosenRPS[0]||this.state.chosenRPS[1]||this.state.chosenRPS[2]) && (((src - 1 === dest) && (src%8!=0 && dest%8!=7)) ||
     ((src + 1 === dest) && (src%8!=7 && dest%8!=0)) ||
     (src + 8 === dest) ||
     (src - 8 === dest))
   }

 onClick(index) {
   console.log(index);
   if(this.state.isAlive[this.state.activePlayer] == false) {
     let temp = (this.state.activePlayer+1) % 4;
     this.setState({
       activePlayer: temp
     });
     return;
   }else if(this.movePossible(lastPosArray[this.state.activePlayer], index)) {
     if (this.state.aliveCount == 1){
       console.log("you won!");
     }
     for(let i = 0; i < 4; i++) {
       if(index != lastPosArray[this.state.activePlayer] && index == lastPosArray[i]) {
         if(index != lastPosArray[this.state.activePlayer]) {
           //conflict
           console.log("Not" +i);
           // console.log(÷);
           let stuff = this.state.isAlive;
           stuff[i] = false;
           let ac = this.state.aliveCount-1;
           if (ac == 1){
             console.log("you won!");
             //randycode
             let uidPlayer = localStorage.getItem('uid');
             let firebaseLocation = 'PlayerInfo/listOfPlayers/' + uidPlayer;
             firebase.database().ref(firebaseLocation).once('value', snap => {
               let killAmount = snap.child('kills').val() + 3;
               let winAmount = snap.child('wins').val() + 1;

               const postData = {
                 kills: killAmount,
                 wins: winAmount
               }

               firebase.database().ref(firebaseLocation).update(postData);
             });
             
           }
           this.setState({
             isAlive: stuff,
             aliveCount: ac
           });

           let newBoard = this.state.board;
           newBoard[index] = playerArray[this.state.activePlayer];
           newBoard[lastPosArray[this.state.activePlayer]] = null;
           this.setState({
             board: newBoard
           });
           console.log("Not hitting yourself");
         }
         console.log("Fight Clubbbbb");
       }
     }
     let newBoard = this.state.board
     newBoard[index] = playerArray[this.state.activePlayer];
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

         <div>
                 {(this.state.aliveCount == 1) ? (
                   <center>
                     <h1><b>Game</b></h1>
                     <Button size="big" id="homeButton" onClick={this.openModal}><Icon name='arrow left' />Back to Home Page</Button>

                   <h3>You have WON!!</h3>
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
                 ) : (
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
                   <p>activePlayer: {this.state.activePlayer}, {playerArray[this.state.activePlayer]}</p>
                   <p>lastPosArray[{this.state.activePlayer}]: {lastPosArray[this.state.activePlayer]}</p>
                   <p>Number Of Turns Remaining: {this.state.turnCount}</p>

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
                 )}
        </div>
         <div className="Flex">
         </div>

       </div>
     </div>
   );
 }
};
