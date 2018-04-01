import React from 'react'
import styled from 'styled-components';

const LabelStyle = styled.label`
    font-weight: bold;
    padding: 13px;
    margin: 0;
    display: inline-block;
    vertical-align: bottom;
    font-family: "Monospace";
    font-size: 14px;
`;

export default function Label(props) {
    const { color } = props;

    return (
        <LabelStyle>{color}</LabelStyle>
    )  
}
