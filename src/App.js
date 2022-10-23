/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { 
    materialShadow, 
    materialParagraph, 
    materialMenu, 
    materialMenuTitle 
} from './styles_shared/styles-shared.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import About from './components/about/about.js';
import Projects from './components/projects/projects.js';
import ProjectsChild from './components/projects/projectschild.js'
import Resume from './components/resume/resume.js';
import Hobbies from './components/hobbies/hobbies.js';
import Contact from './components/contact/contact.js';

// ============================================================================
// Styles
// ============================================================================
const cssApp = css({
    backgroundColor: '#FDFDFD',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
});
const cssBody = css({
    flexGrow: 1,
});
const cssFooter = css({
    flexShrink: 0,
    backgroundColor: '#BAD8E6ff',
    padding: '24px 48px',
    '> div:nth-of-type(1)': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
const cssMenu = css({
    backgroundColor: '#FCFCFC',
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 10,
    width: '100%',
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 24px',
    '> div:nth-of-type(1)': {
        flexBasis: '70%',
    },
    '> div:nth-of-type(2)': {
        flexBasis: '30%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
const cssSocialMedia = css({
    display: 'flex',
    alignItems: 'center',
    margin: '0px 12px',
    '> div': {
        margin: '0px 8px',
    }
});
const cssFloatingActionButton = css({
    position: 'fixed',
    bottom: '96px',
    right: '48px',
});

// ============================================================================
// ES6 Class
// ============================================================================
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateYearCreated: 2022,
            dateYear: new Date().getFullYear(),
            linkGithub: 'https://github.com/thucnguyen95',
            linkLinkedIn: 'https://www.linkedin.com/in/thucnguyen95/',
        };

        // Bindings
        this.scrollToTop = this.scrollToTop.bind(this);
        this.openGithubLink = this.openGithubLink.bind(this);
        this.openLinkedInLink = this.openLinkedInLink.bind(this);
    }

    componentDidMount() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    scrollToTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    openGithubLink() {
        window.open(this.state.linkGithub, '_blank');
    }
    openLinkedInLink() {
        window.open(this.state.linkLinkedIn, '_blank');
    }

    render() {
        return (
            <Router>
                <div css={cssApp}>
                    {/* Menu */}
                    <div css={[cssMenu, materialShadow]}>
                        <div>
                            <h1 css={[materialMenuTitle, {marginLeft: '12px', marginRight: '12px'}]}><Link to="/">Portfolio</Link></h1>
                        </div>
                        <div>
                            <nav css={materialMenu}>
                                <div><NavLink to="/projects">Projects</NavLink></div>
                                <div><NavLink to="/resume">Resume</NavLink></div>
                                <div><NavLink to="/hobbies">Hobbies</NavLink></div>
                                <div><NavLink to="/contact">Contact</NavLink></div>
                            </nav>
                            <div css={cssSocialMedia}>
                                <div>
                                    <IconButton aria-label="LinkedIn" onClick={this.openLinkedInLink}><LinkedInIcon></LinkedInIcon></IconButton>
                                </div>
                                <div>
                                    <IconButton aria-label="Github" onClick={this.openGithubLink}><GitHubIcon></GitHubIcon></IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* A switch looks through its children routes and renders first one that matches the current url */}
                    <div css={cssBody}>
                        <Routes>
                            <Route exact path="/projects" element={<Projects/>}>
                                <Route exact path=":projectId" element={<ProjectsChild />}/>
                            </Route>
                            <Route path="/resume" element={<Resume/>}></Route>
                            <Route path="/hobbies" element={<Hobbies/>}></Route>
                            <Route path="/contact" element={<Contact/>}></Route>
                            <Route path="/" element={<About/>}></Route>
                        </Routes>
                    </div>

                    {/* Footer */}
                    <div css={cssFooter}>
                        <div>
                            <nav css={materialMenu}>
                                <div><Link to="/projects/:projectId">Projects</Link></div>
                                <div><Link to="/resume">Resume</Link></div>
                                <div><Link to="/hobbies">Hobbies</Link></div>
                                <div><Link to="/contact">Contact</Link></div>
                            </nav>
                            <div css={cssSocialMedia}>
                                <div>
                                    <IconButton aria-label="LinkedIn" onClick={this.openLinkedInLink}><LinkedInIcon></LinkedInIcon></IconButton>
                                </div>
                                <div>
                                    <IconButton aria-label="Github" onClick={this.openGithubLink}><GitHubIcon></GitHubIcon></IconButton>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div css={[materialParagraph, {textAlign: 'center'}]}>
                            <p>&copy;<span>{this.state.dateYear !== this.state.dateYearCreated ? `${this.state.dateYearCreated} - ${this.state.dateYear}` : this.state.dateYearCreated}</span> Thuc Nguyen</p>
                        </div>
                    </div>
                    <div css={cssFloatingActionButton}>
                        <Fab color="primary" aria-label="top" onClick={this.scrollToTop}><KeyboardArrowUpIcon></KeyboardArrowUpIcon></Fab>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
