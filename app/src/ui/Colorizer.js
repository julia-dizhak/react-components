import React, { Component } from 'react';

export default class Colorizer extends Component {
    state = {
        color: '',
        bgColor: ''
    }

    handelColorValue = (event) => {
        this.setState({color: event.target.value})
    }

    setNewColor = event => {
        this.setState({ bgColor: this.state.color});

        this._input.value = '';
        this._input.focus();
        event.preventDefault();
    }

    render() {
        let squareStyle = {
            backgroundColor: this.state.bgColor,
            width: 100,
            height: 20,
            borderRadius: 4,
            margin: 10
        };

        return (
            <div className="colorArea">
                <p>Set color: </p>
                <div 
                    className="colorSquare"
                    style={squareStyle}>
                </div>

                <form onSubmit={this.setNewColor}>
                    <input 
                        ref={element => this._input = element}
                        onChange={this.handelColorValue}
                        placeholder="Enter a color value"
                    />
                    <button type="submit">set new color</button>  
                </form>     
            </div>  
        );
    }    
};
