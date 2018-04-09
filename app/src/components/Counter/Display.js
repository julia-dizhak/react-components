import React from 'react';

export default function Display(props) {
    const { display } = props;

    let displayStyle = {
        fontSize: 52,
        fontFamily: 'sans-serif',
        color: '#333',
        fontWeight: "bold"
    };
    
    return (
        <div style={displayStyle}>{display}</div>  
    )
};
