import React from 'react';
import './App.css';

class App extends React.Component  {
  constructor(props){
    super (props);
    this.state = {
      monsters:[]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(response => this.setState({monsters:response}));
  }

  render(){
    return (
      <div className="App">
          {this.state.monsters.map(monster =><h1 key={monster.id}>{monster.name}</h1> )}
      </div>
    );
  }

}

export default App;
