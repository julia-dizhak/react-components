import React from 'react';

export default function Display(props) {
    const { color, num, size } = props,
    style = {
        color: color,
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: num,
        borderColor: color,
        borderStyle: 'solid',
        textAlign: 'center'
    };

    return (
        <div style={style}>
            <p>{color}</p>
            <p>{num}</p>
            <p>{size}</p>
        </div>     
    )  
}
