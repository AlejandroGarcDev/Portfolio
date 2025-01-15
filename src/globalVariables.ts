import { CareerElementModel, ProjectModel, SkillGroupModel } from "./models"

export const globalVariables = {
    name: 'Alejandro Garcia',
    my_description: 'Hi there and thanks for stopping by! \n\n My name is Alejandro García, and I am a passionate video game programmer specializing in C++ and Unreal Engine.\n\n Since I was a child, I loved video games due to the wonderful stories and innovative mechanics, leaving a profound impact on me. That is why I would like to make video games, to impact people in the same way that games did on me. \n\n During my time in high school I discovered my love for coding while learning the basics. This interest deepened during my studies in Telecommunications Engineering where I gained a solid foundation in mathematics and physics. \n\n After finishing my degree in telecommunications, I finally decided to specialize in video games to be able to fulfill my dream. ',
    my_photo: `Selfie.jpg`,
    url_github: 'github.com/AlejandroGarcDev',
    url_linkedin: 'www.linkedin.com/in/alejandro-garc%C3%ADa-santiago/',
    url_youtube: 'www.youtube.com/@intentodedesarrollador',
    url_mailto: 'alejandro.garc.sant@gmail.com'
}

export const tagColors= {
    "date": "#1919cb",
    "category": "#cb1919",
    "languages": "#19cb19",
    "engine": "#191919"
};

export const projects: ProjectModel[] = [
    {   //First Project
        title: "Multiplayer Shooter C++, Unreal Engine",
        img_url: `${process.env.PUBLIC_URL}/MultiplayerShooterIcon.png`,
        category: ["Games"],
        languages: ["C++"],
        description: "This is a project made by an Udemy course, in which most of the topics of a multiplayer shooter games are covered. \n\n During this project I have learned how the different machines that make up a multiplayer session communicate with each other in C++, as well as how to manipulate variables and functions so that they are updated or executed either locally, only on the server, or on all connected machines. \n\n Also, I have learnt techniques that allow a better user experience and minimize the impact of a bad connection. An example could be the implementation of a server-side rewind recording the position of the players during a period of time on the server, this way the server can verify actions that any client send (as long as the client does not have more delay than the time that the server can rewind).",
        quotes: ["Learning the process of an online game in Unreal Engine"],
        engine: "Unreal Engine",
        github_url: "https://github.com/AlejandroGarcDev/UdemyShooterOnline",
        youtube_url: "https://www.youtube.com/watch?v=opTjqYuNkBw",
        youtube_url2: "https://www.youtube.com/watch?v=94xmjz9n1wU"
    },
    {   //Second Project
        title: "Ray Tracing Project",
        img_url: `${process.env.PUBLIC_URL}/RayTracingIcon.png`,
        category: ["Simulation"],
        languages: ["C++"],
        description: "Simple Ray Tracing project in which I have learned basic ray tracing and multi-threads techniques. \n\n Project made following TheCherno channel tutorials ",
        github_url: "https://github.com/AlejandroGarcDev/RayTracingTheChernoC--",
        youtube_url: "https://www.youtube.com/watch?v=1TLjxCJFhSk",
    },
    {   //Fourth Project
        title: "Materials & Particle Systems With Niagara, Unreal Engine",
        img_url: `${process.env.PUBLIC_URL}/ParticleSystemsIcon.png`,
        category: ["Games"],
        languages: ["Blueprints", "HLSL"],
        engine: "Unreal Engine",
        description: "This is a combination of different courses about particle systems and materials I have done. \n\n Regarding Niagara, the Unreal particle system, I have learned to manipulate particles according to parameters both inherent to the particles (such as their lifetime) and parameters created from scratch (such as the distance to an object). Also, I have learned to use data external to the particle system, such as a data file, to alter the state of the particles. \n\n Regarding materials, I have learned how to use nodes to manipulate information from different channels as well as the different ways a material can be rendered. As an additional aspect, I have briefly used the HLSL language to manipulate materials. ",
        youtube_url: "https://www.youtube.com/watch?v=IDwlrLAYCcA"
    },
    {   //Third Project
        title: "Multiplayer Survival With Blueprints, Unreal Engine",
        img_url: `${process.env.PUBLIC_URL}/SurvivalIcon.png`,
        category: ["Games"],
        languages: ["Blueprints"],
        engine: "Unreal Engine",
        description: "Complete survival project made with Unreal Engine blueprints. \n\n During this project I have learned differents aspect of a survival game like construction and craft systems, characters experience and parameters of a player like stamina or health. \n\n Unfinished project as features are missing such as VoIP and respawn system.",
        github_url: "https://github.com/AlejandroGarcDev/SurvivalGame_Course",
        youtube_url: "https://www.youtube.com/watch?v=i5WWwgCHzco",
    
    },
    {   //Fifth Project
        title: "Personal Project",
        img_url: `${process.env.PUBLIC_URL}/PersonalProjectIcon.png`,
        category: ["Games"],
        languages: ["Blueprints"],
        engine: "Unreal Engine",
        description: "Thriller game created from the final project of the Unreal Engine course. In the game, core game mechanic is exploring on the computer, so after making this game I have improved the knowledge making UI (widgets) and how to manage information to communicate between different widgets. Still in progress.",
    },
];

export const workElements: CareerElementModel[] = [
    {
        title: "Hidramar: Estimation Engineer",
        start_date: "2023",
        end_date: "2024",
        role: "",
        location: "",
        description: "My first job after finishing my degree in telecommunications engineering was at Hidramar, a shipyard in the port of my hometown, Las Palmas de Gran Canaria. My job consisted of making offers according to the client's requests and, depending on the offer, the parties involved in it. During my time at Hidramar I improved my teamwork and communication skills because we had to spend a lot of the time transferring information between colleagues and people from other companies."
    },
]
export const studyElements: CareerElementModel[] = [
    {
        title: "Engineering in Telecommunications",
        start_date: "ULPGC-Las Palmas de Gran Canaria",
        end_date: "2023",
        location: "Universidad de Las Palmas de Gran Canaria",
        description: "During my time at university I learned a lot about mathematics and physics, especially about waveforms and their time-frequency spectral relationship. I specialized in telecommunications systems because I was intrigued to know how different communication systems works. However, when I finished my degree, I realized that what I wanted to do was get into the video game industry."
    },
    {
        title: "Videogame programming course with Unreal Engine",
        start_date: "Tokio School",
        end_date: "2024",
        location: "Tokio School",
        description: "Introductory course to learn all the different aspects that cover a video game development focused on the Unreal Engine graphics engine. During the course I learned most of the tools that Unreal offers to develop a video game, in addition to getting started in the field of video game programming."
    },
    {
        title: "Online Courses",
        start_date: "Udemy",
        end_date: "2024",
        location: "Udemy",
        description: "To improve and deepen both C++ programming and the Unreal Engine graphics engine, I have completed the following courses: \n\n • Beginning C++ Programming - From Beginner to Beyond \n • Learn C++ for Game Development \n • Unreal Engine 5 C++ Multiplayer Shooter \n • Unreal 5 Niagara - Simulation Stages \n • Niagara and Advanced materials in Unreal Engine \n • Unreal Engine 5 - Advanced Niagara \n\n Currently, I am doing the following course: \n\n • Unreal Engine 5 Dedicated Servers with AWS and GameLift"
    },

]

export const skillsElements: SkillGroupModel[] = [
    {
        title: "Tools",
        skills: [
            {
                language_name: 'C++',
                icon_url: `${process.env.PUBLIC_URL}/PersonalProjectIcon.png`,
            }
        ]
    }
]