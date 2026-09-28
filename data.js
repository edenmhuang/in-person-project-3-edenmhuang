// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Eden",        // TODO: Add your name
        title: "Data Science Student",      // TODO: Add your professional title
        email: "edenhuangg@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: "Hi, I'm Eden, a senior studying Data Science at UC Berkeley's College of Computing, Data Science and Society. I like to work with data and solve problems where the data tells the story. I love the process of getting there, from wrangling raw data all the way to visualizations that make data insight click. Feel free to message me and take a look at my profile." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Microsoft Excel",
        "R",
        "Python",       // TODO: Replace with your actual skills
        "SQL",          // TODO: Add more skills
        "CSS3",         // TODO: Students should have at least 5 skills
        "JavaScript"    // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Stock Portfolio Case Study",
            description: "An end-to-end ML pipeline in R that turns 600+ raw financial fundamentals into a ranked, conviction-weighted portfolio, evaluated on realized profit.",
            technologies: ["R", "PCA", "Naive Bayes", "Linear Regression", "kNN + k-means", "5-fold CV", "Feature Engineering", "Portfolio Optimization"], // Array of technologies used
            completionDate: "2025-05-15",            // When you completed it
            featured: true                            // Is this a featured project?
        },
        {
            title: "Electric Vehicle Infrastructure Structure Analysis", 
            description: "California's 2035 zero-emission vehicle mandate means EV charging infrastructure needs to scale fast. But is it being built in the right places? Our team analyzed San Mateo County to find out whether charging access is equitably distributed across income levels.",
            technologies: ["Python", "Linear Regression", "EDA", "Data Preprocessing"],
            completionDate: "2024-05-10",
            featured: false
        },
        // TODO: Add more projects during class
        {
            title: "Song Popularity Predictor",
            description: "Interactive Streamlit dashboard predicting Spotify hit songs by genre using XGBoost machine learning.",
            technologies: ["Python", "Streamlit", "XGBoost", "Scikit-learn", "Pandas", "Plotly"],
            completionDate: "2026-05-10",
            featured: true
        }
    ],
    
    // Contact and availability information
    availability: {
        freelance: true,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// // Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
console.log("Summary:", summary);

console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);