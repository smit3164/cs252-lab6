import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';


import './styles.scss';


export default class Leaderboard extends React.Component {
 
  render() {

    return (
      <div class="leaderboardPage">
        <div class="Content">
        <center>
          <h2>Leaderboard</h2>
          <Link to="/"><Button id="homeButton">Back to Home Page</Button></Link>

        </center>
          <div class="Flex">
          </div>

        </div>
      </div>
    );
  }
};