import React, { Component } from 'react';

export default class LightningCounter extends Component {
    state = {
        strikes: 0
    }

    getInitialState()  {
        return {
            strikes: 1
        }
    };

    timerTick = () => {
        this.setState({
            strikes: this.state.strikes + 100
        });
    }

    componentDidMount() {
      //setInterval(this.timerTick, 1000)
    }
    
    render() {
        return (
            <h1>{this.state.strikes}</h1>
        );
    }
}