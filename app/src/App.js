import React, { Component } from 'react';

import Word from './components/Word/';
import PaletteCard from './components/PaletteCard/';
import Documents from './components/Documents/';
import Shirt from './components/Shirt/';
import LightningCounterDisplay from './components/LightningCounter/LightningCounterDisplay';
import Counter from './components/Counter/';

import Spinner from './ui/Spinner';

import { theCircle, showCircle } from './ui/Circle';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          {/* <Word />
          <hr />  

          <PaletteCard color="#FF6663" />
          <PaletteCard color="#FFA737" />
          <hr /> 

          <Shirt color="steelblue" num="4" size="medium" />
          <hr /> */}
           
          <Documents {...this.props} /> 
          {/* <hr /> 

          <Spinner 
              title="Please wait"
              subTitle="Uploading document text"
          />
          <hr />

          <LightningCounterDisplay />
          <hr />
         
          { theCircle }
          { showCircle() }
          <hr />

          <Counter />
          <hr /> */}
      </div>
    );
  }
}
