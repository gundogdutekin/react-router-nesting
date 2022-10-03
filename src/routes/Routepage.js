import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/Users'
function Routepage() {
  
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/users' component={Users} />
    </Switch>
  )
}

export default Routepage
