import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Landing from './components/Landing';
// import ShowCardList from './components/ShowCardList';

// import './styles/style.css';

const FourOrFour = () => <div>404</div>;

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    {/* <Route exact path="/" component={Landing} /> */}
                    {/* <Route path="/search" component={Search} /> */}
                    <Route component={FourOrFour} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
