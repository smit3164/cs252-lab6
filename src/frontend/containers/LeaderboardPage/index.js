import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import * as firebase from 'firebase';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import './styles.scss';


export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let cs = console;
    let self = this;
    let currData = [];
    
    firebase.database().ref("PlayerInfo/listOfPlayers").once('value', snap => {
      snap.forEach(snapChild => {
        currData.push(snapChild.toJSON());
      });
      
      this.setState( {
        data: currData
      });
      cs.log('data', self.state.data);
    });

    

  }

  render() {
    const columns = [
      {
        Header: "User",
        accessor: "email"
      },
      {
        Header: "Kills",
        accessor: "kills"
      },
      {
        Header: "Wins",
        accessor: "wins"
      }
    ]
    return (
      <div className="leaderboardPage">
        <div className="Content">
        <center>
          <h2>Leaderboard</h2>
          
          <Link to="/"><Button id="homeButton"><Icon name='arrow left' />Back to Home Page</Button></Link>
          <br /><br />
          <ReactTable
            columns={columns}
            data={this.state.data}
            filterable
            defaultPageSize={10}
            noDataText='There is no such data!'
          >

          </ReactTable>
        </center>
          <div className="Flex">
          </div>

        </div>
      </div>
    );
  }
};
