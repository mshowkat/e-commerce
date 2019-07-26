import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage-comp'
import ShopPgae from './pages/shop/shop-comp.jsx'
import { Switch, Route } from "react-router-dom";
import Header from "./component/header/header.jsx";
import Sign from "./pages/signNDlogin/sign.jsx";
import { auth } from "./firebase/firebaseUtils"

class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      currentUser : null
    }
  } //constructor ends here

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user })
      console.log(user)
    })
  }//componentDidMount ends here

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPgae} />
          <Route path='/signin' component={Sign} />
        </Switch>
      </div>
    )
  }//render ends here
}

export default App;
