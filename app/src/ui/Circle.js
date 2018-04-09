import React from 'react';

export default function Circle(props) {
    const { bgColor } = props;

    let circleStyle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: props.bgColor,
        borderRadius: "50%",
        width: 100,
        height: 100,
    };
    
    return (
        <div style={circleStyle}>the circle</div>  
    )
};

let theCircle = <Circle bgColor="#F9C240" />;

function showCircle() {
    const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363'];
    let randomColor = Math.floor(Math.random() * colors.length);
    console.log( colors[randomColor] );

    return <Circle bgColor={colors[randomColor]} />
}

export { Circle, theCircle, showCircle };