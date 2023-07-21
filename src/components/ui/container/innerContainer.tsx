import { Position, Size } from "../../../types";
import { useThemeContext } from "../context/themeContext";
import "./style.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  size?: Size;
  position?: Position;
};

export const InnerContainer = ({ children, size = "xl", position = "right" }: Props) => {
  const theme = useThemeContext();

  const sharedStyle: React.CSSProperties = {
    color: theme.color?.black,
  };

  const className = `container_child container_child_${size}_${position}`;

  return (
    <div className={className} style={sharedStyle}>
      {children}
    </div>
  );
};
