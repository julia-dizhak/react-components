import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';
import FourOrFour from './FourOrFour';

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/search" component={Search} />
                    <Route component={FourOrFour} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

render(<App />, document.getElementById('app'));
