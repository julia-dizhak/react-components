import React, { Component } from 'react';
const xhr = new XMLHttpRequest();

export default class IPAddressContainer extends Component {
    state = {
        ip_address: '...'
    }

    componentDidMount() {
        xhr.open('GET', 'https://ipinfo.io/json', true);
        xhr.send();

        xhr.addEventListener('readystatechange', this.handleProcessRequest, false)
    }

    handleProcessRequest = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);

            this.setState({ ip_address: response.ip})
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div>{this.state.ip_address}</div>
                <span>This is your IP address...probably :P</span>
            </React.Fragment>
        );
    }
}