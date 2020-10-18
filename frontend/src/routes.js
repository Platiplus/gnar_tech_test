import React from 'react'
import { Provider } from 'react-redux'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// REDUX STORE
import Store from './configuration/store'

// PAGES
import { Upload, Explore } from './pages'

const Routes = () => (
  <Provider store={Store}>
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
  </Provider>
)

export default Routes
