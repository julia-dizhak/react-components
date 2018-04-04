import React from 'react'

export default function Documents(props) {
    const { documents } = props;

    const fileUpload = <div>
        <label>
            gettext('Choose file to upload')
            <input type="file" name="file" multiple />
        </label>
    </div>;
    
    const addPagesToFile = <div>
        <a href="/" className="link" target="_blank">gettext('View')</a>
        <a href="/">gettext('Add page')</a>
        <a href="/">gettext('Remove')</a>
    </div>;

    return (
        <div>
            <ul>
               
                {documents.map((document, index) => (
                    <li key={index}>
                        <span>{ document.category }</span>
                        
                        <span>{ document.document_name }</span>

                        {
                            document.has_file === true ? fileUpload : addPagesToFile
                        }
                    </li>
                ))}
            </ul>      
        </div>
    )  
}
