import React from 'react';
import preload from '../data.json';

import ShowCard from './ShowCard';

export default function Search() {
    return (
        <div className="search">
            <div className="search-input">
                <h1>svideo</h1>
                <input 
                    type="search" 
                    placeholder="search"
                />    
            </div>
            <div className="search-list">
                {
                    preload.shows.map(
                        (show) => <ShowCard key={show.imdbID} {...show} />
                    )    
                }
            </div>
        </div>
    );
}