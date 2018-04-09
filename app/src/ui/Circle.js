import React from 'react';

export default function Circle(props) {
    const { bgColor } = props;

    let circleStyle = {
        padding: 10,
        margin: 20,
        display: 'inline-block',
        backgroundColor: bgColor,
        borderRadius: "50%",
        width: 100,
        height: 100,
        textAlign: 'center'
    };
    
    return (
        <div style={circleStyle}>the circle</div>  
    )
};

let theCircle = <Circle bgColor="#F9C240" />;

function showCircle() {
    const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363', '#85FFC7', '#297373', '#FF8552', '#A40E4C'],
    len = colors.length;

    //let randomColor = Math.floor(Math.random() * colors.length);
    let renderData = [];

    //console.log( colors[randomColor] );

    //return <Circle bgColor={colors[randomColor]} />

    for (let i = 0; i < len; i++) {
        let color = colors[i];
        renderData.push(<Circle key={i+ color} bgColor={colors[i]} />)
    }
    return renderData;
}

export { Circle, theCircle, showCircle };