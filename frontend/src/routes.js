import React from 'react'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

//pages
import {
  Upload,
  Explore
} from './pages'

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path='/' exact>
        <Redirect to="/upload" />
      </Route>
      <Route path='/upload' component={Upload} exact />
      <Route path='/explore' component={Explore} exat/>
    </Switch>
  </Router>
)

export default Routes
