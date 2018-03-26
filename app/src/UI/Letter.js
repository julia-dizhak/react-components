import React, { Component } from 'react'

export default function Letter(props) {
    const letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: props.backgroundColor,
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
    }
    return (
        <div style={letterStyle}>
            {props.children} 
        </div>
    )  
}
