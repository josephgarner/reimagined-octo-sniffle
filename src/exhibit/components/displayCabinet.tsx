import { useState } from "react";
import { Project, ProjectTags } from "../../types";
import { ProjectFolder } from "./projectFolder";
import "../style/displayCabinetStyle.css";
import { FadeIn } from "../../components/animation";
import { Button, FlexContainer } from "../../components/ui";
import { useNavigate } from "react-router-dom";
import { PiCaretLeftBold } from "react-icons/pi";
import { useLoader } from "./pageLoaderState";

export const DisplayCabinet = () => {
  const [navigating, setNavigating] = useState(false);
  const navigate = useNavigate();
  const { setUnloading } = useLoader();

  const projects: Project[] = [
    {
      title: "FORMULA SCHEDULE",
      tags: [ProjectTags.IOT],
      location: "formula-schedule",
    },
    {
      title: "REA SCRAPER",
      tags: [ProjectTags.FRONTEND, ProjectTags.BACKEND],
      location: "",
    },
    {
      title: "LAKSHMI",
      tags: [ProjectTags.FRONTEND, ProjectTags.BACKEND],
      location: "",
    },
    {
      title: "POTTR SYSTEM",
      tags: [ProjectTags.FRONTEND, ProjectTags.BACKEND, ProjectTags.IOT],
      location: "",
    },
    {
      title: "PORTFOLIO",
      tags: [ProjectTags.FRONTEND, ProjectTags.BACKEND, ProjectTags.CLOUD],
      location: "",
    },
  ];

  const unloadDelay = 2000 + 300 * projects.length;

  const navigateToLanding = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setNavigating(true);
    setUnloading(true);
    setTimeout(() => {
      navigate("/");
    }, unloadDelay);
  };

  const renderCards = () => {
    return projects.map((e: Project, i: number) => {
      return (
        <FadeIn inverse={navigating} key={`FadeIn-${e.title}`} container={false} delay={500 + 300 * i}>
          <ProjectFolder
            title={e.title}
            tags={e.tags}
            location={e.location}
            onSelect={setNavigating}
            navigateDelay={unloadDelay}
          />
        </FadeIn>
      );
    });
  };

  return (
    <FlexContainer flexWrap="nowrap" direction="column" vAlign="start">
      <FadeIn inverse={navigating}>
        <Button vAlign="start" variant="ghost" onClick={navigateToLanding} leftIcon={PiCaretLeftBold}>
          RETURN HOME
        </Button>
      </FadeIn>
      <FlexContainer flexWrap="wrap" direction="row" vAlign="start">
        <>{renderCards()}</>
      </FlexContainer>
    </FlexContainer>
  );
};
