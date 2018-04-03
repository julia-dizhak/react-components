import React from 'react'

export default function Documents(props) {
    const { documents } = props;
    return (
        <div>
            <ul>
                {documents.map((document, index) => (
                    <li key={index}>
                        { document.document_name }
                    </li>
                ))}
            </ul>      
        </div>
    )  
}
