import React, { Component } from 'react';

import Word from './UI/Word';
import PaletteCard from './UI/PaletteCard';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <Word />
          <hr />  

          <PaletteCard color="#FF6663" />
          <PaletteCard color="#FFA737" />
          <hr /> 
      </div>
    );
  }
}
