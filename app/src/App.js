import React, { Component } from 'react';

import Word from './UI/Word';
import PalleteCard from './UI/Word';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <Word />
          <hr />  

          <PalleteCard />
          <hr /> 
      </div>
    );
  }
}
