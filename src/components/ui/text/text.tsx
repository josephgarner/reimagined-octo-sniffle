import { Position } from "../../../types";
import { useThemeContext } from "../context/themeContext";
import "./style.css";

type Props = {
  children: JSX.Element | JSX.Element[] | string | (JSX.Element | string)[];
  type?: string;
  style?: React.CSSProperties;
  algin?: Position;
};

export const Text = ({ children, type = "", style = {}, algin = "left" }: Props) => {
  const theme = useThemeContext();

  const sharedStyle: React.CSSProperties = {
    textAlign: algin,
    color: theme.color?.black,
    ...style,
  };

  return (
    <span className="text" style={sharedStyle}>
      {children}
    </span>
  );
};
