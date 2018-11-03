// @flow

import React from 'react';
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
                    <Route path="/search" component={Search} />
                    <Route component={FourOrFour} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
