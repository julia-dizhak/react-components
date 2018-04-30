import React, { Component } from 'react';
import PropTypes from 'prop-types';

const headers = [
    "Book", "Author", "Language", "Published", "Sales"
];

const data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"]
];

const propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ),
    data: PropTypes.arrayOf(
        PropTypes.string
    )
};
        
export default class Excel extends Component{
    state = {
        headers: headers,
        data: data
    }
                 
    render() {
        return (
            <React.Fragment>
                <table className="excel"> 
                    <thead>
                        <tr>    
                            {this.state.headers.map((title, index) => (
                                <th key={index}>{ title }</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row, index) => (
                            <tr key={index}>
                                {row.map((item, i) => (
                                    <td key={i}>{ item }</td>
                                ))}
                            </tr>
                        ))}
                    </tbody> 
                </table>    
            </React.Fragment>      
        )  
    }    
}
                        
Excel.propTypes = propTypes;
