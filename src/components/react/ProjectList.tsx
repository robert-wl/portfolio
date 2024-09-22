import { useState, type ReactNode } from "react";

interface IProps {
  personalProjects?: ReactNode;
  professionalProjects?: ReactNode;
}

export default function ProjectList({ personalProjects, professionalProjects }: IProps) {
  const [isProfessional, setIsProfessional] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="pt-64 text-white text-4xl font-medium">Works and Projects I've Done</h1>
      <div className="flex gap-16 text-white text-xl">
        <button onClick={() => setIsProfessional(true)}>Professional</button>
        <button onClick={() => setIsProfessional(true)}>Personal</button>
      </div>
      <div>{isProfessional ? professionalProjects : personalProjects}</div>
    </div>
  );
}
