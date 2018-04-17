import React, { Component } from 'react';

import './style.css';

import Header from './app/Header';
import Main from './app/Main';


import Documents from './components/Documents/';
import Shirt from './components/Shirt/';
import LightningCounterDisplay from './components/LightningCounter/LightningCounterDisplay';

import CounterParent from './components/Counter/CounterParent';
import Colorizer from './ui/Colorizer';

import Spinner from './ui/Spinner';

import { theCircle, showCircle } from './ui/Circle';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        
        
          {/* <PaletteCard color="#FF6663" />
          <PaletteCard color="#FFA737" />
          <hr />  */}

          <Shirt color="steelblue" num="4" size="medium" />
          <hr /> 
           
          {/* <Documents {...this.props} />   */}
          <hr /> 

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

         

          {/* <CounterParent /> */}
          <hr />

          <Colorizer />
      </div>
    );
  }
}
