import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';
import { ButtonGroup } from 'react-bootstrap';

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

    handleDecrease = (event) => {
        let currentCount = this.state.count;

        if (event.shiftKey) {
            currentCount -= 2;
        } else {
            currentCount -= 1
        }
        this.setState({ count: currentCount })
    }

    render() {
        let backgroundStyle = {
            padding: 20,
            backgroundColor: "#FFC53A",
            width: 100,
            height: 80,
            borderRadius: 4,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Display display={this.state.count} />
                <ButtonGroup>
                    <Button 
                        display='+' 
                        clickHandler={this.handleIncrease} />
                    <Button 
                        display='-' 
                        clickHandler={this.handleDecrease} />
                </ButtonGroup>    
            </div>  
        );
    }    
};
