import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header>
            <nav className="navigation">
                <ul className="header">
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/word" activeClassName="active">Word Component</Link></li>
                    <li><Link to="/palette" activeClassName="active">Palette Component</Link></li>
                    <li><Link to="/counter" activeClassName="active">Counter Component</Link></li>
                </ul>
            </nav> 
        </header>
    )
};