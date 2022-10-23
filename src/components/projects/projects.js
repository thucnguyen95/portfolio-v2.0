/** @jsxImportSource @emotion/react */
import React from 'react';
import {
    Link,
    Outlet,
    useNavigate,
    useParams
} from 'react-router-dom';

import { css } from '@emotion/react';
import { 
    materialShadow,
    materialParagraph, 
    materialTitle, 
    materialSubtitle,
    materialGridPaper 
} from './../../styles_shared/styles-shared.js';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Fab from '@mui/material/Fab';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Chip from '@mui/material/Chip';

import { BaseEntry } from './../../models/baseentry.js';
import { ProjectEntry } from './../../models/projectentry.js';
import { WorkEntry } from './../../models/workentry.js';
import { FreelanceEntry } from './../../models/freelanceentry.js';
import { CATEGORY } from './../../models/category.js';
import { SKILL } from './../../models/skill.js';
import { FILES_MAP } from './../../models/filesmap.js';

// ============================================================================
// Styles
// ============================================================================
const cssProjects = css({
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'flex-start',
    '> div:nth-of-type(1)': {
        flexShrink: 0,
        width: '240px',
        // minHeight: '80vh',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 16px',
    },
    '> div:nth-of-type(2)': {
        flexGrow: 1,
    },
});
const cssProjectChild = css({

});
const cssFloatingReturn = css({
    position: 'fixed',
    height: '40px',
    left: '0',
    bottom: '0',
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: '22px',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.2)',
    transition: 'top .3s',
    zIndex:'10',
});
const cssFloatingActionButton = css({
    position: 'fixed',
    bottom: '176px',
    right: '48px',
});
const cssDrawer = css({
    backgroundColor: '#FFFFFF',
    borderRight: '1px solid #D9D9D9',
	'.MuiListItem-padding': {
        padding: '0px 0px',
    },
    '.MuiFormControlLabel-root': {
        marginLeft:'4px',
    },
    '.MuiFormControlLabel-label': {
        fontSize: '0.9em',
    },
});
const cssDrawerTitle1 = css({
    color: '#616161', 
    fontSize: '1.1em', 
    fontWeight:'bold',
    marginBottom: '4px',
    '&.MuiListItem-padding': {
        padding: '8px 0px',
    },
});
const cssDrawerTitle2 = css({
    color: '#757575', 
    fontSize: '1.0em', 
    fontWeight:'bold', 
    marginBottom: '4px'
});
const cssDrawerSublist = css({

});

const cssProjectsGrid = css({
    marginBottom: '48px',
});

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />
}
// ============================================================================
// ES6 Class
// ============================================================================
class Projects extends React.Component {
    constructor(props) {
        super(props);

        // Create mapping for tags:group
        const tagsToCategoryMap = {};
        for (const [group, jsonSkill] of Object.entries(SKILL)) {
            for (const [skillKey, skillValue] of Object.entries(jsonSkill)) {
                tagsToCategoryMap[skillValue] = group;
            }
        }

        this.state = {
            tagsToCategoryMap: tagsToCategoryMap,
            listProjectEntries: [],
            listWorkEntries: [],
            listFreelanceEntries: [],
            filteredListProjectEntries: [],
            filteredListWorkEntries: [],
            filteredListFreelanceEntries: [],
            jsonCheckedCategories: {},
            jsonCheckedSkills: {},
            currentNavigateUrlChild: null,
        };

        // Bindings
        this.buildEntriesFromFileMap = this.buildEntriesFromFileMap.bind(this);
        this.buildDefaultCheckedValues = this.buildDefaultCheckedValues.bind(this);
        this.openProjectDetails = this.openProjectDetails.bind(this);
        this.closeProjectDetails = this.closeProjectDetails.bind(this);
        this.onCheckboxCategoryClicked = this.onCheckboxCategoryClicked.bind(this);
        this.onCheckboxSkillClicked = this.onCheckboxSkillClicked.bind(this);
        this.resolveAllFilters = this.resolveAllFilters.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    componentDidMount() {
        if (this.props.params['projectId']) {
            this.setState((state, props) => ({
                currentNavigateUrlChild: this.props.params['projectId']
            }));
        }
        console.log('SCROLLING');
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        this.buildEntriesFromFileMap();
        this.buildDefaultCheckedValues();
    }

    buildEntriesFromFileMap() {
        const listProjectEntries = [];
        const listWorkEntries = [];
        const listFreelanceEntries = [];
        for (let [key, jsonValue] of Object.entries(FILES_MAP)) {
            const projId =          jsonValue['proj_id'];
            const title =           jsonValue['title'];
            const description =     jsonValue['description'];
            const startMonth =      jsonValue['start_month'];
            const startYear =       jsonValue['start_year'];
            const endMonth =        jsonValue['end_month'];
            const endYear =         jsonValue['end_year'];
            const fileName =        jsonValue['file_name'];
            const category =        jsonValue['category'];
            const tags =            jsonValue['tags'];
            const website =         jsonValue['website'];
            const backgroundImage = jsonValue['background_image'];
            if (category === CATEGORY.PROJECTS) {
                const projectGroup = jsonValue['project_group'];
                
                const projectEntry = new ProjectEntry(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, projectGroup, website, backgroundImage);
                listProjectEntries.push(projectEntry);
            }
            if (category === CATEGORY.WORK) {
                const company = jsonValue['company'];
                const location = jsonValue['location'];

                const workEntry = new WorkEntry(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, company, location, website, backgroundImage);
                listWorkEntries.push(workEntry);
            }
            if (category === CATEGORY.FREELANCE) {
                const company = jsonValue['company'];
                const location = jsonValue['location'];

                const freelanceEntry = new FreelanceEntry(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, company, location, website, backgroundImage);
                listFreelanceEntries.push(freelanceEntry);
            }
        }

        this.setState((state, props) => ({
            listProjectEntries,
            listWorkEntries,
            listFreelanceEntries,
            filteredListProjectEntries: listProjectEntries,
            filteredListWorkEntries: listWorkEntries,
            filteredListFreelanceEntries: listFreelanceEntries,
        }));
    }

    buildDefaultCheckedValues() {
        // Initialize json for category checkboxes
        const jsonCheckedCategories = Object.keys(CATEGORY).reduce((jsonObj, curr) => {
            jsonObj[curr] = false;
            return jsonObj;
        }, {});

        // Initialize json for skill checkboxes
        let allSkillsByKeys = [];
        for (const skillCategory of Object.keys(SKILL)) {
            const arraySkills = Object.values(SKILL[skillCategory]);
            allSkillsByKeys = allSkillsByKeys.concat(arraySkills);
        }
        const jsonCheckedSkills = allSkillsByKeys.reduce((jsonObj, curr) => {
            jsonObj[curr] = false;
            return jsonObj;
        }, {});

        this.setState((state, props) => ({
            jsonCheckedCategories,
            jsonCheckedSkills,
        }));
    }

    onCheckboxCategoryClicked(categoryKey, e) {
        const checked = e.target.checked;
        const jsonCheckedCategories = this.state.jsonCheckedCategories;
        jsonCheckedCategories[categoryKey] = checked;

        this.setState((state, props) => ({
            jsonCheckedCategories
        }));
        
        this.resolveAllFilters();
    }
    onCheckboxSkillClicked(skillKey, skill, e) {
        const checked = e.target.checked;
        const jsonCheckedSkills = this.state.jsonCheckedSkills;
        const skillValue = SKILL[skillKey][skill];
        jsonCheckedSkills[skillValue] = checked;

        this.setState((state, props) => ({
            jsonCheckedSkills
        }));

        this.resolveAllFilters();
    }

    resolveAllFilters() {
        // Resolve filters on Category
        const jsonCheckedCategories = this.state.jsonCheckedCategories;
        let filteredListWorkEntries = [];
        let filteredListProjectEntries = [];
        let filteredListFreelanceEntries = [];
        const categoriesDefault = !jsonCheckedCategories['WORK'] && !jsonCheckedCategories['PROJECTS'] && !jsonCheckedCategories['FREELANCE'];
        if (categoriesDefault || jsonCheckedCategories['WORK']) filteredListWorkEntries = this.state.listWorkEntries;
        if (categoriesDefault || jsonCheckedCategories['PROJECTS']) filteredListProjectEntries = this.state.listProjectEntries;
        if (categoriesDefault || jsonCheckedCategories['FREELANCE']) filteredListFreelanceEntries = this.state.listFreelanceEntries;

        // Resolve filters on Skills (Languages, Frameworks/Libraries, Other)
        const jsonCheckedSkills = this.state.jsonCheckedSkills;
        const smallerHashmap = {};
        for (const key in jsonCheckedSkills) {
            if (jsonCheckedSkills[key] === true) {
                smallerHashmap[key] = true;
            }
        }

        const shouldFilterBySkill = Object.keys(smallerHashmap).length;
        if (shouldFilterBySkill) {
            filteredListWorkEntries = filteredListWorkEntries.filter((entry) => {
                const tags = entry.getTags();
                for (const tag of tags) {
                    if (smallerHashmap[tag]) return true;
                }
                return false;
            });
            filteredListProjectEntries = filteredListProjectEntries.filter((entry) => {
                const tags = entry.getTags();
                for (const tag of tags) {
                    if (smallerHashmap[tag]) return true;
                }
                return false;
            });
            filteredListFreelanceEntries = filteredListFreelanceEntries.filter((entry) => {
                const tags = entry.getTags();
                for (const tag of tags) {
                    if (smallerHashmap[tag]) return true;
                }
                return false;
            });
        }

        this.setState((state, props) => ({
            filteredListWorkEntries,
            filteredListProjectEntries,
            filteredListFreelanceEntries,
        }));
    }

    clearAllFilters() {
        const jsonCheckedCategories = this.state.jsonCheckedCategories;
        const jsonCheckedSkills = this.state.jsonCheckedSkills;

        for (const k in jsonCheckedCategories) {
            jsonCheckedCategories[k] = false;
        }
        for (const k in jsonCheckedSkills) {
            jsonCheckedSkills[k] = false;
        }

        this.setState((state, props) => ({
            jsonCheckedCategories,
            jsonCheckedSkills,
        }));

        this.resolveAllFilters();
    }

    openProjectDetails(projId) {
        this.setState((state, props) => ({
            currentNavigateUrlChild: projId
        }));
    }
    closeProjectDetails() {
        this.setState((state, props) => ({
            currentNavigateUrlChild: null
        }));
    }
    
    render() {
        // Prepare floating return button
        const that = this;
        function HomeButton() {
            const navigate = useNavigate();
          
            function handleClick() {
                console.log(that.state);
                that.setState((state, props) => ({
                    currentNavigateUrlChild: null
                }));
                navigate('/projects');
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }
          
            return (
                <Fab color="primary" aria-label="top" onClick={handleClick}><KeyboardReturnIcon></KeyboardReturnIcon></Fab>
            );
        }
        let button;
        if (this.state.currentNavigateUrlChild !== null) {
            button = <HomeButton></HomeButton>;
        }

        const isDisplayingProjectChild = this.state.currentNavigateUrlChild !== null;
        const finalCssProjects = (!isDisplayingProjectChild) ? cssProjects : cssProjectChild;

        const atLeastOneFilteredListWorkEntry = this.state.filteredListWorkEntries.length > 0;
        const atLeastOneFilteredListProjectEntry = this.state.filteredListProjectEntries.length > 0;
        const atLeastOneFilteredListFreelanceEntry = this.state.filteredListFreelanceEntries.length > 0;

        const jsonCheckedCategories = this.state.jsonCheckedCategories;
        const jsonCheckedSkills = this.state.jsonCheckedSkills;

        return (
        <div css={finalCssProjects} >
            {/* Drawer */}
            {!isDisplayingProjectChild &&
                <div css={[cssDrawer]}>
                    <div css={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h1 css={materialTitle}>Projects</h1>
                        <Button onClick={this.clearAllFilters}>Clear</Button>
                    </div>
                    <List>
                        <ListItem key="list-category" divider css={cssDrawerTitle1}>Category</ListItem>
                        <FormGroup>
                        {Object.keys(CATEGORY).map((categoryKey, index) => (
                            <ListItem key={'list-category-' + categoryKey}>
                                <FormControlLabel control={
                                    <Checkbox size="small" 
                                        checked={jsonCheckedCategories[categoryKey] || false}
                                        onChange={(e) => this.onCheckboxCategoryClicked(categoryKey, e)}/>} 
                                    label={CATEGORY[categoryKey]} />
                            </ListItem>
                        ))}
                        </FormGroup>
                    </List>
                    <List>
                        <ListItem key="list-skill" divider css={cssDrawerTitle1}>Skills</ListItem>
                        <FormGroup>
                        {Object.keys(SKILL).map((skillKey, index) => (
                            <div key={'list-skill-' + skillKey} css={cssDrawerSublist}>
                                <ListItem css={cssDrawerTitle2}>{skillKey.charAt(0) + skillKey.slice(1).toLowerCase()}</ListItem>
                                {Object.keys(SKILL[skillKey]).map((s, index) => (
                                    <ListItem key={'list-skillkey-' + s}>
                                        <FormControlLabel control={
                                            <Checkbox size="small" 
                                                checked={jsonCheckedSkills[SKILL[skillKey][s]] || false} 
                                                onChange={(e) => this.onCheckboxSkillClicked(skillKey, s, e)}/>} 
                                            label={SKILL[skillKey][s]} />
                                    </ListItem>
                                ))}
                            </div>
                        ))}
                        </FormGroup>
                    </List>
                </div>
            }

            <div>
                {/* Project default */}
                {!isDisplayingProjectChild &&
                    <div css={{padding: '12px 48px'}}>
                        {atLeastOneFilteredListWorkEntry &&
                            <h2 css={materialTitle}>Work</h2>
                        }
                        <Grid container wrap="wrap" spacing={3} css={cssProjectsGrid}>
                            {this.state.filteredListWorkEntries.map((entry, index) => (
                                <Grid item xs={3} key={'grid-item-' + entry.getProjId()} css={{minWidth: '288px'}}>
                                    <Paper square css={materialGridPaper}>
                                        <div className="paper-image-wrapper">
                                            {entry.getBackgroundImage() &&
                                                <img src={process.env.PUBLIC_URL + '/projectbackgrounds/' + entry.getBackgroundImage()} alt={'Work Card Background ' + entry.getBackgroundImage()}/>
                                            }
                                            {!entry.getBackgroundImage() &&
                                                <Skeleton variant="rectangular" animation={false} className="image-skeleton"></Skeleton>
                                            }
                                        </div>
                                        <h3>
                                            <Link to={`/projects/${entry.getProjId()}`} onClick={(e) => this.openProjectDetails(entry.getProjId(), e)}>{entry.getTitle()}</Link>
                                        </h3>
                                        <div className="paper-content-wrapper">
                                            <div className="paper-content-description">
                                                <p>{entry.getShortDescription()}</p>
                                            </div>
                                        </div>
                                        <div className="paper-content-chips">
                                            {entry.getTags().slice(0, 3).map((s) => (
                                                <Chip key={'chipkey-' + s} label={s} variant="outlined" size="small" color={
                                                    (this.state.tagsToCategoryMap[s] === 'LANGUAGES') ? "info" : 
                                                    (this.state.tagsToCategoryMap[s] === 'FRAMEWORKS/LIBRARIES') ? "success" : 
                                                    (this.state.tagsToCategoryMap[s] === 'OTHER') ? "secondary" : "primary"} css={{ margin: '2px 4px'}}/>
                                            ))}
                                            {entry.getTags().length > 3 &&
                                                <Chip label="+" variant="default" size="small" />
                                            }
                                        </div>
                                        <div className="paper-content-footer">
                                            <p>{entry.getDisplayDate() || ''}</p>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>

                        {atLeastOneFilteredListProjectEntry &&
                            <h2 css={materialTitle}>Projects</h2>
                        }
                        <Grid container wrap="wrap" spacing={3} css={cssProjectsGrid}>
                            {this.state.filteredListProjectEntries.map((entry, index) => (
                                <Grid item xs={3} key={'grid-item-' + entry.getProjId()} css={{minWidth: '288px'}}>
                                    <Paper square css={materialGridPaper}>
                                        <div className="paper-image-wrapper">
                                            {entry.getBackgroundImage() &&
                                                <img src={process.env.PUBLIC_URL + '/projectbackgrounds/' + entry.getBackgroundImage()} alt={'Work Card Background ' + entry.getBackgroundImage()}/>
                                            }
                                            {!entry.getBackgroundImage() &&
                                                <Skeleton variant="rectangular" animation={false} className="image-skeleton"></Skeleton>
                                            }
                                        </div>
                                        <h3>
                                            <Link to={`/projects/${entry.getProjId()}`} onClick={(e) => this.openProjectDetails(entry.getProjId(), e)}>{entry.getTitle()}</Link>
                                        </h3>
                                        <div className="paper-content-wrapper">
                                            <div className="paper-content-description">
                                                <p>{entry.getShortDescription()}</p>
                                            </div>
                                        </div>
                                        <div className="paper-content-chips">
                                            {entry.getTags().slice(0, 3).map((s) => (
                                                <Chip key={'chipkey-' + s} label={s} variant="outlined" size="small" color={
                                                    (this.state.tagsToCategoryMap[s] === 'LANGUAGES') ? "info" : 
                                                    (this.state.tagsToCategoryMap[s] === 'FRAMEWORKS/LIBRARIES') ? "success" : 
                                                    (this.state.tagsToCategoryMap[s] === 'OTHER') ? "secondary" : "primary"} css={{ margin: '2px 4px'}}/>
                                            ))}
                                            {entry.getTags().length > 3 &&
                                                <Chip label="+" variant="default" size="small" />
                                            }
                                        </div>
                                        <div className="paper-content-footer">
                                            <p>{entry.getDisplayDate() || ''}</p>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                        
                        {atLeastOneFilteredListFreelanceEntry &&
                            <h2 css={materialTitle}>Freelance</h2>
                        }
                        <Grid container wrap="wrap" spacing={3} css={cssProjectsGrid}>
                            {this.state.filteredListFreelanceEntries.map((entry, index) => (
                                <Grid item xs={3} key={'grid-item-' + entry.getProjId()} css={{minWidth: '288px'}}>
                                    <Paper square css={materialGridPaper}>
                                        <div className="paper-image-wrapper">
                                            {entry.getBackgroundImage() &&
                                                <img src={process.env.PUBLIC_URL + '/projectbackgrounds/' + entry.getBackgroundImage()} alt={'Work Card Background ' + entry.getBackgroundImage()}/>
                                            }
                                            {!entry.getBackgroundImage() &&
                                                <Skeleton variant="rectangular" animation={false} className="image-skeleton"></Skeleton>
                                            }
                                        </div>
                                        <h3>
                                            <Link to={`/projects/${entry.getProjId()}`} onClick={(e) => this.openProjectDetails(entry.getProjId(), e)}>{entry.getTitle()}</Link>
                                        </h3>
                                        <div className="paper-content-wrapper">
                                            <div className="paper-content-description">
                                                <p>{entry.getShortDescription()}</p>
                                            </div>
                                        </div>
                                        <div className="paper-content-chips">
                                            {entry.getTags().slice(0, 3).map((s) => (
                                                <Chip key={'chipkey-' + s} label={s} variant="outlined" size="small" color={
                                                    (this.state.tagsToCategoryMap[s] === 'LANGUAGES') ? "info" : 
                                                    (this.state.tagsToCategoryMap[s] === 'FRAMEWORKS/LIBRARIES') ? "success" : 
                                                    (this.state.tagsToCategoryMap[s] === 'OTHER') ? "secondary" : "primary"} css={{ margin: '2px 4px'}}/>
                                            ))}
                                            {entry.getTags().length > 3 &&
                                                <Chip label="+" variant="default" size="small" />
                                            }
                                        </div>
                                        <div className="paper-content-footer">
                                            <p>{entry.getDisplayDate() || ''}</p>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                }
                {/* Project Child */}
                <Outlet />
            </div>

            {/* Floating Return */}
            {isDisplayingProjectChild &&
                <div css={cssFloatingActionButton}>
                    {button}
                </div>
            }
        </div>
        );
    }
}

export default withParams(Projects);