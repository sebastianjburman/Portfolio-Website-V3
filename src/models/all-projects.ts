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
];

export default allProjects;
