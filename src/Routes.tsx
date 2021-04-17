import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CountryCard from './pages/cards/CountryCard'

import Home from './pages/home/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/countries/:alpha" component={CountryCard} />
  </Switch>
)

export default Routes
