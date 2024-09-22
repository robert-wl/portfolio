import { type ReactNode, useState } from "react";

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

  return (
    <div className="flex flex-col gap-6">
      <h1 className="pt-64 text-white text-4xl font-medium">Works and Projects I've Done</h1>
      <div className="flex gap-16 text-white text-xl">
        <button onClick={() => setType(ProjectType.Professional)}>Professional</button>
        <button onClick={() => setType(ProjectType.Personal)}>Personal</button>
      </div>
      <div className="flex flex-col gap-8">
        {type === ProjectType.Professional && professionalProjects}
        {type === ProjectType.Personal && personalProjects}
      </div>
    </div>
  );
}
