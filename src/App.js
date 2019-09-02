import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component'

class App extends Component {

  constructor() {

    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
        .then(users => this.setState({ monsters: users })));

  }

  render() {
    return (

      <div className="App">

        <input

          type='search'
          placeholder='search monsters'
          onChange={e => {

            this.setState(
              { searchField: e.target.value },() => {
                console.log(this.state);
              });
          }} />

        <CardList monsters={this.state.monsters}>
        </CardList>

      </div>

    );
  }

}

export default App;
