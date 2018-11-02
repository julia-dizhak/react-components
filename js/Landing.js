import React from 'react';

export default function Landing() {
    return (
        <div className="app">
            <div className="landing">
                <h1>svideo</h1>
                <input type="text" placeholder="search" />
                <a href="/search">or browse all</a>
            </div>
        </div>
    );
}
