import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import GoodDetail from './pages/GoodDetail'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/GoodDetail' component={GoodDetail} />
    </Switch>
  </HashRouter>
)

export default BasicRoute;
