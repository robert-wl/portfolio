export interface IProject {
  title: string;
  date: string;
  description: string;
  techStack: string[];
  githubUrl?: string[];
  projectUrl?: string;
  imageUrl: string[];
  isCollaborative: boolean;
  isLive: boolean;
}
