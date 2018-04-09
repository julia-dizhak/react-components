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

    render() {
        //const { display } = props;

        let backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
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
                <button style={buttonStyle}>+</button>
            </div>  
        );
    }    
};
