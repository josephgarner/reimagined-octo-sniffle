import { Project } from "../../types";
import { ProjectFolder } from "./projectFolder";
import "../style/displayCabinetStyle.css";

type Props = {
  projects: Project[];
};

export const DisplayCabinet = ({ projects }: Props) => {
  const renderCards = () => {
    return projects.map((e: Project) => {
      return <ProjectFolder title={e.title} tags={e.tags} />;
    });
  };

  return <div className="display_cabinet">{renderCards()}</div>;
};
