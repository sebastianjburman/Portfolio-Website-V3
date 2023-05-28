"use client";
import TopNavbar from "@/components/top-navbar/top-navbar";
import allProjects from "@/models/all-projects";
import { Badge, Table } from "flowbite-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState(allProjects);
  return (
    <main className="bg-zinc-900">
      <TopNavbar></TopNavbar>
      <div className="max-w-screen-xl  items-center justify-between mx-auto p-4 mt-3">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          All Projects
        </h1>
        <Table className="mt-4">
          <Table.Head>
            <Table.HeadCell className="text-white bg-transparent border-b border-slate-700">
              Project Name
            </Table.HeadCell>
            <Table.HeadCell className="text-white bg-transparent border-b border-slate-700 hidden md:block">
              Technology
            </Table.HeadCell>
            <Table.HeadCell className="text-white bg-transparent border-b border-slate-700">
              Source
            </Table.HeadCell>
            <Table.HeadCell className="text-white bg-transparent border-b border-slate-700">
              Link
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {projects.map((project, index) => {
              return (
                <Table.Row className="border-slate-700" key={index}>
                  <Table.Cell className="whitespace-nowrap font-medium text-white">
                    {project.title}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-white hidden md:block">
                    <div className="flex flex-wrap mt-2">
                      {project.badges.map((b) => {
                        return (
                          <Badge
                            className="mr-1 ml-1"
                            key={b.name}
                            color={b.badgeType}
                          >
                            {b.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-white">
                    {project.repoLink ? (
                      <a href={project.repoLink} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                        </svg>
                      </a>
                    ) : null}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-white">
                    {project.link ? (
                      <a
                        href="#"
                        className="inline-flex mt-2 items-center font-medium text-cyan-500 hover:underline hover:text-cyan-400"
                      >
                        View
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
                    ) : null}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}
