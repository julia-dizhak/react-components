import React, {Component} from 'react';
import { autobind } from 'core-decorators';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import './style.css';

const DocumentsStyle = styled.div`
   padding: 0;
   margin: 0 15px 0 0;
`;

export default class Documents extends Component{
    constructor() {
        super();
        this.state = {
            files: []
        }
    }
    
    //@autobind
    onDrop(files) {
        this.setState({ files })
        console.log(files);
        //console.log(value);
    }

    handleAddPage(files) {
        //files = ...this.state.files;
        this.setState({ files })
    }

    handleRemoveFiles(files) {
        this.setState({files: []})
    }

    render() {
        const { documents } = this.props;

        const fileUpload = <div>
            {/* <label>
                Choose file to upload
                <input className="button-file-upload" type="file" name="file" multiple />
            </label> */}

            <div className="dropzone">
                <Dropzone 
                    multiple={true}
                    className="button-file-upload"
                    activeClassName="button-file-upload-active"
                    onDrop={this.onDrop.bind(this)}>
                    <p>Upload files</p>
                </Dropzone>
            </div>
            <aside>
            <p>Dropped files:</p>
            <ul>
                {
                    this.state.files.map(file => 
                        <li key={file.name}> {file.name} - {file.size} bytes </li>
                    )
                }
            </ul>
            </aside>    
        </div>;
        
        const addPagesToFile = <div>
            <a href="/" className="link" target="_blank">View</a>&nbsp;

            <div className="dropzone">
                <Dropzone 
                    multiple={true}
                    className="doc-link"
                    onDrop={this.handleAddPage.bind(this)}>
                    <p>Add page</p>
                </Dropzone>
            </div>&nbsp;

            <a
                onClick={this.handleRemoveFiles.bind(this)}
                href="/">Remove</a>
        </div>;

        return (
            <DocumentsStyle>
                <h2 className="doc-category">Basic Info</h2>  
                <ul className="documents">
                    
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
}
