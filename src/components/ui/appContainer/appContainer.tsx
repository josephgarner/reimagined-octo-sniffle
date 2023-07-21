import { useThemeContext } from "../context/themeContext";
import "./style.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  nav?: JSX.Element | null;
};

export const AppContainer = ({ children, nav = null }: Props) => {
  const theme = useThemeContext();

  const sharedStyle: React.CSSProperties = {
    gridTemplateColumns: `[col1-start] ${theme.spacing?.lg}px
		[col2-main] auto
		[col3-start] ${theme.spacing?.lg}px
		[col3-end]`,
    gridTemplateRows: `[row1-start] ${nav ? "100" : theme.spacing?.lg}px 
		[row2-main] auto
		[row3-start] ${theme.spacing?.lg}px  
		[row3-end]`,
  };

  return (
    <div className="appContainer_parent" style={sharedStyle}>
      <div className="appContainer_nav">{nav}</div>
      <div className="appContainer_child">{children}</div>
    </div>
  );
};
