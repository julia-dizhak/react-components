import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Word from './../components/Word/';
import PaletteCard from './../components/PaletteCard/';
import Counter from './../components/Counter/';
import Documents from './../components/Documents/';
import Excel from './../components/Excel/';
import SearchForm from './../components/search/SearchForm';

export default function Main(props) {
    return (
        <main>
            <Switch>
                {/* <Route exact path='/' component={Home}/> */}
                <Route path="/word" component={Word} />
                <Route path="/palette" component={PaletteCard} />
                <Route path="/counter" component={Counter} />
                <Route path="/documents" component={Documents} />
                <Route path="/excel" component={Excel} />
                <Route path="/search" component={SearchForm} />
            </Switch>
        </main>
    )
};

