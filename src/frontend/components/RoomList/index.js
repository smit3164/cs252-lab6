import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import ReactTable from 'react-table'
import * as firebase from 'firebase';
import 'react-table/react-table.css'
import {Link, Redirect} from 'react-router-dom';


export default class RoomList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
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

      return(
        <Redirect to={url}/>
      );
    }

  }

  componentWillUnmount() {
    //this.update.off();
  }

  render() {
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
      <ReactTable
        columns={columns}
        data={this.state.data}
        filterable
        defaultPageSize={10}
        noDataText='There are no rooms right now'
      >

      </ReactTable>
    );
  }
}