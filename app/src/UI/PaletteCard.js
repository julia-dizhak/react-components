import React, { Component } from 'react'
import styled from 'styled-components';

import PalleteCard from './PalleteCard';

const CardStyle = styled.div`
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

export default function PalleteCard(props) {
    return (
        <CardStyle>
            test
        </CardStyle>
    )  
}
