import React from 'react'
//import styled from 'styled-components';

// const SquareStyle = styled.div`
//    height: 150px;
//    background-color: ${color};
// `;

export default function Square(props) {
    const { color } = props;
    const squareStyle = {
        height: 150,
        backgroundColor: color
    };

    return (
        // <SquareStyle></SquareStyle>
        <div style={squareStyle}></div>    
    )  
}
