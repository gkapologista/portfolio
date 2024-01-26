export const bio = [
  "Hello &#128075;",
  "I'm Geoff Kevin G. Apologista, a fourth-year Computer Science student from the University of San Agustin Inc. With a strong passion for coding and a desire to become a well-rounded developer, I am actively working towards becoming a full-stack professional. In my portfolio, I showcase my projects and skills in various programming languages and technologies, demonstrating my commitment to creating innovative solutions across different domains, including web development, game development, and software engineering.",
  "When I'm not coding, I cook, play video games and basketball.",
  "Being someone who is committed to continuous learning, I am constantly in pursuit of fresh knowledge and experiences that can expand my outlook and improve my abilities.",
  "I appreciate your effort in getting to know me better!",
];

export const skills = [
  {
    title: "Frontend",
    skillName: "HTML - CSS - JavaScript",
    color: "1",
    percentage: "70",
  },
  {
    title: "Frontend Framework",
    skillName: "Vue.js",
    color: "2",
    percentage: "30",
  },
  {
    title: "Backend",
    skillName: "Node.js",
    color: "3",
    percentage: "30",
  },
  {
    title: "Backend",
    skillName: "PHP - Laravel",
    color: "3",
    percentage: "30",
  },
  {
    title: "Version Control",
    skillName: "GitHub",
    color: "4",
    percentage: "70",
  },
  {
    title: "Editor",
    skillName: "VS Code",
    color: "5",
    percentage: "70",
  },
];

export const projects = {
  webProjects: [
    {
      projectName: "MakeBot + Scratch 2.0",
      image: "images/makebot.jpg",
      summary:
        "As an introduction to coding, I gained valuable experience during my senior high school days by successfully programming and assembling a collision-sensing robot from MakeBot. Collaborating with my classmates, we utilized Scratch 2.0 to implement the logical aspects of the project.",
      preview: {
        type: "image",
        source: "images/makebot.jpg",
      },
      title: "MakeBot + Scratch 2.0 (First Coding Experience)",
      additionalImages: [
        "images/makebot2.jpg",
        "images/makebot3.jpg",
      ],
    },
    {
      projectName: "Student Registration System",
      image: "images/studentregistration.png",
      summary:
        "In my Object-Oriented Programming course, I developed a Student Registration System using NetBeans IDE, Java programming language, and MySQL database to accept and store user input.",
      preview: {
        type: "image",
        source: "images/studentregistration.png",
      },
      title: "Student Registration System (Java/Netbeans)",
      additionalImages: [
        "images/studentregistration2.png",
      ],
    },
    {
      projectName: "2D Side-scrolling Fighting Game",
      image: "images/gamedev.png",
      summary:
        "During my 2D Game Development course, I successfully created a captivating side-scrolling fighting game using HTML, CSS, and JavaScript. My work involved meticulously crafting scenes, programming actions, and implementing logic to ensure an engaging user experience.",
      preview: {
        type: "image",
        source: "images/gamedev.png",
      },
      title: "2D Side-scrolling Fighting Game (HTML/CSS/JavaScript)",
      additionalImages: [
        "images/gamedev2.png",
        "images/gamedev3.png",
      ],
    },
    {
      projectName: "Web Portfolio (HTML/Bootstrap/JavaScript)",
      image: "images/webport.png",
      summary:
        "My comprehensive web portfolio encompasses a diverse array of valuable information, including my professional skills, notable projects, and educational background. Through this platform, I aim to present a cohesive and compelling narrative that highlights my expertise and dedication to excellence in the field.",
      preview: {
        type: "image",
        source: "images/webport.png",
      },
      title: "Web Portfolio (HTML/Bootstrap/JavaScript)",
      additionalImages: [
      ],
    },
  ],
  softwareProjects: [
    {
      projectName: "PersonaWeb: Design and Implementation of JATAMI Website with Decision Tree Algorithm for Personalized Product Recommendation",
      image: "images/jatamiweb1.png",
      summary:
        "I currently lead our thesis project as the project manager and programmer, focusing on developing an ecommerce website with a decision tree algorithm for personalized product recommendations. Our objective is to enhance user experience by delivering tailored product suggestions based on individual interactions and behaviors within the ecommerce platform.",
      preview: {
        type: "image",
        source: "images/jatamiweb1.png",
      },
      title: "PersonaWeb: Design and Implementation of JATAMI Website with Decision Tree Algorithm for Personalized Product Recommendation",
      additionalImages: [
        "images/jatamiweb2.png",
        "images/jatamiweb3.png",
        // Add more image URLs for this project if needed
      ],
    },
  ],
  systemProjects: [
    {
      projectName: "Data Management System",
      image: "images/dmsLaravel.webp",
      summary:
        "Although I was only knowledgeable with Node.js & Express as my backend, I have to take on a challenge of doing a Laravel Project for a Technical Exam. I was tasked to create a Data Management System that has CRUD - Create/Read/Update/Delete.",
      preview: {
        type: "image",
        source: "images/dmsLaravel.webp",
      },
      title: "Data Management System (PHP/Laravel)",
      additionalImages: [
        "images/dmsLaravel1.webp",
        "images/dmsLaravel2.webp"
      ],
    },
  ],
};

export const education = [
  {
    title: "Bachelor of Science in Computer Science",
    duration: "2020 - Present",
    subtitle: "University of San Agustin Inc.",
    details: [
      "Consistent Dean's Lister.",
      "Executive Secretary of CSIT (Computer Science and Information Technology) University Recognized Organization.",
      "Project Manager of Thesis Project",
    ],
    tags: [
      "Algorithm, Flowchart, and Pseudocode",
      "Programming Languages",
      "Game Development",
      "Database Management",
      "Internet of Things",
      "Machine Learning",
      "Project Management",
    ],
  },
  {
    title: "Accountancy, Business, and Management",
    duration: "2017 - 2019",
    subtitle: "Iloilo Scholastic Academy",
    details: [
      "During my Senior High School days, specifically Science Fair events, we have assembled robot kits of MakeBlock. We programmed the robots with the use of Script, which was created by the collaboration of  Scratch 2.0 and MakeBlock.",
      "I transitioned from STEM track to ABM track."
    ],
    tags: ["MakeBlock", "Scratch 2.0", "STEM - ABM"],
  },
];

const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
