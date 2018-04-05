import React from 'react'
import styled from 'styled-components';

const DocumentsStyle = styled.div`
   padding: 0;
   margin: 0 15px 0 0;
`;

export default function Documents(props) {
    const { documents } = props;

    const fileUpload = <div>
        <label>
            Choose file to upload
            <input type="file" name="file" multiple />
        </label>
    </div>;
    
    const addPagesToFile = <div>
        <a href="/" className="link" target="_blank">View</a>
        <a href="/">Add page</a>
        <a href="/">Remove</a>
    </div>;

    return (
        <DocumentsStyle>
            <ul>
                {documents.map((document, index) => (
                    <li key={index} style={{'margin': '15px'}}>
                        <span>{ document.category }</span>
                        
                        <span>{ document.document_name }</span>

                        {
                            document.has_file === true ? fileUpload : addPagesToFile
                        }
                    </li>
                ))}
            </ul>      
        </DocumentsStyle>
    )  
}
