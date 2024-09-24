import type { IProject } from "../models/project";

export const professionalWorksData: IProject[] = [
  {
    title: "Hyper WLight Drifter",
    description:
      "A self-remake of the indie game Hyper Light Drifter in web form using [HTML], [TypeScript], and [SCSS]. This project uses the original game's assets to create a similar game and mechanics. " +
      "The project was developed and used as the take-home project for Software Laboratory Center assistant entrance exams",
    date: "December 2023",
    techStack: ["HTML", "TypeScript", "JQuery", "SCSS", "Canvas"],
    githubUrl: ["https://github.com/yahkerobertkertasnya/HyperWLightDrifter"],
    projectUrl: "https://yahkerobertkertasnya.github.io/HyperWLightDrifter/",
    imageUrl: "/works/professional/HLD.png",
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
    imageUrl: "/works/professional/register-nar.png",
    isLive: true,
  },
];

export const personalWorksData: IProject[] = [
  {
    title: "HireVerse",
    description:
      "HireVerse is a decentralized hiring platform that allows users to create and apply for job listings. " +
      "It is built on the [Internet Computer] and uses the [Motoko] programming language. " +
      "The platform is designed to be decentralized, secure, and scalable. It is also designed to be easy to use and accessible to everyone." +
      "This project won the first place in the DFINITY Hackathon 2024.",
    date: "March 2024",
    techStack: ["ReactJS", "Internet Computer", "Motoko"],
    githubUrl: ["https://github.com/dave-andrew/HireVerse"],
    imageUrl: "/works/personal/hireverse/image-1.png",
    isLive: false,
  },
  {
    title: "Facebook Clone",
    description: "A clone of the Facebook web application using [ReactJS], [Go Lang], [GraphQL] and [PostgreSQL]. ",
    date: "July 2023",
    techStack: ["ReactJS", "Typescript", "SCSS", "Go Lang", "GraphQL", "PostgreSQL"],
    githubUrl: ["https://github.com/yahkerobertkertasnya/facebook-clone-backend", "https://github.com/yahkerobertkertasnya/facebook-clone-frontend"],
    projectUrl: "http://yahkerobertkertasnya.my.id/facebook",
    imageUrl: "/works/personal/facebook-clone.png",
    isLive: true,
  },
  {
    title: "Hand Sign Recognizer Trainer and Detector",
    description:
      "A desktop application that can be used to train and detect hand signs. User can input different hand sign images and choose the model of their choice to train the model. The application uses [Python], in junction with [Mediapipe] and [Scikit Learn]. The application itself uses [Tauri] along with [Svelte] for the frontend.",
    date: "June 2024",
    techStack: ["Svelte", "Rust", "Tauri", "Python", "Mediapipe"],
    githubUrl: ["https://github.com/yahkerobertkertasnya/tauri-hand-gesture-recognition"],
    imageUrl: "/works/personal/facebook-clone.png",
    isLive: false,
  },
  {
    title: "NutriFitPal",
    description:
      "A web-based application that is used to give recommendations for a user's diet based on their body mass index (BMI). The application uses [ReactJS] and [Firebase] as the database.",
    date: "June 2024",
    techStack: ["ReactJS", "Firebase"],
    githubUrl: ["https://github.com/yahkerobertkertasnya/soft-eng-project"],
    imageUrl: "/works/personal/nutrifitpal/image-1.png",
    isLive: false,
  },
];
