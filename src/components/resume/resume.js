/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { 
    materialShadow, 
    materialParagraph, 
    materialTitle 
} from './../../styles_shared/styles-shared.js';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Grid from '@mui/material/Grid';

// import { pdfjs } from 'react-pdf';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page } from 'react-pdf';

// ============================================================================
// Styles
// ============================================================================
const cssDocument = css({
    width: '95%',
    margin: '48px auto 96px',
    '.react-pdf__Document': {
    },
    '.react-pdf__Page__canvas': {
    },
});
const cssDocumentResume = css({
    flexShrink: '0',
    width: '800px',
    border: '1px solid #424242',
});
const cssDocumentOperationsWrapper = css({
    width: '35%',
    marginBottom: '48px',
});
const cssDocumentOperations = css({
    backgroundColor: '#FFFFFF',
    padding: '24px',
});

// ============================================================================
// ES6 Class
// ============================================================================
class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
            documentOrientationIndex: 0,
            documentOrientations: [0, 90, 180, 270],
            openSnackbar: false,
        };

        // Bindings
        this.onDocumentDownload = this.onDocumentDownload.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // React PDf Code -----------------------------------------------------
        // this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        // this.onDocumentRotate = this.onDocumentRotate.bind(this);
        // this.toPrevPage = this.toPrevPage.bind(this);
        // this.toNextPage = this.toNextPage.bind(this);
    }

    componentDidMount() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    // React PDf Code -----------------------------------------------------
    // onDocumentLoadSuccess({ numPages }) {
    //     this.setState((state, props) => ({
    //         numPages: numPages
    //     }));
    // }
    // onDocumentRotate() {
    //     this.setState((state, props) => ({
    //         documentOrientationIndex: (state.documentOrientationIndex + 1) % 4
    //     }));
    // }
    // toPrevPage() {
    //     if (this.state.pageNumber - 1 <= 0) return;

    //     this.setState((state, props) => ({
    //         pageNumber: state.pageNumber - 1
    //     }));
    // }
    // toNextPage() {
    //     if (this.state.pageNumber + 1 > this.state.numPages) return;

    //     this.setState((state, props) => ({
    //         pageNumber: state.pageNumber + 1
    //     }));
    // }
    onDocumentDownload() {
        const origin = process.env.PUBLIC_URL;
        fetch(`${origin}/resume.pdf`)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'resume.pdf'; // file name
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                this.setState((state, props) => ({
                    openSnackbar: true,
                }));
            })
            .catch(() => console.error('Failed to download file'));
    }
    handleClose() {
        this.setState((state, props) => ({
            openSnackbar: false,
        }));
    }
    
    render() {
        return (
        <div>
            <Grid container wrap="wrap-reverse" spacing={3} css={cssDocument}>
                {/* <Document css={cssDocumentResume} file="resume.pdf" rotate={this.state.documentOrientations[this.state.documentOrientationIndex]} 
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    loading={<Skeleton variant="rectangular" width={800} height={1070}/>}
                    error="An error occurred">
                    <Page width="798" pageNumber={this.state.pageNumber} />
                </Document> */}
                <Grid item xs={12} md={8}>
                    <object data={process.env.PUBLIC_URL + '/resume.pdf'} type="application/pdf" typemustmatch="true" width="100%" height="1070px">
                    <p>Your web browser doesn't have a PDF plugin. Instead you can click this button to download the pdf file:<span><Button onClick={this.onDocumentDownload}>Download</Button></span></p>
                    
                    </object>
                </Grid>
                <Grid item xs={12} md={4} css={cssDocumentOperationsWrapper}>
                    <div css={[cssDocumentOperations, materialShadow, materialParagraph]}>
                        <div css={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h1 css={[materialTitle]}>Resume</h1>
                            <div css={{display: 'flex', justifyContent: 'flex-end', marginLeft: '0px 12px'}}>
                                {/* <div><Button onClick={this.onDocumentRotate}>Rotate</Button></div> */}
                                {/* <div><Button onClick={this.onDocumentDownload}>Download</Button></div> */}
                            </div>
                        </div>
                        <br/>
                        <p>My current resume is available for viewing and downloading for software engineering or related positions. On the resume, I have reduced the skills to only those I feel relect my skillset as a well-rounded engineer.</p>
                        <br/>
                        <br/>
                        {/* <div css={{display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
                            <Button 
                                disabled={(this.state.numPages <= 1 || this.state.pageNumber <= 1) ? true : false}
                                onClick={this.toPrevPage}>Prev</Button>
                            <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
                            <Button 
                                disabled={(this.state.numPages <= 1 || this.state.pageNumber >= this.state.numPages) ? true : false}
                                onClick={this.toNextPage}>Next</Button>
                        </div> */}
                    </div>
                </Grid>
            </Grid>
            <Snackbar
                open={this.state.openSnackbar}
                anchorOrigin={{vertical: 'bottom', horizontal:'right'}}
                autoHideDuration={1500}
                onClose={this.handleClose}
                message="Downloading Resume!"
                />
        </div>
        );
    }
}

export default Resume;