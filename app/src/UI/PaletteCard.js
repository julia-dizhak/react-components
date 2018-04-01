import React from 'react'
import styled from 'styled-components';

import Square from './Square';
import Label from './Label';

const CardStyle = styled.div`
   font-family: "sans-serif";
   height: 200px;
   width: 150px;
   padding: 0;
   background-color: #fff;
   box-shadow: 0px 0px 5px #666;
   border-radius: 1px;
   display: inline-block;
   margin: 0 15px 0 0;
`;

export default function PaletteCard(props) {
    return (
        <CardStyle>
            <Square color={props.color}/>
            <Label color={props.color} />
        </CardStyle>
    )  
}
