import { Project } from "../../types";
import { ProjectFolder } from "./projectFolder";
import "../style/displayCabinetStyle.css";
import { FadeIn } from "../../components/animation";

type Props = {
  projects: Project[];
};

export const DisplayCabinet = ({ projects }: Props) => {
  const renderCards = () => {
    return projects.map((e: Project, i: number) => {
      return (
        <FadeIn key={`FadeIn-${e.title}`} container={false} delay={500 + 300 * i}>
          <ProjectFolder title={e.title} tags={e.tags} />
        </FadeIn>
      );
    });
  };

  return <div className="display_cabinet">{renderCards()}</div>;
};
