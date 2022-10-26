/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { 
    materialShadow, 
    materialParagraph, 
    materialTitle, 
    materialCard, 
    materialCarousel ,
    materialGridPaper
} from './../../styles_shared/styles-shared.js';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AboutBackground from './../../assets/images/abstract-flat-background.jpg';
import ProfilePicture from './../../assets/images/profile.jpg';
import UcsdBackground from './../../assets/images/ucsd.jpg';
import SdsuBackground from './../../assets/images/sdsu.jpg';
import UciBackground from './../../assets/images/uci.jpg';
import FulgentLogo from './../../assets/images/fulgent-logo.png';

import { ProjectEntry } from './../../models/projectentry.js';
import { SKILL } from './../../models/skill.js';
import { CATEGORY } from './../../models/category.js';
import { FILES_MAP } from './../../models/filesmap.js';

// ============================================================================
// Styles
// ============================================================================
const cssBackground = css({
    position: 'relative',
    'img': {
        display: 'block',
        width: '100%',
    },
    '> div:nth-of-type(1)': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        'h2, p': {
            textAlign: 'center',
        }
    },
    '> div:nth-of-type(2)': {
        position: 'absolute',
        bottom: 16,
        right: 24,
    }
})
const cssProfile = css({
    marginTop: '96px',
    marginBottom: '96px',
    'div:nth-of-type(1)': {
        flexBasis: '40%',
        'img': {
            display: 'block',
            width: '60%',
            maxWidth: '640px',
            margin: '0 auto',
        }
    },
    'div:nth-of-type(2)': {
        flexBasis: '50%',
        'p': materialParagraph,
    }
});
const cssEducation = css({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '24px',
    marginBottom: '64px',
    '> div': {
        width: '30%',
        marginBottom: '12px',
    }
});
const cssWorkExp = css({
    marginTop: '24px',
    marginBottom: '64px',
});
const cssProjects = css({
    marginTop: '24px',
    marginBottom: '64px',
});
const cssSkills = css({
    backgroundColor: '#FFFFFF',
    marginTop: '24px',
    marginBottom: '64px',
});
const cssSkillsCard = css({
    display: 'flex',
    '> div:nth-of-type(1)': {
        flexBasis: '20%',
    },
    '> div:nth-of-type(2)': {
        flexBasis: '80%',
    }
});


// ============================================================================
// ES6 Class
// ============================================================================
class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayMostRecentProjectEntries: []
        };

        // Bindings
        this.openWebsiteLink = this.openWebsiteLink.bind(this);
        this.fetchMostRecentProjects = this.fetchMostRecentProjects.bind(this);
    }

    componentDidMount() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        this.fetchMostRecentProjects();
    }

    fetchMostRecentProjects() {
        // Filter out only projects and sort by end date
        const sortedProjects = Object.values(FILES_MAP)
            .filter((jsonObj) => {
                return jsonObj['category'] === CATEGORY.PROJECTS;
            })
            .sort((jsonA, jsonB) => {
                const endMonthA = jsonA['end_month'];
                const endYearA = jsonA['end_year'];
                const endMonthB = jsonB['end_month'];
                const endYearB = jsonB['end_year'];

                if (endYearA > endYearB) return 1;
                if (endYearA < endYearB) return -1;
                if (endMonthA > endMonthB) return 1;
                if (endMonthA < endMonthB) return -1;
                return 0;
            });
        // Get four most recent
        const fourMostRecentProjects = [];
        for (let i = 0; i < 4; i++) {
            const proj = sortedProjects[sortedProjects.length - 1 - i];
            fourMostRecentProjects.push(proj);
        }

        // Transform into respective ProjectEntry object
        const arrayMostRecentProjectEntries = [];
        for (const jsonValue of fourMostRecentProjects) {
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
            const projectGroup = jsonValue['project_group'];
                
            const projectEntry = new ProjectEntry(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, projectGroup, website, backgroundImage);
            arrayMostRecentProjectEntries.push(projectEntry);
        }

        this.setState((state, props) => ({
            arrayMostRecentProjectEntries
        }));
    }

    openWebsiteLink(link) {
        window.open(link, '_blank');
    }

    render() {
        return (
        <div>
            {/* Landing Image and Title */}
            <div css={cssBackground}>
                <img src={AboutBackground} alt="About background" />
                <div>
                    <Typography variant="h2" component="h2" sx={{color: '#212121', fontSize: { xs: '1.6rem', md: '3.0rem' } }}>
                        Thuc Nguyen
                    </Typography>
                    <Typography variant="p" component="p" sx={{fontSize: { xs: '1.0rem', md: '1.6rem' }}}>
                        Software Engineer
                    </Typography>
                </div>
                <div>
                    <Typography variant="p" sx={{fontSize: { xs: '0.8rem', md: '1.0rem' }}}>
                        <a href="https://www.vecteezy.com/free-vector/abstract-background">Abstract Background Vectors by Vecteezy</a>
                    </Typography>
                </div>
            </div>
            
            <div css={{width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                {/* Profile */}
                <Container maxWidth="xl">
                    <Box  css={cssProfile} sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        }
                    }}>
                        <div>
                            <img src={ProfilePicture} alt="Profile"></img>
                        </div>
                        <div>
                            <h2 css={materialTitle}>Welcome!</h2>
                            <p>My name is Thuc (pronounced "Tuck") and this is an online portfolio of most of the projects I've completed throughout my career as a software engineer. This includes projects from undergrad, grad, internships, and work.</p>
                            <br/>
                            <p><b>A brief overview of my journey:</b></p>
                            <p>I was a Human Biology major during undergrad at UCSD and became really interested in Computer Science during that time. Due to personal reasons, I didn't make the switch in majors and instead, self-taught myself the fundamentals. I decided to fully transition careers after undergrad and completed a Web and Mobile Applications Development certificate program at SDSU. Afterward, I attended UCI for the Master of Software Engineering program and had an amazing experience there!</p>
                            <br/>
                            <p>My most recent employment was at a genetics company called Fulgent Genetics, where I was a Solutions Software Engineer assisting the team in development and maintenance of their internal management system.</p>
                        </div>
                    </Box>
                </Container>

                {/* Education */}
                <h2 css={[materialTitle]}>Education</h2>
                <div css={cssEducation}>
                    <div css={[materialCard, materialShadow]}>
                        <div>
                            <img src={UcsdBackground} alt="UCSD"></img>
                        </div>
                        <div className="card-content-wrapper">
                            <h3 className="card-content-header">University of California, San Diego</h3>
                            <p className="card-content-subtitle">B.S. in Human Biology</p>
                            <div className="card-content-footer">
                                <p>3.4 GPA</p>
                                <p>Sep 2013 - Jun 2017</p>
                            </div>
                        </div>
                    </div>
                    <div css={[materialCard, materialShadow]}>
                        <div>
                            <img src={SdsuBackground} alt="SDSU"></img>
                        </div>
                        <div className="card-content-wrapper">
                            <h3 className="card-content-header">San Diego State University</h3>
                            <p className="card-content-subtitle">Certificate in Web and Mobile Applications Development</p>
                            <div className="card-content-footer">
                                <p>4.0 GPA</p>
                                <p>Aug 2017 - May 2018</p>
                            </div>
                        </div>
                    </div>
                    <div css={[materialCard, materialShadow]}>
                        <div>
                            <img src={UciBackground} alt="UCI"></img>
                        </div>
                        <div className="card-content-wrapper">
                            <h3 className="card-content-header">University of California, Irvine</h3>
                            <p className="card-content-subtitle">Master of Software Engineering</p>
                            <div className="card-content-footer">
                                <p>3.9 GPA</p>
                                <p>Sep 2019 - Dec 2020</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work Experience */}
                <h2 css={[materialTitle]}>Work Experience</h2>
                <div css={cssWorkExp}>
                    <div css={materialCarousel}>
                        <ArrowLeftIcon className="carousel-arrows"></ArrowLeftIcon>
                        <Grid container css={materialShadow} className="carousel-container">
                            <Grid item xs={12} md={4} className="carousel-image-wrapper" sx={{marginTop: { xs: '48px', md: '0' }}}>
                                <img src={FulgentLogo} alt="Fulgent Genetics"/>
                            </Grid>
                            <Grid item xs={12} md={8} className="carousel-content-wrapper">
                                <h2>Fulgent Genetics</h2>
                                <Box className="carousel-content-sub-wrapper" sx={{ flexDirection: { xs: 'column !important', md: 'row !important' } }}>
                                    <p className="carousel-content-subtitle"><i>Solutions Software Engineer</i></p>
                                    <p className="carousel-content-date">Feb 2021 - Jun 2022</p>
                                </Box>
                                <div className="carousel-content-description">
                                    <Typography paragraph sx={{ fontSize: { xs: '0.9rem !important', md: '1.0rem !important' } }}>
                                        Fulgent Genetics is a genomic testing company that focuses on providing sequencing and diagnostic testing results to patients and institutions. The services they offer include patient care and testing in oncology, pathology, infectious and rare diseases, and more.
                                    </Typography>
                                    <Typography paragraph sx={{ fontSize: { xs: '0.9rem !important', md: '1.0rem !important' } }}>
                                        The team I worked under was called FLIMS, which was the primary management system, and my responsibilities were diverse: from fixing small bugs to designing and implementing an integration for a new product line or service.
                                    </Typography>
                                </div>
                                <div className="carousel-content-actions">
                                    <Button onClick={(e) => this.openWebsiteLink('https://fulgentgenetics.com/', e)}>Company Website</Button>
                                </div>
                            </Grid>
                        </Grid>
                        <ArrowRightIcon className="carousel-arrows"></ArrowRightIcon>
                    </div>
                </div>

                {/* Projects */}
                <h2 css={[materialTitle]}>Projects</h2>
                <div css={[cssProjects]}>
                    <div>
                        <Grid container wrap="wrap" spacing={2} justifyContent="space-around">
                            {this.state.arrayMostRecentProjectEntries.map((entry, index) => (
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
                                            <Link to={`/projects/${entry.getProjId()}`}>{entry.getTitle()}</Link>
                                        </h3>
                                        <div className="paper-content-wrapper">
                                            <div className="paper-content-description">
                                                <p>{entry.getShortDescription()}</p>
                                            </div>
                                        </div>
                                        <div className="paper-content-footer">
                                            <p>{entry.getDisplayDate() || ''}</p>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>

                {/* Skills */}
                <h2 css={[materialTitle]}>Skills</h2>
                <div css={[cssSkills, materialShadow]}>
                    {Object.keys(SKILL).map((skillCategory) => 
                        <Box key={'skillcategory-' + skillCategory} css={cssSkillsCard} sx={{flexDirection: { xs: 'column', md: 'row' } }}>
                            <div css={{padding: '24px 48px'}}>
                                <p>{skillCategory}</p>
                            </div>
                            <div css={{padding: '24px 48px'}}>
                                {Object.values(SKILL[skillCategory]).map((s) => 
                                    <Chip key={'skill-' + s} label={s} variant="outlined" color={
                                        (skillCategory === 'LANGUAGES') ? "info" : 
                                        (skillCategory === 'FRAMEWORKS/LIBRARIES') ? "success" : 
                                        (skillCategory === 'OTHER') ? "secondary" : "primary"} css={{ margin: '2px 4px'}}/>
                                )}
                            </div>
                        </Box>
                    )}
                </div>
            </div>
        </div>
        );
    }
}

export default About;