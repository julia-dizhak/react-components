import React, { Component } from 'react';

import './style.css';

import Header from './app/Header';
import Main from './app/Main';

import Shirt from './components/Shirt/';
import LightningCounterDisplay from './components/LightningCounter/LightningCounterDisplay';
import Colorizer from './ui/Colorizer';

import Spinner from './ui/Spinner';

import { theCircle, showCircle } from './ui/Circle';
import IPAddressContainer from './components/IPAddressContainer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />

          <Shirt color="steelblue" num="4" size="medium" />
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


          <Colorizer />

          <hr /> 
          <IPAddressContainer />
      </div>
    );
  }
}
