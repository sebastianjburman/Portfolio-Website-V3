import ProjectCardBadgeModel from "./project-card-badge-model";

export default class ProjectCardModel {
  constructor(
    public title: string,
    public description: string,
    public image: string,
    public link: string|undefined,
    public repoLink: string|undefined,
    public badges: ProjectCardBadgeModel[]
  ) {}
}
