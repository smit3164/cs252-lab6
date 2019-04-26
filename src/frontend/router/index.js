import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'

import Home from '@/containers/HomePage'
import Game from '@/containers/GamePage'
import SGame from '@/containers/SGamePage'
import Leaderboard from "@/containers/LeaderboardPage";
import RoomsList from "@/containers/RoomsListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={RoomsList} />
        <Route path="/sgame/:game" component={SGame} />
        <Route path="/game/:gameID?" component={Game} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="*" render={() => (<Redirect to="/"/>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
