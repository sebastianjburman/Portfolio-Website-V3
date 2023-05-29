import ProjectCardModel from "@/models/project-card-model";
import { Badge } from "flowbite-react";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  badges,
}: ProjectCardModel) {
  return (
    <a
      className="w-full h-30 p-2 mt-2 grid grid-cols-1 sm:grid-cols-3 rounded hover:backdrop-blur-sm hover:bg-white/10 transition-all"
      href={link}
      target="blank"
    >
      <div className="pb-3 pr-3">
        <img className="rounded w-2/4 rounded sm:w-full" src={image}></img>
      </div>
      <div className="flex flex-col col-span-2 ">
        <h1 className="text-white text-xl font-semibold mt-0">{title}</h1>
        <p className="text-white text-sm mt-2">{description}</p>
        <div className="flex flex-wrap mt-2">
          {badges.map((b) => {
            return (
              <Badge className="mr-1 ml-1" key={b.name} color={b.badgeType}>
                {b.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </a>
  );
}
