import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/products/:id" component={} /> */}
  </Switch>
)

export default Routes
