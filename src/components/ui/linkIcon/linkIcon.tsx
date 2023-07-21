import { Size } from "../../../types";
import { useThemeContext } from "../context/themeContext";
import "./style.css";

type Props = {
  icon: JSX.Element;
  location: string;
  newWindow?: boolean;
  size?: Size;
};

export const LinkIcon = ({ icon, location, newWindow, size = "md" }: Props) => {
  const theme = useThemeContext();

  const fontSize = () => {
    switch (size) {
      case "xs":
        return theme.fontSize?.h6;
      case "sm":
        return theme.fontSize?.h5;
      case "md":
        return theme.fontSize?.h4;
      case "lg":
        return theme.fontSize?.h3;
      case "xl":
        return theme.fontSize?.h2;
      default:
        return theme.fontSize?.h4;
    }
  };

  const sharedStyle: React.CSSProperties = {
    fontSize: fontSize(),
    margin: theme.spacing?.xs,
    color: theme.color?.black,
  };

  return (
    <a
      className="linkIcon"
      style={sharedStyle}
      href={location}
      target={newWindow ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};
