import React from 'react';
import Validation from './ValidationComponent/ValidationComponent.js';
import Char  from './Char/Char';

class App extends React.Component {
  
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput : event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedtext = text.join('');
    this.setState({userInput : updatedtext});
  }

    render() {
      const charList = this.state.userInput.split('').map((ch,index) => {
          return <Char 
          character={ch} 
          key={index}
          clicked={() => this.deleteCharHandler(index)}  />;
      });
    
    return (
      <div className = "App">
        <ol> 
          <li>hi</li>
          <li>shubham</li>
        </ol>
        <p>hint: </p>
        <hr/>
        <input  
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangeHandler}
           />

          <p>{this.state.userInput}</p>
          
          <Validation  inputLength={this.state.userInput.length}/> 
          {charList}
      </div>

    )   
  }
}

export default App;
