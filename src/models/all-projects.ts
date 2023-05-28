import ProjectCardBadgeModel from "./project-card-badge-model";
import ProjectCardModel from "./project-card-model";

const allProjects: ProjectCardModel[] = [
  new ProjectCardModel(
    "Portfolio Website (V3)",
    "Next JS and Tailwind CSS. My portfolio website.",
    "/png/portfoliowebsitev3.png",
    "https://sebastianjburman.com/",
    "https://github.com/sebastianjburman/Portfolio-Website-V3",
    [
      new ProjectCardBadgeModel(0, "Next.js", "dark"),
      new ProjectCardBadgeModel(1, "Tailwind CSS", "info"),
    ]
  ),
  new ProjectCardModel(
    "Workout Planning Application",
    "Angular frontend, .NET backend and MongoDB. Used JWT for authentication. Project to show of my skills.",
    "/png/workoutapplication.png",
    "https://workoutplanningapplication.netlify.app/",
    "https://github.com/sebastianjburman/Full-Stack-Workout-Planning-Application",
    [
      new ProjectCardBadgeModel(0, "Angular", "failure"),
      new ProjectCardBadgeModel(1, "C#", "purple"),
      new ProjectCardBadgeModel(2, "Mongo", "success"),
    ]
  ),
  new ProjectCardModel(
    "Crud Movie Rating Application",
    "Crud movie rating application created with Angular, ExpressJS and MongoDB. MERN stack.",
    "",
    "",
    "https://github.com/sebastianjburman/Crud-Movie-Rating-Application",
    [
      new ProjectCardBadgeModel(0, "Angular", "failure"),
      new ProjectCardBadgeModel(1, "Express.js", "warning"),
      new ProjectCardBadgeModel(2, "Mongo", "success"),
    ]
  ),
  new ProjectCardModel(
    "Full Stack Chat App",
    "Full stack chat app created with React, .Net and MongoDB.",
    "",
    "",
    "https://github.com/sebastianjburman/Full-Stack-Chat-App",
    [
      new ProjectCardBadgeModel(0, "React", "info"),
      new ProjectCardBadgeModel(1, "C#", "purple"),
      new ProjectCardBadgeModel(2, "Mongo", "success"),
    ]
  ),
  new ProjectCardModel(
    "Portfolio Website (V2)",
    "Portfolio website created in Blazor webassembly.",
    "",
    "",
    "https://github.com/sebastianjburman/Portfolio-WebsiteV2",
    [
      new ProjectCardBadgeModel(0, "Blazor", "purple"),
      new ProjectCardBadgeModel(1, "C#", "purple"),
    ]
  ),
  new ProjectCardModel(
    "Flappy Bird Clone",
    "Flappy bird clone created in Java using libgdx.",
    "",
    "",
    "https://github.com/sebastianjburman/Flappy-Bird_Clone",
    [
      new ProjectCardBadgeModel(0, "Java", "pink"),
      new ProjectCardBadgeModel(1, "libGDX", "info"),
    ]
  ),
  new ProjectCardModel(
    "Budget Application",
    "A responsive budget application created in React. Uses local storage to save data.",
    "",
    "https://sebastianbudgetapplication.netlify.app/",
    "https://github.com/sebastianjburman/budget-application",
    [new ProjectCardBadgeModel(0, "React", "info")]
  ),
  new ProjectCardModel(
    "Weather App",
    "A simple React weather app using the open weather api.",
    "",
    "https://sebastianweatherapp.netlify.app/",
    "https://github.com/sebastianjburman/React-Weather-App",
    [new ProjectCardBadgeModel(0, "React", "info")]
  ),
  new ProjectCardModel(
    "Calculator",
    "A simple calculator built with React state.",
    "",
    "https://sebastianreactcalculator.netlify.app/",
    "https://github.com/sebastianjburman/Simple-React-Calculator",
    [new ProjectCardBadgeModel(0, "React", "info")]
  ),
];

export default allProjects;
