import { Project } from "../../types";
import { ProjectCard } from "./projectCardNew";

type Props = {
  projects: Project[];
};

export const DisplayCabinet = ({ projects }: Props) => {
  const renderCards = () => {
    return projects.map((e: Project, index: number) => {
      return <ProjectCard title={e.title} tag={e.tag} color={e.color} initalPos={{ x: 0, y: 0 }} />;
    });
  };
  return <div className="display_cabinet">{renderCards()}</div>;
};
