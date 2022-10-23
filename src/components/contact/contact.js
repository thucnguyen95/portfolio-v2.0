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
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Skeleton from '@mui/material/Skeleton';

import SocialMediaBackground from './../../assets/images/social-media.jpg';

// ============================================================================
// Styles
// ============================================================================
const cssContact = css({
    width: '95%',
    margin: '48px auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '> div:nth-of-type(1)': {
        flexBasis: '35%',
        img: {
            display: 'block',
            width: '100%',
        },
        '.image-skeleton': {
            width: '100%',
            height: '360px',
        }
    },
    '> div:nth-of-type(2)': {
        flexBasis: '40%'
    }
});
const cssSocialMediaBlurb = css({
    backgroundColor: '#FFFFFF',
    minHeight: '400px',
    padding: '24px 48px',
    'h1': materialTitle,
    '> p': materialParagraph,
});
const cssSocialMediaIconText = css({
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0px',
    '> div:nth-of-type(1)': {
        width: '64px',
    }
});

// ============================================================================
// ES6 Class
// ============================================================================
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSnackbar: false,
            linkGithub: 'https://github.com/thucnguyen95',
            linkLinkedIn: 'https://www.linkedin.com/in/thucnguyen95/',
            arrayLoadedImages: new Array(1).fill(false),
        };

        // Bindings
        this.openGithubLink = this.openGithubLink.bind(this);
        this.openLinkedInLink = this.openLinkedInLink.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    openGithubLink() {
        window.open(this.state.linkGithub, '_blank');
    }
    openLinkedInLink() {
        window.open(this.state.linkLinkedIn, '_blank');
    }
    copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        this.setState((state, props) => ({
            openSnackbar: true,
        }));
    }
    handleClose() {
        this.setState((state, props) => ({
            openSnackbar: false,
        }));
    }
    onImageLoaded(index) {
        const arrayLoadedImages = this.state.arrayLoadedImages;
        arrayLoadedImages[index] = true;
        this.setState((state, props) => ({
            arrayLoadedImages: arrayLoadedImages
        }));
    }

    render() {
        return (
        <div>
            <div css={cssContact}>
                <div>
                    <img src={SocialMediaBackground} alt="Contact Background"
                        onLoad={(e) => this.onImageLoaded(0, e)} 
                        style={(this.state.arrayLoadedImages[0] ? {display: 'block'} : { display: 'none' })}></img>
                    <Skeleton variant="rectangular" className="image-skeleton" 
                            style={(this.state.arrayLoadedImages[0] ? {display: 'none'} : { display: 'block' })}></Skeleton>
                </div>
                <div css={[cssSocialMediaBlurb, materialShadow]}>
                    <h1>Contact Me!</h1>
                    <p>Feel free to contact me via email or through any of the following social media platforms. I especially enjoy using Discord!</p>
                    <br/><br/><br/>
                    
                    <div css={cssSocialMediaIconText}>
                        <div>
                            <IconButton aria-label="Email" disabled>
                                <EmailIcon></EmailIcon>
                            </IconButton>
                        </div>
                        <Button variant="outlined" css={css({textTransform: 'none',})} 
                            onClick={(e) => this.copyToClipboard('thucnguyen0895@gmail.com', e)}>thucnguyen0895@gmail.com</Button>
                    </div>

                    <div css={cssSocialMediaIconText}>
                        <div>
                            <IconButton aria-label="LinkedIn">
                                <LinkedInIcon onClick={this.openLinkedInLink}></LinkedInIcon>
                            </IconButton>
                        </div>
                        <Button variant="outlined" css={css({textTransform: 'none',})}
                            onClick={(e) => this.copyToClipboard('thucnguyen95', e)}>thucnguyen95</Button>
                    </div>

                    <div css={cssSocialMediaIconText}>
                        <div>
                            <IconButton aria-label="Github">
                                <GitHubIcon onClick={this.openGithubLink}></GitHubIcon>
                            </IconButton>
                        </div>
                        <Button variant="outlined" css={css({textTransform: 'none',})}
                            onClick={(e) => this.copyToClipboard('thucnguyen95', e)}>thucnguyen95</Button>
                    </div>

                    <div css={cssSocialMediaIconText}>
                        <div>
                            <IconButton aria-label="Discord" disabled>
                                <FontAwesomeIcon icon={faDiscord} size="xs"/>
                            </IconButton>
                        </div>
                        <Button variant="outlined" css={css({textTransform: 'none',})}
                            onClick={(e) => this.copyToClipboard('tuhcyodrift#1995', e)}>tuhcyodrift#1995</Button>
                    </div>
                    <div css={{ display: 'flex', justifyContent: 'flex-end', fontSize: '0.9em', marginTop: '12px' }}>
                        <span>Attribution: </span>
                        <a href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a>
                    </div>
                </div>
            </div>
            <Snackbar
                open={this.state.openSnackbar}
                anchorOrigin={{vertical: 'bottom', horizontal:'right'}}
                autoHideDuration={1500}
                onClose={this.handleClose}
                message="Copied to clipboard!"
                />
        </div>
        );
    }
}

export default Contact;