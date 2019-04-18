import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'

import Home from '@/containers/HomePage'
import Login from '@/containers/LoginPage'
import Register from '@/containers/RegisterPage'
import Game from '@/containers/GamePage'
import Leaderboard from "@/containers/LeaderboardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/game" component={Game} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="*" render={() => (<Redirect to="/"/>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;