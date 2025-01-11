import type { IExperience } from "../models/experience";

const experienceData: IExperience[] = [
  {
    title: "Research and Development Staff",
    date: "Feb 2024 - Present",
    description: [
      "As a Research and Developmentt Staff at Software Laboratory Center, I am responsible for maintaining the web infrastructure for Software Laboratory Center and select parts of BINUS. " +
        "Some of the tasks I perform as a Research and Development Staff member include:",
      "\n",
      ":",
      "- {Maintaining Web Applications}: I maintain web applications built using [Angular], [React], [Next.js], and the [.NET] stack. I work in teams of four to manage laboratory practicum and operational activities. These applications handle up to 500 concurrent users and have an average of 2,500 daily active users combined.",
      "- {Feature Requests and Issue Resolution}: I handle feature requests, address issues, fix bugs, and resolve other problems related to maintained web applications.",
      "- {Development of New Applications}: I develop new web applications for Software Laboratory Center that serve as a registration platform for BINUS University students, as well as for our internal staff and officers to manage new laboratory assistant registrations.",
      "- {Development of New Deployment Architecture}: I revolutionized Software Laboratory Center deployment of applications by containerizing new applications using [Docker]. I also implemented a new [CI/CD] pipeline system using [Github Actions], [Harbor Registry], [Hashicorp Vault] to allow for the automatic testing, building and deployment directly from version control.",
      "- {Development of New Monitoring Systems}: I implemented monitoring systems to track and manage resource usage of Software Laboratory Center applications. Automatic alerts are sent to the team when the system detects abnormal behavior. Everything is built using the [Prometheus] stack ([Prometheus], [Grafana], [Blackbox], [Alertmanager]).",
      ";",
    ],
    imageUrls: [],
  },
  {
    title: "Junior Laboratory Assistant",
    date: "Feb 2023 - Feb 2024",
    description: [
      "During my time as Junior Laboratory Assistant in Software Laboratory Center Binus, I completed the mandatory Test Progressive Assistant (TPA) as part of our development program. The development tests include:",
      "\n",
      ":",
      "- {Game Programming} (Cloning Monster Hunter) using [Unity] and [C#]",
      "- {Business Analysis and Desktop Application Development} (Hospital management desktop application) using [Visual Paradigm], [Electron], [Next.js], and [Firebase]",
      "- {Web Design and Programming} (Cloning Facebook) using [React], [TypeScript], [SCSS], [Go], [GraphQL], [PostgreSQL], and [Firebase]",
      "- {Mobile Application Development} (Lost and found mobile application) using [Kotlin] and [Firebase]",
      "- {Networking} (Small and Simple Kubernetes setup) using [Cisco Packet Tracer], [Terraform], [Proxmox], [Docker], [GitHub Actions], and [Kubernetes]",
      ";",
      "\n",
      "I was also awarded several awards during my time as a Junior Laboratory Assistant, including:",
      "\n",
      ":",
      "- Diploma of Best Performing Assistant",
      "- Best Qualification",
      ";",
    ],
    imageUrls: [
      {
        src: "/experience/certificate-best-qualification.jpg",
        alt: "Certificate of Best Qualification",
        description: "Certificate of Best Qualification",
      },
      {
        src: "/experience/certificate-diploma-best-assistant.jpg",
        alt: "Diploma of Best Performing Assistant",
        description: "Diploma of Best Performing Assistant",
      },
    ],
  },
];

export default experienceData;
