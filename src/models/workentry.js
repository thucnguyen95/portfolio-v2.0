import { BaseEntry } from './baseentry.js';

export class WorkEntry extends BaseEntry {
    constructor(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, company, location, website, backgroundImage, position) {
        super(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, website, backgroundImage);
        // Required
        this.company = (company !== undefined) ? company : null;
        this.location = (location !== undefined) ? location : null;
        // Optional
        this.position = (position !== undefined) ? position : null;
    }

    getClassName()          { return "WorkEntry"; }
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
    getCompany()            { return this.company; }
    getLocation()           { return this.location; }
    getPosition()           { return this.position; }
}
