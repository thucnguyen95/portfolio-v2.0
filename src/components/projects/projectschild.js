/** @jsxImportSource @emotion/react */
import React from 'react';
import {
    useParams
} from 'react-router-dom';
import { css } from '@emotion/react';
import { 
    materialParagraph, 
    materialTitle 
} from './../../styles_shared/styles-shared.js';

import { parseBbcToHtml } from './../../util/bbcode_interpreter.js';
import DOMPurify from 'dompurify';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Chip from '@mui/material/Chip';

import { ProjectEntry } from './../../models/projectentry.js';
import { WorkEntry } from './../../models/workentry.js';
import { FreelanceEntry } from './../../models/freelanceentry.js';
import { CATEGORY } from './../../models/category.js';
import { SKILL } from './../../models/skill.js';
import { FILES_MAP } from './../../models/filesmap.js';


// ============================================================================
// Styles
// ============================================================================
const cssProjectContent = css({
    marginBottom: '48px',
    '.project-image-wrapper': {
        position: 'relative',
        img: {
            display: 'block',
            width: '100%',
            height: '320px',
            objectFit: 'cover',
            objectPosition: 'center',
        },
        '.image-skeleton': {
            width: '100%',
            height: '320px',
        },
        '> div:nth-of-type(1)': {
            backgroundColor: 'rgba(20, 20, 20, 0.7)',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px 36px',
        },
        '.project-background-section1': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        '.project-background-section2': {
            display: 'flex',
            justifyContent: 'flex-end',
            '.MuiButton-outlinedPrimary': {
                color: '#EEEEEE',
                borderColor: '#EEEEEE',
                '&:hover': {
                    color: '#A7C7E7',
                    borderColor: '#A7C7E7',  
                }
            }
        },
    },
    '.project-title': {
        color: '#FFFFFF',
        fontSize: '2.5em',
    },
    '.project-position': {
        color: '#FFFFFF',
        fontSize: '1.1em',
        margin: '4px 0px',
    },
    '.project-location': {
        color: '#FFFFFF',
        margin: '4px 0px',
    },
    '.project-date': {
        color: '#FFFFFF',
        fontSize: '1.1em',
        fontWeight: 'bold',
    },
    '.project-website': {
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
    },
});

const projectContent = css({

});
const projectContentSidebar = css({
    padding: '8px 16px',
    borderRight: '1px solid #D9D9D9',
    '@media (max-width: 600px)': {
        borderRight: 'none !important',
    }
});
const projectTags = css({
    'h2': [materialTitle, {
        fontSize: '1.5em',
        marginLeft: '4px',
        marginRight: '4px',
    }],
});
const projectContentBbc = css({
    padding: '24px 36px',
    // marginRight: '5%',
    p: materialParagraph,
    li: materialParagraph,
    /* These are technically the same, but use both */
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    ul: {
        marginLeft: '5%',
    },
    'h1, h2, h3, h4, h5': {
        color: '#424242',
        lineHeight: '1.5em',
    },
    img: {
        display: 'block',
        width: '75%',
        margin: '0 auto',
    },
    'pre': {
        backgroundColor: '#EFEFEF',
        overflowX: 'auto',
    },
    '.mobile-image-wrapper-single': {
        width: '40%',
        margin: '0 auto',
    },
    '.mobile-image-wrapper-double': {
        display: 'flex',
        '> div': {
            width: '40%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        '> div > p': {
            flexBasis: '40%',
        },
        '> div > img': {
            display: 'block',
            width: '70%',
            margin: '0 auto',
        },
    },
});

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />
}

// ============================================================================
// ES6 Class
// ============================================================================
class ProjectsChild extends React.Component {
    constructor(props) {
        super(props);

        // Load current entry by projectId
        let entry = null;
        for (const id in FILES_MAP) {
            if (id === props.params.projectId) {
                const jsonProject = FILES_MAP[id];
                const projId =      jsonProject['proj_id'];
                const title =       jsonProject['title'];
                const description = jsonProject['description'];
                const startMonth =  jsonProject['start_month'];
                const startYear =   jsonProject['start_year'];
                const endMonth =    jsonProject['end_month'];
                const endYear =     jsonProject['end_year'];
                const fileName =    jsonProject['file_name'];
                const category =    jsonProject['category'];
                const tags =        jsonProject['tags'];
                const website =     jsonProject['website'];
                const backgroundImage =     jsonProject['background_image'];
                if (category === CATEGORY.WORK) {
                    const company = jsonProject['company'];
                    const location = jsonProject['location'];
    
                    const workEntry = new WorkEntry(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, company, location, website, backgroundImage);
                    entry = workEntry;
                }
                if (category === CATEGORY.PROJECTS) {
                    const projectGroup = jsonProject['project_group'];
                
                    const projectEntry = new ProjectEntry(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, projectGroup, website, backgroundImage);
                    entry = projectEntry;
                }
                if (category === CATEGORY.FREELANCE) {
                    const company = jsonProject['company'];
                    const location = jsonProject['location'];
    
                    const freelanceEntry = new FreelanceEntry(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, company, location, website, backgroundImage);
                    entry = freelanceEntry;
                }
                break;
            }
        }

        // Create mapping for tags:group
        const tagsToCategoryMap = {};
        for (const [group, jsonSkill] of Object.entries(SKILL)) {
            for (const [skillKey, skillValue] of Object.entries(jsonSkill)) {
                tagsToCategoryMap[skillValue] = group;
            }
        }

        this.state = {
            projectId: props.params.projectId,
            entry: entry,
            tagsToCategoryMap: tagsToCategoryMap,
            entryBackgroundImage: null,
            parsedHtml: '',
        };

        // Bindings
        this.openWebsite = this.openWebsite.bind(this);
        this.onInitiateBbcInterpreter = this.onInitiateBbcInterpreter.bind(this);
    }

    async componentDidMount() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        if (!this.state.entry) return;
        if (!this.state.entry.getFileName()) return;
        const fileName = this.state.entry.getFileName();

        this.onInitiateBbcInterpreter(fileName);
    }

    openWebsite() {
        if (!this.state.entry) return;
        if (!this.state.entry.getWebsite()) return;
        const websiteLink = this.state.entry.getWebsite();
        window.open(websiteLink, '_blank');
    }

    async onInitiateBbcInterpreter(fileName) {
        const html = await parseBbcToHtml(fileName);

        this.setState((state, props) => ({
            parsedHtml: html,
        }));
        
    }

    render() {
        if (!this.state.entry) return <div></div>;

        const className = this.state.entry.getClassName();
        const title = this.state.entry.getTitle();
        const displayDate = this.state.entry.getDisplayDate();
        const website = this.state.entry.getWebsite();
        const backgroundImage = this.state.entry.getBackgroundImage();
        let position = null;
        let location = null;
        if (className === 'WorkEntry' || className === 'FreelanceEntry') {
            position = this.state.entry.getPosition();
        }
        if (className === 'WorkEntry' || className === 'FreelanceEntry') {
            location = this.state.entry.getLocation();
        }
        

        return (
        <div css={cssProjectContent}>
            <div className="project-image-wrapper">
                {backgroundImage &&
                    <img src={process.env.PUBLIC_URL + '/projectbackgrounds/' + backgroundImage} alt="Project Background" />                
                }
                {!backgroundImage &&
                    <Skeleton className="image-skeleton" variant="rectangular" animation={false}></Skeleton>
                }
                <div>
                    <div className="project-background-section1">
                        <div>
                            <h1 className="project-title">{title}</h1>
                            {position &&
                                <p className="project-position">{position}</p>
                            }
                            {location &&
                                <p className="project-location">{location}</p>
                            }
                        </div>
                        <div>
                            <p className="project-date">{displayDate}</p>
                        </div>
                    </div>
                    <div className="project-background-section2">
                        {website &&
                            <Button variant="outlined" onClick={this.openWebsite}>Website</Button>
                        }
                    </div>
                </div>
            </div>
            <Grid container css={projectContent}>
                <Grid item xs={12} md={2} css={projectContentSidebar}>
                    <div css={projectTags}>
                        <h2>Skills</h2>
                        {this.state.entry.getTags().map((s) => 
                            <Chip key={'chipkey-' + s} label={s} variant="outlined" color={
                                (this.state.tagsToCategoryMap[s] === 'LANGUAGES') ? "info" : 
                                (this.state.tagsToCategoryMap[s] === 'FRAMEWORKS/LIBRARIES') ? "success" : 
                                (this.state.tagsToCategoryMap[s] === 'OTHER') ? "secondary" : "primary"} css={{ margin: '2px 4px'}}/>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} md={10}>
                    <div css={projectContentBbc} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.parsedHtml)}}></div>
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default withParams(ProjectsChild);