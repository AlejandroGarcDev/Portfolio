import { CareerElementModel, ProjectModel, SkillGroupModel } from "./models"

export const globalVariables = {
    name: 'Alejandro Garcia',
    my_description: 'Hi there and thanks for stopping by!',
    my_photo: 'default_avatar.jpg',
    url_github: 'github.com/AlejandroGarcDev',
    url_linkedin: 'www.linkedin.com/in/alejandro-garc%C3%ADa-santiago/',
    url_youtube: 'www.youtube.com/@intentodedesarrollador',
    url_mailto: 'mailto:alejandro.garc.sant@gmail.com'
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
        description: "During this project I have learned how the different machines that make up a multiplayer session communicate with each other in C++, as well as how to manipulate variables and functions so that they are updated or executed either locally, only on the server, or on all connected machines. Also, I have learnt techniques that allow a better user experience and minimize the impact of a bad connection. An example could be recording the position of the players during a period of time on the server, this way client send information to the server and also the time when that happened in client version and server can verify that action. Project made by Udemy course",
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
        description: "Simple Ray Tracing project in which I have learned basic ray tracing and multi-threads techniques. Project made following TheCherno channel tutorials ",
        github_url: "https://github.com/AlejandroGarcDev/RayTracingTheChernoC--",
        youtube_url: "https://www.youtube.com/watch?v=1TLjxCJFhSk",
    },
    {   //Third Project
        title: "Multiplayer Survival With Blueprints, Unreal Engine",
        img_url: `${process.env.PUBLIC_URL}/SurvivalIcon.png`,
        category: ["Games"],
        languages: ["Blueprints"],
        engine: "Unreal Engine",
        description: "Complete survival project made with Unreal Engine blueprints. During this project I have learned differents aspect of a survival game like construction and craft systems, characters experience and parameters of a player like stamina or health.",
        github_url: "https://github.com/AlejandroGarcDev/SurvivalGame_Course",
        youtube_url: "https://www.youtube.com/watch?v=i5WWwgCHzco",
    
    },
    {   //Fourth Project
        title: "Materials & Particle Systems With Niagara, Unreal Engine",
        img_url: `${process.env.PUBLIC_URL}/ParticleSystemsIcon.png`,
        category: ["Games"],
        languages: ["Blueprints", "HLSL"],
        engine: "Unreal Engine",
        description: "This is a combination of different courses about particle systems in which I have learned to manipulate particles according to parameters both inherent to the particles (such as their lifetime) and parameters created from scratch (such as the distance to an object).",
        youtube_url: "https://www.youtube.com/watch?v=IDwlrLAYCcA"
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
        description: "Introductory course to learn all the different aspects that cover a video game development focused on the Unreal Engine graphics engine. During the course I learned most of the tools that Unreal offers to develop a video game, in addition to getting started in the field of C++ programming."
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