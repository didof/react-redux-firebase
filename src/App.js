// dependencies
import React from 'react'
// router
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// layout
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import SignUp from './components/auth/SignUp/'
import SignIn from './components/auth/SignIn/'
import CreateProposal from './components/users/createProposal/'
import DetailProposal from './components/users/detailProposal/'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/new-proposal" component={CreateProposal} />
          <Route path="/proposal/:id" component={DetailProposal} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
