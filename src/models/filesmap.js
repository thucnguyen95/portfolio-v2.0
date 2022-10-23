import { CATEGORY } from './category.js';
import { SKILL } from './skill.js'

export const FILES_MAP = {
    "cs545_project1":
    {
        proj_id: "cs545_project1",
        title: "CS545 PR1 - Montreal",
        description: "An introduction to web applications - this assignment requires the use of strict HTML and CSS to build a basic website on whichever topic of interest.",
        start_month: 7,
        start_year: 2017,
        end_month: 8,
        end_year: 2017,
        file_name: "cs545_project1.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.HTML, 
            SKILL.LANGUAGES.CSS
        ],
        project_group: "CS545",
        background_image: "cs545_project1.jpg",
    },
    "cs545_project2":
    {
        proj_id: "cs545_project2",
        title: "CS545 PR2 - Marathon (Client)",
        description: "First part of a two-part assignment which uses HTML, CSS, and JS to build an application that allows users to sign up for a fictitious marathon. Main focus of the assignment is to present a form for the user, validate the form, submit the information, and receive a confirmation.",
        start_month: 8,
        start_year: 2017,
        end_month: 9,
        end_year: 2017,
        file_name: "cs545_project2.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.HTML, 
            SKILL.LANGUAGES.CSS,
            SKILL.LANGUAGES.JAVASCRIPT
        ],
        project_group: "CS545",
        background_image: "cs545_project2.gif",
    },
    "cs545_project3":
    {
        proj_id: "cs545_project3",
        title: "CS545 PR3 - Marathon (Server)",
        description: "Second part of a two-part assignment which uses PHP, AJAX, and MySQL to build an application that allows users to sign up for a fictitious marathon. Main focus of this part is to allow user information to be processed on the server and stored in the database. Validation must also be completed server-side.",
        start_month: 9,
        start_year: 2017,
        end_month: 10,
        end_year: 2017,
        file_name: "cs545_project3.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVASCRIPT,
            SKILL.LANGUAGES.PHP,
            SKILL.LANGUAGES.SQL,
            SKILL.OTHER.MYSQL
        ],
        project_group: "CS545",
        background_image: "cs545_project3.gif",
    },
    "cs545_project4":
    {
        proj_id: "cs545_project4",
        title: "CS545 PR4 - Bertha's Deluxe Chocolates",
        description: "Created a fictional online store website that is based off of See's Candies. The store produces chocolates and confections that can be purchased online, and allows users to browser products and add to a shopping cart.",
        start_month: 10,
        start_year: 2017,
        end_month: 11,
        end_year: 2017,
        file_name: "cs545_project4.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.HTML,
            SKILL.LANGUAGES.CSS,
            SKILL.LANGUAGES.JAVASCRIPT,
            SKILL.LANGUAGES.PERL,
            SKILL['FRAMEWORKS/LIBRARIES'].JQUERY,
            SKILL.OTHER.MYSQL,
        ],
        project_group: "CS545",
        background_image: "cs545_project4.png",
    },
    "cs645_project1":
    {
        proj_id: "cs645_project1",
        title: "CS645 PR1 - Perl/CGI/JS/SQL Review",
        description: "Created an online store selling backpacks. The assignment is designed to reinforce principles of state management, sessions and cookies, encryption, and data serialization.",
        start_month: 0,
        start_year: 2018,
        end_month: 1,
        end_year: 2018,
        file_name: "cs645_project1.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.HTML,
            SKILL.LANGUAGES.CSS,
            SKILL.LANGUAGES.JAVASCRIPT,
            SKILL.LANGUAGES.PERL,
            SKILL['FRAMEWORKS/LIBRARIES'].JQUERY,
            SKILL.OTHER.MYSQL
        ],
        project_group: "CS645",
        background_image: "cs645_project1.png",
    },
    "cs645_project2":
    {
        proj_id: "cs645_project2",
        title: "CS645 PR2 - Java Servlets/JSP",
        description: "The second part of CS645 Project 1 - the customer application or online storefront.  The 'face' of the business to the public. Dynamic content from the server is done with Java servlets or JSP.",
        start_month: 1,
        start_year: 2018,
        end_month: 3,
        end_year: 2018,
        file_name: "cs645_project2.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.HTML,
            SKILL.LANGUAGES.CSS,
            SKILL.LANGUAGES.JAVASCRIPT,
            SKILL.LANGUAGES.JAVA,
            SKILL['FRAMEWORKS/LIBRARIES'].JQUERY,
            SKILL.OTHER.JSP,
            SKILL.OTHER.MYSQL,
        ],
        project_group: "CS645",
        background_image: "cs645_project2.gif",
    },
    "cs645_project3":
    {
        proj_id: "cs645_project3",
        title: "CS645 PR3 - Google Web Toolkit (GWT)",
        description: "Developed an online white board application using Google Web Toolkit. The application is designed to allow users to have an editable writing space where they can note important reminders, or keep to-do lists, or communicate with others.",
        start_month: 3,
        start_year: 2018,
        end_month: 4,
        end_year: 2018,
        file_name: "cs645_project3.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA,
            SKILL.LANGUAGES.CSS,
            SKILL.OTHER.GWT,
        ],
        project_group: "CS645",
        background_image: "cs645_project3.gif",
    },
    "cs646_project1":
    {
        proj_id: "cs646_project1",
        title: "CS646 PR1 - Swift",
        description: "This assignment asks questions that deal with the basic syntax of Swift 4.0.",
        start_month: 7,
        start_year: 2017,
        end_month: 8,
        end_year: 2017,
        file_name: "cs646_project1.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.SWIFT
        ],
        project_group: "CS646",
        background_image: "swift.png",
    },
    "cs646_project2":
    {
        proj_id: "cs646_project2",
        title: "CS646 PR2 - Linked List, High-Order Funcs",
        description: "This assignment like project 1 attempts to develop understanding of the Swift 4.0 language. Primarily, this assignment focuses on classes, enums, structs, protocols, and extensions.",
        start_month: 8,
        start_year: 2017,
        end_month: 8,
        end_year: 2017,
        file_name: "cs646_project2.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.SWIFT
        ],
        project_group: "CS646",
        background_image: "swift.png",
    },
    "cs646_project3":
    {
        proj_id: "cs646_project3",
        title: "CS646 PR3 - Color View and Slider",
        description: "This assignment introduces UIKit, views, controls, and other aspects of the framework. More specifically, it asks for implementation of the keyboard for text input, text fields and buttons, dialogs, sliders, and touches on persistence of data.",
        start_month: 8,
        start_year: 2017,
        end_month: 9,
        end_year: 2017,
        file_name: "cs646_project3.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.SWIFT,
            SKILL.OTHER.XCODE
        ],
        project_group: "CS646",
        background_image: "cs646_project3.png",
    },
    "cs646_project4":
    {
        proj_id: "cs646_project4",
        title: "CS646 PR4 - Sampler App",
        description: "This assignment introduces more UI elements to be familiar with. This includes UITabController, UIPickerView, MKMapView within the MapKit library, UISegmented control, UIActivityIndicatorView, the UIAlertController, and a review of the UISlider.",
        start_month: 9,
        start_year: 2017,
        end_month: 9,
        end_year: 2017,
        file_name: "cs646_project4.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.SWIFT,
            SKILL.OTHER.XCODE
        ],
        project_group: "CS646",
        background_image: "cs646_project4.png",
    },
    "cs646_project5":
    {
        proj_id: "cs646_project5",
        title: "CS646 PR5 - SDSU Hometown Locations",
        description: "This assignment focuses on networks and protocols, primarily using GET and POST urls to communicate with a server to retrieve and post user data. It also requires integration of maps. The app allows users to post where they are from and allow them to see on a map where others are from.",
        start_month: 9,
        start_year: 2017,
        end_month: 10,
        end_year: 2017,
        file_name: "cs646_project5.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.SWIFT,
            SKILL.OTHER.XCODE
        ],
        project_group: "CS646",
        background_image: "cs646_project5.gif",
    },
    "cs64601_project1":
    {
        proj_id: "cs64601_project1",
        title: "CS646.01 PR1 - Converting Currencies",
        description: "Created an app that converts USD to INR and INR to USD. The user can enter either INR or USD. When they press the convert button, the amount gets converted into the other currency. Orientation of the device should be handled.",
        start_month: 0,
        start_year: 2018,
        end_month: 0,
        end_year: 2018,
        file_name: "cs64601_project1.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA,
            SKILL.OTHER.ANDROIDSTUDIO
        ],
        project_group: "CS646.01",
        background_image: "cs64601_project1.png",
    },
    "cs64601_project2":
    {
        proj_id: "cs64601_project2",
        title: "CS646.01 PR2 - Personal Information",
        description: "This assignment introduce more UI widgets and layouts and data persistence. This includes fragments to navigate from one view to another instead of only from activity to activity. Intents to call other Activities, handling the keyboard, and permanent storage of data are reviewed.",
        start_month: 0,
        start_year: 2018,
        end_month: 1,
        end_year: 2018,
        file_name: "cs64601_project2.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA,
            SKILL.OTHER.ANDROIDSTUDIO
        ],
        project_group: "CS646.01",
        background_image: "cs64601_project2.png",
    },
    "cs64601_project3":
    {
        proj_id: "cs64601_project3",
        title: "CS646.01 PR3 - Circles (2D Graphics)",
        description: "This assignment introduces handling of touch events, 2D graphics, and using the accelerometer.",
        start_month: 1,
        start_year: 2018,
        end_month: 1,
        end_year: 2018,
        file_name: "cs64601_project3.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA,
            SKILL.OTHER.ANDROIDSTUDIO
        ],
        project_group: "CS646.01",
        background_image: "cs64601_project3.gif",
    },
    "cs64601_project4":
    {
        proj_id: "cs64601_project4",
        title: "CS646.01 PR4 - SDSU Class Registration",
        description: "This app is about networks and allows users to register for classes. They can register up to 3 courses, add themselves to waitlists for full courses, drop classes, drop fom waitlists, and enter in their personal information.",
        start_month: 1,
        start_year: 2018,
        end_month: 3,
        end_year: 2018,
        file_name: "cs64601_project4.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA,
            SKILL.OTHER.ANDROIDSTUDIO
        ],
        project_group: "CS646.01",
        background_image: "cs64601_project4.gif",
    },
    "cse11_project1":
    {
        proj_id: "cse11_project1",
        title: "CSE11 PR1 - FourDice",
        description: "An introduction to Java. Created a program that uses a single random number generator instance to generate four different random numbers.",
        start_month: 0,
        start_year: 2017,
        end_month: 0,
        end_year: 2017,
        file_name: "cse11_project1.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA
        ],
        project_group: "CSE11",
        background_image: "java.jpg",
    },
    "cse11_project2":
    {
        proj_id: "cse11_project2",
        title: "CSE11 PR2 - DoubleArray11",
        description: "This assignment asks to implement a dynamic array, or ArrayList. There are several methods that are declared and required to be implemented.",
        start_month: 0,
        start_year: 2017,
        end_month: 1,
        end_year: 2017,
        file_name: "cse11_project2.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA
        ],
        project_group: "CSE11",
        background_image: "java.jpg",
    },
    "cse11_project3":
    {
        proj_id: "cse11_project3",
        title: "CSE11 PR3 - Trains",
        description: "This assignment will hone skills for working with Java interfaces, working with arrays one and two-dimensional, and using public methods in classes for communication.",
        start_month: 1,
        start_year: 2017,
        end_month: 1,
        end_year: 2017,
        file_name: "cse11_project3.txt",
        category: CATEGORY.PROJECTS,
        tags:
        [
            SKILL.LANGUAGES.JAVA
        ],
        project_group: "CSE11",
        background_image: "java.jpg",
    },
    "fulgentgenetics":
    {
        proj_id: "fulgentgenetics",
        title: "Fulgent Genetics",
        description: "Fulgent Genetics is a genomic testing company that focuses on providing sequencing and diagnostic testing results to patients and institutions. The services they offer include patient care and testing in oncology, pathology, infectious and rare diseases, and more.",
        start_month: 1,
        start_year: 2021,
        end_month: 5,
        end_year: 2022,
        file_name: "work_fulgentgenetics.txt",
        category: CATEGORY.WORK,
        tags: 
        [
            SKILL.LANGUAGES.JAVASCRIPT,
            SKILL.LANGUAGES.SQL,
            SKILL.LANGUAGES.HTML,
            SKILL.LANGUAGES.CSS,
            SKILL['FRAMEWORKS/LIBRARIES'].VUE,
            SKILL['FRAMEWORKS/LIBRARIES'].AXIOS,
            SKILL['FRAMEWORKS/LIBRARIES'].EXPRESS,
            SKILL.OTHER.NODE,
            SKILL.OTHER.MYSQL,
            SKILL.OTHER.SQLITE,
            SKILL.OTHER.ORACLE_SQL,
            SKILL.OTHER.JIRA,
            SKILL.OTHER.GIT,
            SKILL.OTHER.PM2,
        ],
        website: "https://www.fulgentgenetics.com/",
        company: "Fulgent Genetics",
        location: "El Monte, CA",
        background_image: "work_fulgent.png",
    },
    "masterhairandnails":
    {
        proj_id: "masterhairandnails",
        title: "Master Hair and Nails",
        description: "Master Hair and Nails is a salon that has been serving Ramona since 2004. They employ hairstylists and manicurists and offer a range of products and services including haircutting, dyeing, highlighting, pedicures, skin care services, and more!",
        start_month: 2,
        start_year: 2020,
        end_month: 5,
        end_year: 2020,
        file_name: "masterhairandnails.txt",
        category: CATEGORY.FREELANCE,
        tags: [],
        website: "https://www.masterhairandnails.com/",
        company: "Master Hair and Nails",
        location: "Ramona, CA",
        background_image: "freelance_masterhairandnails1.png",
    },
    "elegantedental":
    {
        proj_id: "elegantedental",
        title: "Elegante Dental Care",
        description: "Elegante Dental Care is a dental clinic based in Corpus Christi and offers services ranging from preventative, restorative, and cosmetic services. These include cleanings, x-rays, composite restorations, root canal treatment, veneers, crowns, and more!",
        start_month: 2,
        start_year: 2018,
        end_month: 4,
        end_year: 2018,
        file_name: "elegantedental.txt",
        category: CATEGORY.FREELANCE,
        tags: [],
        website: "http://www.elegantedental.com/",
        company: "Elegante Dental Care",
        location: "Corpus Christi, TX",
        background_image: "freelance_elegantedental1.png",
    }
};