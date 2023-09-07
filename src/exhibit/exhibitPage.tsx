import { useState } from "react";
import { FadeIn } from "../components/animation";
import { FlexContainer, Title, useThemeContext } from "../components/ui";
import "./style/style.css";
import { ViewingArea } from "./components/viewingArea";
import { DisplayCabinet } from "./components/displayCabinet";
import { Project } from "../types";
import { CategoryBanner } from "./components/categoryBanner";

export const ExhibitPage = () => {
  const theme = useThemeContext();
  const [navigating] = useState(false);

  const projects: Project[] = [
    {
      title: "Test project",
      tag: "IOT",
      color: theme.color?.primary,
      location: "",
    },
    {
      title: "Test project 2",
      tag: "Web Dev",
      color: theme.color?.secondary,
      location: "",
    },
    {
      title: "Test project 3",
      tag: "Backend",
      color: theme.color?.tertiary,
      location: "",
    },
  ];

  const selectedProject: Project | null = null;

  return (
    <FadeIn inverse={navigating}>
      <CategoryBanner />
      <ViewingArea />
      {/* <FlexContainer vAlign="start">
        <Title type="h2">Projects</Title>
        <FlexContainer vAlign="start">
          <DisplayCabinet projects={projects} />
          
        </FlexContainer>
      </FlexContainer> */}
    </FadeIn>
  );
};
