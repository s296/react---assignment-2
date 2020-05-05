import React from 'react';
import logo from './logo.svg';
// import './App.css';

import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends React.Component {
  state = {
    username : 'supermax'
  }

  usernameChangeHandler = (event) => {
    this.setState({username : event.target.value})   // u can't change the name { target , value} these both are predefined
  }

  render() {
    return (
      <div className = "App">
        <ol>
          <li>hi</li>
          <li>shubham</li>
        </ol>
        <UserInput 
          changed={this.usernameChangeHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="dev"/>
        <UserOutput userName="ram"/> 
      </div>

    )
  }
}

export default App;
