import { useState } from "react";
import { FadeIn } from "../components/animation";
import { DisplayCabinet } from "./components/displayCabinet";
import { Project, ProjectTags } from "../types";
import { CategoryBanner } from "./components/categoryBanner";
import { FlexContainer } from "../components/ui";

export const ExhibitPage = () => {
  const [navigating] = useState(false);

  const projects: Project[] = [
    {
      title: "FORMULA SCHEDULE",
      tags: [ProjectTags.IOT],
      location: "",
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

  return (
    <FadeIn inverse={navigating}>
      <FlexContainer vAlign="start">
        <CategoryBanner />
        <DisplayCabinet projects={projects} />
      </FlexContainer>
    </FadeIn>
  );
};
