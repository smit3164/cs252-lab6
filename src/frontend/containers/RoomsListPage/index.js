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


    if (row.original.playerCount < row.original.playerLimit) {
      let url = '/game/' + row.original.uid;

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
