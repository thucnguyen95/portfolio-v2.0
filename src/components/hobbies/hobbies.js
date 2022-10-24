/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { 
    materialShadow, 
    materialTitle,
    materialPanel,
} from './../../styles_shared/styles-shared.js';

import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import HobbiesDeveloping from './../../assets/images/hobbies-developing.jpg';
import HobbiesReading from './../../assets/images/hobbies-reading.jpg';
import HobbiesAnime from './../../assets/images/hobbies-anime.jpg';
import HobbiesGames from './../../assets/images/hobbies-games.jpg';

// ============================================================================
// Styles
// ============================================================================
const cssPanel = css({
    backgroundColor: '#FFFFFF',
    maxWidth: '3024px',
    margin: '24px auto 96px',
});

// ============================================================================
// ES6 Class
// ============================================================================
class Hobbies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayLoadedImages: new Array(4).fill(false),
        }

        // Bindings
        this.onImageLoaded = this.onImageLoaded.bind(this);
    }

    componentDidMount() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
        <div css={{width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
            <h1 css={[materialTitle]}>Hobbies</h1>
            <div>
                <Grid container css={[cssPanel, materialPanel, materialShadow]}>
                    <Grid item xs={12} md={4} className="panel-image-wrapper">
                        <img src={HobbiesDeveloping} alt="Hobbies - Developing" 
                            onLoad={(e) => this.onImageLoaded(0, e)} 
                            style={(this.state.arrayLoadedImages[0] ? {display: 'block'} : { display: 'none' })} />
                        <Skeleton variant="rectangular" className="image-skeleton" 
                            style={(this.state.arrayLoadedImages[0] ? {display: 'none'} : { display: 'block' })}></Skeleton>
                    </Grid>
                    <Grid item xs={12} md={8} container direction="column" className="panel-content-wrapper">
                        <Grid item xs={10}>
                            <h2>Developing</h2>
                            <div className="panel-content-description">
                                <p>I enjoy working on side projects during my free time. There are quite a few number of project ideas that I want to take from concept to completion. This process involves the entire lifecycle of publishing an app starting with design, to implementation, to deployment, and iterating over and over again.</p>
                                <br/>
                                <p>If I'm not developing, I'm watching relevant videos on Youtube, reading articles on Google, and so on - anything I can do to be productive!</p>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className="panel-footer">
                                <span>Photo by <a href="https://unsplash.com/@emilep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emile Perron</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container css={[cssPanel, materialPanel, materialShadow]}>
                    <Grid item xs={12} md={4} className="panel-image-wrapper">
                        <img src={HobbiesReading} alt="Hobbies - Reading" 
                            onLoad={(e) => this.onImageLoaded(1, e)} 
                            style={(this.state.arrayLoadedImages[1] ? {display: 'block'} : { display: 'none' })}/>
                      <Skeleton variant="rectangular" className="image-skeleton" 
                            style={(this.state.arrayLoadedImages[1] ? {display: 'none'} : { display: 'block' })}></Skeleton>
                    </Grid>
                    <Grid item xs={12} md={8} container direction="column" className="panel-content-wrapper">
                        <Grid item xs={10}>
                            <h2>Reading</h2>
                            <div className="panel-content-description">
                                <p>I believe that reading is a great pastime. However, I only ever read books related to application development, systems design/architecture, algorithms, data structures, and so on - pretty much anything computer science related.</p>
                                <br/>
                                <p> The ideal environment for me to read or do work in is either at a cafe/boba shop or in a library, specifically around noontime, and during a sunny day. There's something about the light and temperature and the fact that I'm leaving the house that puts me in a good mood.</p>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className="panel-footer">
                                <span>Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/reading?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container css={[cssPanel, materialPanel, materialShadow]}>
                    <Grid item xs={12} md={4} className="panel-image-wrapper">
                        <img src={HobbiesAnime} alt="Hobbies - Anime"
                            onLoad={(e) => this.onImageLoaded(2, e)} 
                            style={(this.state.arrayLoadedImages[2] ? {display: 'block'} : { display: 'none' })}/>
                        <Skeleton variant="rectangular" className="image-skeleton" 
                            style={(this.state.arrayLoadedImages[2] ? {display: 'none'} : { display: 'block' })}></Skeleton>
                    </Grid>
                    <Grid item xs={12} md={8} container direction="column" className="panel-content-wrapper">
                        <Grid item xs={10}>
                            <h2>Anime and Manga</h2>
                            <div className="panel-content-description">
                                <p>Yup, I watch anime and read manga. I've been watching/reading since high school and I think it makes for fun conversations with friends/family, inside jokes, and an interesting community. It really is just another form of consumption very similar to how people watch t.v. or streaming services like Netflix, Hulu, and so on.</p>
                                <br/>
                                <p> My favorite genres are drama, slice-of-life, and thrillers. Kudos to the authors that take risks and explore philosophical concepts or social issues in their work. It makes for a good plot and a good story.</p>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className="panel-footer">
                                <span>Photo by <a href="https://unsplash.com/@dexezekiel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dex Ezekiel</a> on <a href="https://unsplash.com/s/photos/anime?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container css={[cssPanel, materialPanel, materialShadow]}>
                    <Grid item xs={12} md={4} className="panel-image-wrapper">
                        <img src={HobbiesGames} alt="Hobbies - Games"
                            onLoad={(e) => this.onImageLoaded(3, e)} 
                            style={(this.state.arrayLoadedImages[3] ? {display: 'block'} : { display: 'none' })} />
                        <Skeleton variant="rectangular" className="image-skeleton" 
                            style={(this.state.arrayLoadedImages[3] ? {display: 'none'} : { display: 'block' })}></Skeleton>
                    </Grid>
                    <Grid item xs={12} md={8} container direction="column" className="panel-content-wrapper">
                        <Grid item xs={10}>
                            <h2>Games</h2>
                            <div className="panel-content-description">
                                <p>Games are a great way for me to de-stress and have fun. I almost always jump on Discord and socialize while playing something. Sometimes I would stream my games for others in the Discord channel to watch. Games on Steam are my go-to because I don't have any gaming consoles.</p>
                                <br/>
                                <p><b>Favorite Titles:</b></p>
                                <ol>
                                    <li>NieR: Automata and NieR: Replicant</li>
                                    <li>Final Fantasy (III, IV, V, VI, VII, VIII, IX, X, XII, XIII, you get the point)</li>
                                    <li>Final Fantasy Tactics Advance (My favorite out of the entire franchise)</li>
                                    <li>League of Legends (unforunately...)</li>
                                    <li>Star Wars Jedi: Fallen Order (a.k.a. Dark Souls for kids)</li>
                                    <li>Pokemon Puzzle League (basically Tetris Attack)</li>
                                </ol>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className="panel-footer">
                                <span>Photo by <a href="https://www.zerochan.net/user/AreWeDelirious">AreWeDelirious</a> on <a href="https://www.zerochan.net/1306822">ZeroChan</a></span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
        );
    }
}

export default Hobbies;