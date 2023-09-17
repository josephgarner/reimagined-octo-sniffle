import { IconType } from "react-icons";
import "./style.css";
import { useThemeContext } from "../context/themeContext";

type Props = {
  children: string;
  icon?: IconType;
};

export const Tag = ({ children, icon }: Props) => {
  const theme = useThemeContext();

  const renderIcon = () => {
    if (icon === undefined) return null;
    const Icon = icon;
    return <Icon style={{ paddingRight: theme.spacing?.xs }} size={theme.fontSize?.h3} />;
  };

  const style: React.CSSProperties = {
    color: "#AD933D",
    backgroundColor: "rgba(252, 231, 161, 0.5)",
    padding: theme.spacing?.xs,
    paddingLeft: theme.spacing?.lg,
    paddingRight: theme.spacing?.lg,
  };

  return (
    <div className="messageTag" style={style}>
      {renderIcon()}
      {children}
    </div>
  );
};
