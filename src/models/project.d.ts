export interface IProject {
  title: string;
  date: Date;
  description: string;
  techStack: string[];
  githubUrl?: string;
  projectUrl?: string;
  imageUrl: string;
}
