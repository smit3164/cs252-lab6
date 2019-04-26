import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from "react-router-dom";
import { Button, Modal, Icon, Form } from 'semantic-ui-react';
import { hasAccountToken } from '@/utils';
import './styles.scss';
import * as firebase from 'firebase';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
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


export default class RoomsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRoomName: '',
      showHomeModal: false,
      showRoomModal: false,
      data: []
    }
  }

  goHome = () => {
    this.props.history.push("/");
  }

  openHomeModal = () => {
    this.setState({
      showHomeModal: true
    })
  }

  openRoomModal = () => {
    this.setState({
      showRoomModal: true
    })
  }
  closeModal = () => {
    this.setState({
      newRoomName: '',
      showHomeModal: false,
      showRoomModal: false
    })
  }
  componentDidMount() {
    var update = firebase.database().ref("Rooms");
    update.on('value', snap => {
      let currData = [];
      snap.forEach(snapChild => {
        if (!(snapChild.child('isPlaying').val() === 'true' || snapChild.child('isPlaying').val() == true)) {
          currData.push(snapChild.toJSON());

        }
      });

      this.setState({
        data: currData
      });
      console.log('data', this.state.data);
    });

  }
  
  handleJoinRoomButton(row) {
    console.log('row: ', row);
    console.log('room uid: ', row.original.uid);
    let uidRoom = row.original.uid;
    let roomLocation = 'Rooms/' + uidRoom;
    let playerCountInRoom = Number(row.original.playerCount);
    let playerLimit = Number(row.original.playerLimit)
    let uidPlayer = localStorage.getItem('uid');
    let playerLocation = roomLocation + '/players/' + uidPlayer;
    let playersLocations = roomLocation + '/players'; 
    let alreadyExists = false;


    // If the user is already in the room, join without changing properties
    firebase.database().ref(playersLocations).once('value', snap => {
      if (!snap.hasChild(uidPlayer)) {
        if (playerCountInRoom < playerLimit) {


          console.log('uidPlayer: ', uidPlayer);
    
          let blockPlacement = 0;
    
          if (playerCountInRoom == 1) {
            blockPlacement = 7
          } else if (playerCountInRoom == 2) {
            blockPlacement = 56;
          } else {
            blockPlacement = 63
          }
    
    
          const postDataCount = {
            playerCount: (playerCountInRoom + 1)
          }
          // Update Player Count
          firebase.database().ref(roomLocation).update(postDataCount);
    
          const postDataPlayer = {
            uid: uidPlayer,
            blockNum: blockPlacement,
            isAlive: true,
            isTurn: false,
            kills: 0,
            enterOrder: playerCountInRoom
          }
    
          // Add player to the Players in Room
          firebase.database().ref(playerLocation).set(postDataPlayer);
    
    
          // Check if game should start
          if (playerCountInRoom + 1 >= playerLimit) {
            let i = 0;
            const postPlayerInBlock = {
              playerInBlock: ''
            }
    
            const postUpdatePlayingBool = {
              isPlaying: true
            }
    
            // Create the map
            for (i = 0; i < 64; i++) {
                let mapLocation = roomLocation + '/Map/block' + i;
                firebase.database().ref(mapLocation).set(postPlayerInBlock);
            }
    
            // Update blockNum in map
            firebase.database().ref(playersLocations).once('value', snap => {
              snap.forEach(snapChild => {
                let someUID = snapChild.child('uid').val();
                let someBlockNum = roomLocation + '/Map/block' + snapChild.child('blockNum').val();
                
                const updateBlock = {
                  playerInBlock: someUID
                }
                firebase.database().ref(someBlockNum).update(updateBlock);
    
    
    
              });
            });
            // Start the game
            firebase.database().ref(roomLocation).update(postUpdatePlayingBool);
          }
          let url = '/game/' + uidRoom;
          this.props.history.push(url);
          
          
    
        }
        
      } else {
        let url = '/game/' + uidRoom;
        this.props.history.push(url);
      }
    });

    

  }

  newRoomProcess = () => {
    console.log('room name entered: ', this.state.newRoomName);
    let uidRoom = Math.random().toString(36).substring(7);
    console.log("random", uidRoom);

    let roomName = this.state.newRoomName;
      let roomLocation = '/Rooms/' + uidRoom;
      let uidPlayer = localStorage.getItem('uid');
      let playerLocation = roomLocation + '/players/' + uidPlayer;

      console.log('uidPlayer: ', uidPlayer);



      const postDataCount = {
        playerCount: 1,
        playerLimit: 4,
        isPlaying: false,
        nameOfRoom: roomName,
        uid: uidRoom
      }
      // Create room
      firebase.database().ref(roomLocation).set(postDataCount);

      const postDataPlayer = {
        uid: uidPlayer,
        blockNum: 0,
        isAlive: true,
        isTurn: true,
        kills: 0,
        enterOrder: 0
      }

      // Add player to the Players in Room
      firebase.database().ref(playerLocation).set(postDataPlayer);

      this.closeModal();

      let url = '/game/' + uidRoom;
      this.props.history.push(url);

  }

handleChange = (e, { name, value }) => this.setState({ [name]: value})

render() {

    if (!hasAccountToken()) {
        return(
          <Redirect to="/" />
        );
      }

      const { newRoomName } = this.state;

      const columns = [
        {
          Header: "Name of Room",
          accessor: "nameOfRoom"
        },
        {
          Header: "Players in Room",
          accessor: "playerCount"
        },
        {
          Header: "Max Players",
          accessor: "playerLimit"
        },
        {
          Header: "",
          id: "joinRoom",
          aggregate: vals => {
  
          },
          Cell: row => {
  
            return (
              <div>
                <Button onClick={() => this.handleJoinRoomButton(row)}>Join Room</Button>
              </div>
            );
  
  
          },
          sortable: false,
          filterable: false,
          resizable: false,
          width: 200
        }
      ]


    return (
      <div className="roomsListPage">
        <div className="Content">
          <center>
            <h2>Rooms</h2>
            <Button id="homeButton" onClick={this.openHomeModal}><Icon name='arrow left' />Back to Home Page</Button>
            <Button id="createButton" onClick={this.openRoomModal}><Icon name='user plus' />Create New Room</Button>
            <br /><br />
            <div className="table">
              
            <ReactTable
        columns={columns}
        data={this.state.data}
        filterable
        defaultPageSize={10}
        noDataText='There are no rooms right now'
      >

      </ReactTable>

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

                <Modal
                  open={this.state.showRoomModal}
                  onClose={this.closeModal}
                  closeIcon
                >
                  <Modal.Header>Create New Room</Modal.Header>
                  <Modal.Content>
                    <Form >
                      <Form.Input inline label='Name of New Room:'
                       placeholder='New Room Name' name='newRoomName' value={newRoomName}
                       onChange={this.handleChange}/>
                    </Form>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='green' onClick={this.newRoomProcess}>
                      <Icon name='checkmark' /> Create New Room
                  </Button>
                    <Button color='red' onClick={this.closeModal}>
                      <Icon name='remove' /> Cancel
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
