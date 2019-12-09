import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import './App.css'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Morgan', age: 20, belt: 'black', id: 1 },
      { name: 'Chesney', age: 20, belt: 'orange', id: 2 },
      { name: 'Jordan', age: 21, belt: 'brown', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    });
  }
  componentDidMount(){
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
