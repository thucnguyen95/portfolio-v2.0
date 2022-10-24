/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Units
export const materialShadow = css({
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
});
export const materialTitle = css({
    color: '#616161',
    fontSize: '1.8rem',
    lineHeight: '1.6em',
    marginTop: '8px',
    marginBottom: '8px',
});
export const materialHeading = css({
    color: '#424242',
    fontSize: '1.2em',
    lineHeight: '1.4em',
});
export const materialSubtitle = css({
    color: '#424242',
    fontSize: '0.9em',
    lineHeight: '1.4em',
});
export const materialParagraph = css({
    color: '#424242',
    fontSize: '1.1em',
    lineHeight: '1.8em',
});
export const materialNavLink = css({
    color: '#424242',
    lineHeight: '1.6em',
    textDecoration: 'none',
    transition: '0.3s',
    '&:hover': {
        color: '#007BFF',
        transition: '0.3s',
    }
});

// Composed Units
export const materialMenu = css({
    // display: 'flex',
    // justifyContent: 'start',
    '> div': { margin: '0px 12px' },
    'a': materialNavLink,
    'a.active': {
        color: '#007BFF',
    }
});
export const materialMenuTitle = css({
    materialTitle,
    a: {
        textDecoration: 'none',
        color: '#424242',
    }
});
export const materialCard = css({
    minWidth: '320px',
    maxWidth: '640px',
    img: {
        display: 'block',
        width: '100%',
        maxWidth: '640px',
        maxHeight: '300px',
        objectFit: 'cover',
        margin: 'auto auto',
    },
    '.card-content-wrapper': {
        padding: '12px 16px',
    },
    '.card-content-header': {
        color: '#424242',
    },
    '.card-content-subtitle': {
        materialParagraph,
        fontStyle: 'italic',
        marginBottom: '24px',
    },
    '.card-content-footer': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
});
export const materialCarousel = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '.carousel-arrows': {
        width: '5%',
        color: '#616161',
        fontSize: '5.0em',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
            color: '#007BFF',
            transition: '0.3s',
        }
    },
    '.carousel-container': {
        backgroundColor: '#FFFFFF',
        width: '85%',
        maxWidth: '3024px',
        // maxHeight: '405px',
    },
    '.carousel-image-wrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px dashed red',
        // margin: '12px 0px',
        img: {
            display: 'block',
            width: '80%',
            height: '100%',
            minWidth: '160px',
            maxWidth: '1040px',
            maxHeight: '320px',
            objectFit: 'contain',
            // margin: 'auto',
        }
    },
    '.carousel-content-wrapper': {
        padding: '24px 48px',
    },
    h2: materialTitle,
    '.carousel-content-sub-wrapper': {
        // display: 'flex',
        // justifyContent: 'space-between',
        margin: '8px 0px 24px',
    },
    '.carousel-content-subtitle': materialParagraph,
    '.carousel-content-date': materialParagraph,
    '.carousel-content-description': {
        p: materialParagraph,
    },
    '.carousel-content-actions': {
        margin: '24px 0px 0px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
});
export const materialPanel = css({
    '.panel-image-wrapper': {
        // maxHeight: '360px',
        img: {
            display: 'block',
            width: '100%',
            minWidth: '300px',
            // maxWidth: '720px',
            height: '100%',
            objectFit: 'cover',
        },
        '.image-skeleton': {
            width: '100%',
            height: '360px',
        }
    },
    '.panel-content-wrapper': {
        padding: '24px 48px',
    },
    h2: materialTitle,
    '.panel-content-description': {
        p: materialParagraph,
        'ol, ul': {
            marginLeft: '5%'
        },
        li: {
            color: '#424242',
            lineHeight: '1.6em',
        }
    },
    '.panel-footer': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '0.9em',
        marginTop: '12px',
    },
});
export const materialGridPaper = css({
    display: 'flex',
    flexDirection: 'column',
    '.paper-image-wrapper': {
        marginBottom: '4px',
        width: '100%',
        height: '180px',
        img: {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        '.image-skeleton': {
            width: '100%',
            height: '180px',
        }
    },
    'h3 a': [materialSubtitle, { 
        fontSize: '0.85em',
        padding: '2px 12px',
        cursor: 'pointer',
        transition: '0.3s',
        textDecoration: 'none',
        '&:hover': {
            color: '#007BFF',
            transition: '0.1s',
        },
    }],
    '.paper-content-wrapper': {
        flexGrow: '1',
        height: '128px',
        overflowY: 'auto',
        padding: '2px 12px',
    },
    '.paper-content-description': {
        P: {
            color: '#424242',
            fontSize: '0.85em',
            lineHeight: '1.4em',
        }
    },
    '.paper-content-chips': {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '2px 12px',
    },
    '.paper-content-footer': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '0.9em',
        fontWeight: 'bold',
        padding: '2px 12px',
    }
});