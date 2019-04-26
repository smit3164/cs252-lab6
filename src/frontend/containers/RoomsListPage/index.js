import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from "react-router-dom";
import { Button, Modal, Icon } from 'semantic-ui-react';
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
      showHomeModal: false,
      data: []
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
  componentDidMount() {
    var update = firebase.database().ref("Rooms");
    update.on('value', snap => {
      let currData = [];
      snap.forEach(snapChild => {
        currData.push(snapChild.toJSON());
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
    let playerCountInRoom = Number(row.original.playerCount);
    let playerLimit = Number(row.original.playerLimit)


    if (playerCountInRoom < playerLimit) {
      let uidRoom = row.original.uid;
      let roomLocation = '/Rooms/' + uidRoom;
      let uidPlayer = localStorage.getItem('uid');
      let playerLocation = roomLocation + '/players/' + uidPlayer;

      console.log('uidPlayer: ', uidPlayer);

      let blockPlacement = 0;

      if (playerCountInRoom == 1) {
        blockPlacement = 6
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
          playerinBlock: ''
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
        let playersLocations = roomLocation + '/players'; 
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

  }
render() {

    if (!hasAccountToken()) {
        return(
          <Redirect to="/" />
        );
      }

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
            <Button id="homeButton" onClick={this.openModal}><Icon name='arrow left' />Back to Home Page</Button>
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
              </div>
          </center>
          <div className="Flex">
          </div>
        </div>
      </div>
    );

}
};
