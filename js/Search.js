import React from 'react';
import preload from '../data.json';

import ShowCard from './ShowCard';

export default function Search() {
    return (
        <div className="search">
            {
                preload.shows.map(
                    (show) => <ShowCard {...show} />
                )    
            }
        </div>
    );
}