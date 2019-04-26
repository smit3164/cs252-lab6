import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'

import Home from '@/containers/HomePage'
import Game from '@/containers/GamePage'
import Leaderboard from "@/containers/LeaderboardPage";
import WaitingRoom from "@/containers/WaitingRoomPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={WaitingRoom} />
        <Route path="/game" component={Game} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="*" render={() => (<Redirect to="/"/>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;