import { HeadingType, Position } from "../../../types";
import { useThemeContext } from "../context/themeContext";
import "./style.css";

type Props = {
  children?: JSX.Element | JSX.Element[] | string | (JSX.Element | string)[];
  type?: HeadingType;
  style?: React.CSSProperties;
  algin?: Position;
};

export const Title = ({ children, type = "h1", style = {}, algin = "left" }: Props) => {
  const theme = useThemeContext();

  const fontSize = () => {
    switch (type) {
      case "h0": {
        return {
          fontSize: theme.fontSize?.h0,
        };
      }
      case "h1": {
        return {
          fontSize: theme.fontSize?.h1,
        };
      }
      case "h2": {
        return {
          fontSize: theme.fontSize?.h2,
        };
      }
      case "h3": {
        return {
          fontSize: theme.fontSize?.h3,
        };
      }
      case "h4": {
        return {
          fontSize: theme.fontSize?.h4,
        };
      }
      case "h5": {
        return {
          fontSize: theme.fontSize?.h5,
        };
      }
      default: {
        return {
          fontSize: theme.fontSize?.h1,
        };
      }
    }
  };

  const sharedStyle: React.CSSProperties = {
    ...fontSize(),
    textAlign: algin,
    color: theme.color?.black,
    marginTop: theme.spacing?.md,
    marginBottom: theme.spacing?.md,
    ...style,
  };

  return (
    <span className="title" style={sharedStyle}>
      {children}
    </span>
  );
};
