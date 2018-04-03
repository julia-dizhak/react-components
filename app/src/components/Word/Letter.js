import React from 'react'
import styled from 'styled-components';

const LetterStyle = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: props.backgroundColor;
  color: #333;
  display: inline-block;
  font-family: "Monospace";
  font-size: 32;
  text-align: center;
  border-radius: 2px;
`;

export default function Letter(props) {
    return (
        <LetterStyle>
            { props.children } 
        </LetterStyle>
    )  
}
