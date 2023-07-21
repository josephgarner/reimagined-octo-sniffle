import { useThemeContext } from "../context/themeContext";
import "./style.css";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props) => {
  const theme = useThemeContext();

  const sharedStyle: React.CSSProperties = {
    gridTemplateColumns: `[col1-start] ${theme.spacing?.lg}px
		[xs-start] 1fr
		[xs-end] 1fr
		[sm-start] 1fr
		[sm-end] 1fr
		[md-start] 1fr
		[md-end] 1fr
		[lg-start] 1fr
		[lg-end] 1fr
		[xl-start] 1fr
		[xl-End] 1fr
		[col7-start] ${theme.spacing?.lg}px
		[col7-end]`,
    gridTemplateRows: `[row1-start] ${theme.spacing?.lg}px [row2-start] auto [row3-start] ${theme.spacing?.lg}px  [row3-end]`,
  };

  return (
    <div className="container_parent" style={sharedStyle}>
      {children}
    </div>
  );
};
