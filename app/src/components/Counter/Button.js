import React from 'react';

export default function Button(props) {
    const { display, clickHandler } = props;

    let buttonStyle = {
        fontSize: '1em',
        width: 30,
        height: 30,
        fontFamily: 'sans-serif',
        color: '#333',
        lineHeight: '3px',
        cursor: 'pointer'
    };

    return (
        <button 
           style={buttonStyle}
           onClick={clickHandler}
        >
           { display }
        </button>  
    )
};
