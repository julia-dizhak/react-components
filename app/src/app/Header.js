import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header>
            <nav className="navigation">
                Components:
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/word">Word Component</Link></li>
                    <li><Link to="/palette">Palette Component</Link></li>
                    <li><Link to="/counter">Counter Component</Link></li>
                    <li><Link to="/documents">Documents</Link></li>
                    <li><Link to="/excel">Excel Table</Link></li>
                    <li><Link to="/excel">Search Form</Link></li>
                </ul>
            </nav> 
        </header>
    )
};