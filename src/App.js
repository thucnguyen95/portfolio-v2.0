/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { 
    materialParagraph, 
    materialMenu, 
    materialMenuTitle 
} from './styles_shared/styles-shared.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate
} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';

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
const cssAppbar = css({
    '&.MuiAppBar-root': {
        backgroundColor: '#FCFCFC',
    },
})
const cssSocialMedia = css({
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
            anchorEl: null,
        };

        // Bindings
        this.scrollToTop = this.scrollToTop.bind(this);
        this.openGithubLink = this.openGithubLink.bind(this);
        this.openLinkedInLink = this.openLinkedInLink.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
    handleMenu(event) {
        this.setState((state, props) => ({
            anchorEl: event.target
        }));
    }
    handleClose(event) {
        this.setState((state, props) => ({
            anchorEl: null
        }));
    }

    render() {
        return (
            <Router>
                <div css={cssApp}>
                    {/* Menu */}
                    <AppBar position="sticky" css={cssAppbar}>
                        <Toolbar>
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                <MenuIcon color="primary" onClick={this.handleMenu}></MenuIcon>
                            </Box>
                            <Menu anchorEl={this.state.anchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} keepMounted open={this.state.anchorEl !== null} onClose={this.handleClose} css={materialMenu}>
                                <MenuItem onClick={this.handleClose}><NavLink to="/projects">Projects</NavLink></MenuItem>
                                <MenuItem onClick={this.handleClose}><NavLink to="/resume">Resume</NavLink></MenuItem>
                                <MenuItem onClick={this.handleClose}><NavLink to="/hobbies">Hobbies</NavLink></MenuItem>
                                <MenuItem onClick={this.handleClose}><NavLink to="/contact">Contact</NavLink></MenuItem>
                            </Menu>
                            
                            <h1 css={[materialMenuTitle, {marginLeft: '12px', marginRight: '12px'}]}><Link to="/">Portfolio</Link></h1>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }} css={materialMenu}>
                                <div><NavLink to="/projects">Projects</NavLink></div>
                                <div><NavLink to="/resume">Resume</NavLink></div>
                                <div><NavLink to="/hobbies">Hobbies</NavLink></div>
                                <div><NavLink to="/contact">Contact</NavLink></div>
                            </Box>
                            <Box sx={{ flexGrow: { xs: 1, md: 0}, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} css={cssSocialMedia}>
                                <div>
                                    <IconButton aria-label="LinkedIn" onClick={this.openLinkedInLink}><LinkedInIcon></LinkedInIcon></IconButton>
                                </div>
                                <div>
                                    <IconButton aria-label="Github" onClick={this.openGithubLink}><GitHubIcon></GitHubIcon></IconButton>
                                </div>
                            </Box>
                        </Toolbar>
                    </AppBar>
    
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
                            <Route path="*" element={<Navigate to="/" />}></Route>
                        </Routes>
                    </div>

                    {/* Footer */}
                    <div css={cssFooter}>
                        <div>
                            <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'flex-start', alignItems: 'center' }} css={materialMenu}>
                                <div><Link to="/projects/:projectId">Projects</Link></div>
                                <div><Link to="/resume">Resume</Link></div>
                                <div><Link to="/hobbies">Hobbies</Link></div>
                                <div><Link to="/contact">Contact</Link></div>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} css={cssSocialMedia}>
                                <div>
                                    <IconButton aria-label="LinkedIn" onClick={this.openLinkedInLink}><LinkedInIcon></LinkedInIcon></IconButton>
                                </div>
                                <div>
                                    <IconButton aria-label="Github" onClick={this.openGithubLink}><GitHubIcon></GitHubIcon></IconButton>
                                </div>
                            </Box>
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
