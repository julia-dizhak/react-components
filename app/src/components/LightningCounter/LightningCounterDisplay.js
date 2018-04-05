import React from 'react';
import styled from 'styled-components';
import LightningCounter from './LightningCounter';

const LightningCounterStyle = styled.div`
  padding: 40px;
  background-color: #000;
  color: #66FFFF;
  font-size: 50;
  width: 250px;
  text-align: center;
  border-radius: 10px;
`;

export default function LightningCounterDisplay(props) {
    let commonStyle = {
        margin: 0,
        padding: 0
      },
      textStyles = {
        emphasis: {
          fontSize: 38,
          ...commonStyle
        },
        smallEmphasis: {
          ...commonStyle
        },
        small: {
          fontSize: 17,
          opacity: 0.5,
          ...commonStyle
        }
      }
    return (
        <LightningCounterStyle>
            <LightningCounter />
            <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
            <h3 style={textStyles.emphasis}>WORLDWIDE</h3>
            <p style={textStyles.small}>(since you loaded this example)</p>
        </LightningCounterStyle>  
    )
};