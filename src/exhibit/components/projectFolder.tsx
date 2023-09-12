import { Title, useThemeContext } from "../../components/ui";
import { ProjectTags } from "../../types";
import "../style/projectFolderStyle.css";

type Props = {
  title?: string;
  tags: ProjectTags[];
  color?: string;
};

export const ProjectFolder = ({ title, tags }: Props) => {
  const theme = useThemeContext();

  const titleStyle: React.CSSProperties = {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 1,
    fontSize: theme.fontSize?.h3,
  };

  const categories = () => {
    return tags.map((tag) => {
      switch (ProjectTags[tag]) {
        case "BACKEND":
          return <div className="categoryBanner backendCat" style={{ backgroundColor: theme.color?.primary }} />;
        case "FRONTEND":
          return <div className="categoryBanner backendCat" style={{ backgroundColor: theme.color?.secondary }} />;
        case "IOT":
          return <div className="categoryBanner backendCat" style={{ backgroundColor: theme.color?.tertiary }} />;
        case "CLOUD":
          return <div className="categoryBanner backendCat" style={{ backgroundColor: theme.color?.quaternary }} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className="backFolder">
      <div className="frontFolder">
        <Title algin="left" style={titleStyle}>
          {title}
        </Title>
        <div className="categories_Container">{categories()}</div>
      </div>
    </div>
  );
};
