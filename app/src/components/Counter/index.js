import React, { Component } from 'react';
import Display from './Display';

export default class Counter extends Component {
    state = {
        count: 0
    }

    getInitialState() {
        return {
            count: 0
        }
    }

    handleIncrease = (event) => {
        //let state = {...this.state}
        //let currentCount = {...this.state.count};
        let currentCount = this.state.count;

        if (event.shiftKey) {
            currentCount += 2;
        } else {
            currentCount += 1
        }
        this.setState({ count: currentCount })
    }

    render() {
        //const { display } = props;

        let backgroundStyle = {
            padding: 20,
            backgroundColor: "#FFC53A",
            width: 100,
            height: 80,
            borderRadius: 4,
            textAlign: "center"
        };

        let buttonStyle = {
            fontSize: '1em',
            width: 30,
            height: 30,
            fontFamily: 'sans-serif',
            color: '#333',
            fontWeight: 'bold',
            lineHeight: '3px',
            cursor: 'pointer'
        };

        return (
            <div style={backgroundStyle}>
                <Display display={this.state.count} />
                
                <button 
                    style={buttonStyle} 
                    onClick={this.handleIncrease}>+</button>
            </div>  
        );
    }    
};
