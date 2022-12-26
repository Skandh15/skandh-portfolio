/* 

For CSS (Colours) editing, head to 'css/root.css'

Here you can edit the main values for your page, such as the name, job title, etc.
Ofcourse you may take full advantage of editing it yourself through the code if you wish.

*/

// Page Styling ------------------------------------------------------------------

export let pageStyling = {
    backgroundColor: "#201f25", // Main Page Background Color
    foregroundColor: "#33313a", // Foreground Color
    primaryColor: "#38cdee", // Neon Color
    secondaryColor: "#4edcff", // Underglow Color
    textColor: "#bebebe",
    subTextColor: "#616161",
    font: "Consolas, Lucida Sans Typewriter, Lucida Console, Monaco, Bitstream Vera Sans Mono, monospace",
    particleEffect: true,
};

// Navigation --------------------------------------------------------------------

export let navigation = {
    navLogo: { // Navigation Logo
        enabled: false, // Do you want to use a Branding?
        isImage: false, // Do you want to use an Image? If not, alt text will be used
        imageURL: "https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png",
        logoWidth: "75px", // Size of your logo, adjustable without the CSS
        altText: "Your Logo", // This will be used if it is not an Image (Will also be the alt text if it is an image)
        linkTo: "#",
    },

    leftNavigation: [ // Add items to the left side of the navigation Bar
        {
            text: "",
            url: "#",
        },
    ],

    rightNavigation: [ // Add items to the right side of the navigation Bar
        {
            text: "_About Me", // Text Value
            url: "#aboutme", // Anchor points or External URLS, you may have to edit the App.js to add Anchors
        },
        {
            text: "_Experience",
            url: "#experience",
        },
        {
            text: "_Skills",
            url: "#skills",
        },
        {
            text: "_Contact",
            url: "mailto:skandh15@outlook.com",
        },
    ],

    // Enable / Disable a Resume Button to allow a user to download your RESUME

    resumeBtn: {
        enabled: true, // Enable / Disable
        downloadIcon: true, // Show Icon
        text: "Resume", // Text on Button
        url: "https://drive.google.com/file/d/1rSxGPk_mOeGG5UJbxYsmYZVeSJvE6zBl/view?usp=sharing", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }
};

// Information ------------------------------------------------------------------------

export let information = {
    fullName: "Skandh Gupta", // Name in Profile Banner
    welcomeMsg: "Welcome! I am,", // Welcome subheading above Name
    aboutMe: "Competent, diligent as well as polyglot professional having experience of 3+ years as a Full Stack Engineer.", // Short Description
    companyName: "Senior Software Engineer @ United Health Group", // Your position @ a Company
};

// Socials ----------------------------------------------------------------------------

export let socials = {
    whatsappURL: "https://wa.me/8470872457/", // Whatsapp
    callURL: "tel:8470872457", // Call Number
    linkedinURL: "https://www.linkedin.com/in/skandh-gupta/", // LinkedIn
};

// About Me ----------------------------------------------------------------------------

export let aboutMe = {
    description: "I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I am always looking for an opportunity to do better and achieve greatness. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. I love learning new technologies out there. In my previous role, I was promoted two times in less than 3 years.",
    quote: "\"The Best Preparation For Tommorow Is Doing Your Best Today.\"",
};

// Portfolio ---------------------------------------------------------------------------

export let portfolioCards = [
    {
        projectTitle: "Care Explorer",
        projectDesc: "Care explorer is a microproduct which bridges the gap between challenges users are facing with finding care by walking them through the certain steps like goals, needs and standard assessments like phq4, phq9, gad7 and then find the right for users."
    },
    {
        projectTitle: "Live and Work Well",
        projectDesc: "Since UHG is a product-based organization and Live and Work Well is inhouse product. It is one of the largest consumer portals with more than 30 million members able to access their behavioral benefits. Live and Work Well is currently serving more than 11,304,564 active users."
    }
];

// Experience -------------------------------------------------------------------------

export let experience = {
    experiences: [ // Preferably, sort by newest first
        {
            companyLogo: "", // Leave Blank for Template Logo
            companyName: "The New Company", // Company Name
            companyLocation: "Selangor, Malaysia", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Software Engineer",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Apr 2020", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
                {
                    role: "Intern",
                    type: "Internship", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Jan 2020", // Preferable format
                    endPeriod: "Apr 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        }
    ]
};

// Skills -----------------------------------------------------------------------------

export let skills = {
    //Pie Chart Editing
    radius: 42, // of the circle
    lineWidth: 15, //The line Width of all segments
    paddingAngle: 5, // The distance between each segment
    //Labels
    labelPosition: 72, // Location of Label. Outer = 166
    fontSize: '2px', // Size of the Label
    //Pie Chart Data
    skillsData: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        {
            title: 'ReactJS', value: 45, color: '#28ACEA', experience: '3 years',
            description: 'Built multiple ReactJS based websites with integration of NodeJS and Redux'
        },
        {
            title: 'Java', value: 25, color: '#19CEEB', experience: '2 years',
            description: 'Worked on multiple Minecraft Plugins and Text-Based Adventure Survival CLI game'
        },
        {
            title: 'C++', value: 10, color: '#09EBEE', experience: '1 year',
            description: 'Sorting system of user class information'
        },
        {
            title: 'Others', value: 20, color: '#00FEEF', experience: '1 year',
            description: 'Experience with Game Development such as Unity (C#) having 2 published games on the Play Store.'
        },
    ],
}