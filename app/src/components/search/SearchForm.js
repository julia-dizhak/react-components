import React from 'react';

const providerUrl = (provider) => {
    switch(provider) {
        case 'Google': 
            return 'https://www.google.ch/'; //google link
        case 'Bing':
            return 'https://www.bing.com/';    // bing search
    }
}

const providerStyle = (provider) => {
    switch(provider) {
        case 'Google': 
            return {backgroundColor: 'yellow'}
        case 'Bing':
            return {backgroundColor: 'blue'}
    }
}

export default function SearchForm(props) {
    const { provider } = props;

    return (
        <form 
            action={providerUrl(provider)} 
            target="_blank">
            <input 
                style={providerStyle(provider)}
                type="search"
                placeholder="type here ..."
                name="q"
            />   
            <button 
                type="submit">
                Search
            </button>
        </form>
    )
};