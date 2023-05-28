"use client";

import ProjectCard from "@/components/project-card/project-card";
import TopNavbar from "@/components/top-navbar/top-navbar";
import ProjectCardBadgeModel from "@/models/project-card-badge-model";
import ProjectCardModel from "@/models/project-card-model";
import { Timeline } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([
    new ProjectCardModel(
      "Portfolio Website (V3)",
      "Next JS and Tailwind CSS. My portfolio website.",
      "/png/portfoliowebsitev3.png",
      "https://sebastianjburman.com/",
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
      [
        new ProjectCardBadgeModel(0, "Angular", "failure"),
        new ProjectCardBadgeModel(1, "C#", "info"),
        new ProjectCardBadgeModel(2, "Mongo", "success"),
      ]
    ),
  ]);

  return (
    <main className="bg-zinc-900">
      <TopNavbar></TopNavbar>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-3">
        <div className="flex flex-col">
          <Image
            className="mb-3 rounded-full border-solid border-2 border-slate-200"
            src="/png/homephoto.png"
            width={60}
            height={60}
            alt="Picture of the author"
          />
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Developer
          </h1>
          <p className="mt-6 text-base text-white max-w-6xl">
            Welcome to my software development portfolio website! I'm currently
            an IT Intern at KFC. I'm a passionate developer who loves solving
            problems through coding. If you're interested in learning more about
            my professional background and skills, please check out my Resumé by
            clicking the button below. Feel free to browse my portfolio and
            explore the projects I've worked on. For more information on the
            specific technologies and programming languages I've worked with,
            please visit my About Me page. Thanks for visiting!
          </p>
          <div className="mt-6 flex gap-6">
            <a
              className="group -m-1 p-1"
              aria-label="Follow on GitHub"
              href="https://github.com/sebastianjburman"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-10 w-10 fill-white transition group-hover:fill-zinc-400"
              >
                <path d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
              </svg>
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on LinkedIn"
              href="https://www.linkedin.com/in/sebastian-burman-62118b203"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-10 w-10 fill-white transition group-hover:fill-zinc-400"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </a>
            <button
              type="button"
              className="text-white bg-teal-500 hover:bg-teal-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Resume
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-screen">
          <div>
            <h1 className="text-2xl mt-3 mb-5 underline font-semibold">
              Recent Projects
            </h1>
            <div className="flex justify-center flex-col">
              {projects.map((p) => {
                return (
                  <ProjectCard
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    image={p.image}
                    link={p.link}
                    badges={p.badges}
                  ></ProjectCard>
                );
              })}
            </div>
            <a
              href="#"
              className="inline-flex mt-2 items-center font-medium text-cyan-500 hover:underline hover:text-cyan-400"
            >
              View all projects archive
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path>
              </svg>
            </a>
          </div>
          <div>
            <h1 className="text-2xl mt-3 mb-5 underline font-semibold">Work</h1>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>
                    <h1 className="text-cyan-500 mb-3">Present</h1>
                  </Timeline.Time>
                  <Timeline.Title className="text-white">
                    IT Intern (KFC)
                  </Timeline.Title>
                  <Timeline.Body>
                    - NET MVC Web development on a above restaurant application.
                    <br></br>- Application health checks to make sure a backend
                    is ready to take in requests.
                    <br></br>- Created test to run in CI pipelines to ensure new
                    changes to repos don't break application functionality.
                    <br></br>- Helped make code repos more maintainable by
                    fixing code warnings and following best practices.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>
                    <h1 className="text-cyan-500">March 2022</h1>
                  </Timeline.Time>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </main>
  );
}
