import React from 'react';
import { render } from 'react-dom';

export default function App(props) {
    return (
        <div className="app">
            <div className="landing">
                <h1>svideo</h1>
                <input type="text" placeholder="search" />  
                <a>or browse all</a>   
            </div>     
        </div>
    )
}

render(<App />, document.getElementById('app'));
