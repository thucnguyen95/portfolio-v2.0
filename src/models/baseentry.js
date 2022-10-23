import { getMonthAbbrevByIndex } from './../util/dateformat.js';

export class BaseEntry {
    constructor(projId, title, description, startMonth, startYear, endMonth, endYear, fileName, category, tags, website, backgroundImage) {
        // Required
        this.projId = projId;
        this.title = title;
        this.description = description;
        this.startMonth = startMonth;
        this.startYear = startYear;
        this.endMonth = endMonth;
        this.endYear = endYear;
        this.fileName = fileName;
        this.category = category;
        this.tags = tags;
        // Optional
        this.website = (website !== undefined) ? website : null;
        this.backgroundImage = (backgroundImage !== undefined) ? backgroundImage: null;
    }

    getClassName()      { return "BaseEntry"; }
    getProjId()         { return this.projId; }
    getTitle()          { return this.title; }
    getDescription()    { return this.description; }
    getShortDescription() {
        if (this.description.length <= 180) return this.description;
        return this.description.substring(0, 181) + '...';
    }
    getStartDate() {
        if (this.startMonth === null || this.startYear === null) return null;
        const formattedStartMonth = getMonthAbbrevByIndex(this.startMonth);
        if (formattedStartMonth === null) return null;
        return `${formattedStartMonth} ${this.startYear}`;
    }
    getEndDate() { 
        if (this.endMonth === null || this.endYear === null) return null;
        const formattedEndMonth = getMonthAbbrevByIndex(this.endMonth);
        if (formattedEndMonth === null) return null;
        return `${formattedEndMonth} ${this.endYear}`;
    }
    getDisplayDate() {
        const startDate = this.getStartDate();
        const endDate = this.getEndDate();
        if (startDate === null || endDate === null) return '';
        return `${startDate} - ${endDate}`;
    }
    getFileName()       { return this.fileName; }
    getCategory()       { return this.category; }
    getTags()           { return this.tags; }
    getWebsite()        { return this.website; }
    getBackgroundImage() { return this.backgroundImage; }
}