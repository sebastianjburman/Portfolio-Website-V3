import ProjectCardBadgeModel from "./project-card-badge-model";

export default class ProjectCardModel {
  constructor(
    public title: string,
    public description: string,
    public image: string,
    public link: string,
    public repoLink: string,
    public badges: ProjectCardBadgeModel[]
  ) {}
}
