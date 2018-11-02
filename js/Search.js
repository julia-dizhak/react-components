import React, { Component } from 'react';
import preload from '../data.json';

import ShowCard from './ShowCard';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTearm: ''
        }

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    // state = {
    //     searchTearm: ''
    // }

    handleSearchTermChange(event) {
        this.setState({searchTearm: event.target.value})
    }

    render() {
        return (
            <div className="search">
                <div className="search-input">
                    <h1>svideo</h1>
                    <input 
                        type="search" 
                        placeholder="search" 
                        value={this.state.searchTearm} 
                        onChange={this.handleSearchTermChange}
                    />
                </div>
                <div className="search-list">
                    {preload.shows.map(show => (
                        <ShowCard 
                            key={show.imdbID} 
                            {...show} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}
