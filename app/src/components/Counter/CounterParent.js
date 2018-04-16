import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import unmountComponentAtNode from 'react-dom';

const propTypes = {
    title: PropTypes.string
    }, defaultProps = {
        title: 'Count is '
    }

export default class CounterParent extends Component {
    state = {
        count: 0
    }

    // getDefaultProps() { } initial render, not in ES6

    // getInitialState() { } initial render, no in ES6, just use state

    // update phase: state changes and props changes
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate: Component is about to update!');
    }

    // update phase: state changes and props changes
    componentDidUpdate(currentProps, currentState) {
        console.log('componentDidUpdate: Component just updated!');
    }

    // initial render
    componentWillMount() {
        console.log('componentWillMount: Component is about to mount!');
    }

    // initial render
    componentDidMount() {
        console.log('componentDidMount: Component just mounted!');
    }

    // destroyed from DOM
    componentWillUnmount() {
        console.log('componentWillUnmount: Component is about to be removed from the DOM!');
    }

    // update phase: state chages and props changes
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate: should component update?');
     
        if (newState.id < 2) {
          console.log('shouldComponentUpdate: component should update!');
          return true;
        } else {
          //unmountComponentAtNode(destination);
          console.log('shouldComponentUpdate: component should not update!');
          return false;
        }
    }

    // update phase: props changes
    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps: component will get new props!');
    }
    
    // initial render, update phase: state and props changes
    render() {
        const { title } = this.props;
        let backgroundStyle = {
            padding: 20,
            border: '#cc 1px dotted',
            width: 100,
            height: 100,
            borderRadius: 4,
            textAlign: 'center'
        };

        return (
            <div style={backgroundStyle}>
                <p>{title} {this.state.count}</p>  
            </div>  
        );
    }    
};

CounterParent.propTypes = propTypes;
CounterParent.defaultProps = defaultProps;