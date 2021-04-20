import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CountryCard from './pages/cards/CountryCard'
import ThemeProvider from './pages/drawers/themes/ThemeProvider'

import Home from './pages/home/Home'

const Routes = () => (
  <ThemeProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries/:alpha" component={CountryCard} />
    </Switch>
  </ThemeProvider>
)

export default Routes
