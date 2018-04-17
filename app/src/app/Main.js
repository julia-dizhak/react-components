import React from 'react';
import { Router, Route, Switch, HashRouter } from 'react-router-dom';

import Word from './../components/Word/';
import PaletteCard from './../components/PaletteCard/';
import Counter from './../components/Counter/';

export default function Main(props) {
    return (
        <main>
            <Switch>
                {/* <Route exact path='/' component={Home}/> */}
                <Route path="/word" component={Word}/>
                <Route path="/palette" component={PaletteCard}/>
                <Route path="/counter" component={Counter}/>
            </Switch>
        </main>
    )
};

