import { BaseEntry } from './baseentry.js';

export class ProjectEntry extends BaseEntry {
    constructor(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, projectGroup, website, backgroundImage) {
        super(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, website, backgroundImage);
        // Required
        this.projectGroup = (projectGroup !== undefined) ? projectGroup : null;
    }

    getClassName()          { return "ProjectEntry"; }
    getProjId()             { return super.getProjId(); }
    getTitle()              { return super.getTitle(); }
    getDescription()        { return super.getDescription(); }
    getShortDescription()   { return super.getShortDescription(); }
    getStartDate()          { return super.getStartDate(); }
    getEndDate()            { return super.getEndDate(); }
    getDisplayDate()        { return super.getDisplayDate(); }
    getFileName()           { return super.getFileName(); }
    getCategory()           { return super.getCategory(); }
    getTags()               { return super.getTags(); }
    getWebsite()            { return super.getWebsite(); }
    getBackgroundImage()    { return super.getBackgroundImage(); }

    // Child Methods
    getProjectGroup()       { return this.projectGroup; }
}
