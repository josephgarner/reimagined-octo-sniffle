import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Title, useThemeContext } from "../../components/ui";
import { ProjectTags } from "../../types";
import "../style/projectFolderStyle.css";

type Props = {
  title?: string;
  tags: ProjectTags[];
  location?: string;
  onSelect?: Dispatch<SetStateAction<boolean>>;
  navigateDelay?: number;
};

export const ProjectFolder = ({ title, tags, location = "", onSelect, navigateDelay = 1500 }: Props) => {
  const theme = useThemeContext();
  const navigate = useNavigate();

  const titleStyle: React.CSSProperties = {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 1,
    fontSize: theme.fontSize?.h3,
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (onSelect === undefined) {
      navigate(`${location}`);
      return;
    }
    onSelect(true);
    setTimeout(() => {
      navigate(`${location}`);
      onSelect(false);
    }, navigateDelay);
  };

  const categories = () => {
    return tags.map((tag) => {
      switch (ProjectTags[tag]) {
        case "BACKEND":
          return (
            <div
              key={ProjectTags[tag]}
              className="categoryBanner backendCat"
              style={{ backgroundColor: theme.color?.primary }}
            />
          );
        case "FRONTEND":
          return (
            <div
              key={ProjectTags[tag]}
              className="categoryBanner backendCat"
              style={{ backgroundColor: theme.color?.secondary }}
            />
          );
        case "IOT":
          return (
            <div
              key={ProjectTags[tag]}
              className="categoryBanner backendCat"
              style={{ backgroundColor: theme.color?.tertiary }}
            />
          );
        case "CLOUD":
          return (
            <div
              key={ProjectTags[tag]}
              className="categoryBanner backendCat"
              style={{ backgroundColor: theme.color?.quaternary }}
            />
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="backFolder" onClick={handleClick}>
      <div className="frontFolder">
        <Title algin="left" style={titleStyle}>
          {title}
        </Title>
        <div className="categories_Container">{categories()}</div>
      </div>
    </div>
  );
};
