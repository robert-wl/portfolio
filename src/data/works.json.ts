import type { IProject } from "../models/project";

export const professionalWorksData: IProject[] = [
  {
    title: "Hyper WLight Drifter",
    description:
      "A self-remake of the indie game Hyper Light Drifter in web form using [HTML], [TypeScript], and [SCSS]. This project uses the original game's assets to create a similar game and mechanics. " +
      "The project was developed and used as the take-home project for Software Laboratory Center assistant entrance exams",
    date: "December 2023",
    techStack: ["HTML", "TypeScript", "JQuery", "SCSS", "Canvas"],
    githubUrl: "https://github.com/yahkerobertkertasnya/HyperWLightDrifter",
    projectUrl: "https://yahkerobertkertasnya.github.io/HyperWLightDrifter/",
    imageUrl: "/works/HLD.png",
    isLive: true,
  },
  {
    title: "New Assistant Registration",
    description:
      "A web-based application used by new Binusian students to register as an assistant in the Software Laboratory Center. " +
      "The project was developed using [NextJS], and [.NET] as the backend. ",
    date: "July 2024",
    techStack: ["NextJS", "shadcn/ui", "C#", "ASP.NET Core", "SQL Server"],
    projectUrl: "https://bluejack.binus.ac.id/nar/",
    imageUrl: "/works/register-nar.png",
    isLive: true,
  },
];

export const personalWorksData = [{}];
