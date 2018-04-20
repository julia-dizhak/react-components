import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default TheComponent =>
    class TheComponentWithPortal extends Component {
        constructor(props) {
            super(props);
            this.element = document.createElement('div');
        }

        componentDidMount() {
            document.body.appendChild(this.element);
        }

        componentWillUnmount() {
            document.body.removeChild(this.element);
        }

        render() {
            return createPortal(<TheComponent {...this.props} />, this.element);
        }
    };
