import { type ReactNode, useEffect, useState } from "react";
import { cn } from "../../utils/class-name.ts";

interface IProps {
  personalProjects?: ReactNode;
  professionalProjects?: ReactNode;
}

enum ProjectType {
  Professional,
  Personal,
}

export default function ProjectList({ personalProjects, professionalProjects }: IProps) {
  const [type, setType] = useState(ProjectType.Professional);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = document.querySelectorAll("section");
    elements.forEach((element) => observer.observe(element));
  }, [type]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="pt-64 text-white text-4xl font-medium">Works and Projects I've Done</h1>
      <div className="flex gap-16 text-white text-xl">
        <button
          className={cn(
            type === ProjectType.Professional ? "text-primary" : "menu-animation-disabled",
            "font-bold relative transition-colors menu-animation",
          )}
          onClick={() => setType(ProjectType.Professional)}>
          Professional
        </button>
        <button
          className={cn(
            type === ProjectType.Personal ? "text-primary" : "menu-animation-disabled",
            "font-bold relative transition-colors menu-animation",
          )}
          onClick={() => setType(ProjectType.Personal)}>
          Personal
        </button>
      </div>
      <div className="flex flex-col gap-8">
        {type === ProjectType.Professional && professionalProjects}
        {type === ProjectType.Personal && personalProjects}
      </div>
    </div>
  );
}
