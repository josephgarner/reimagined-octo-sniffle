import "./style.css";

type Props = {
  children?: JSX.Element | JSX.Element[];
  vAlign?: "center" | "start" | "end";
  hAlign?: "center" | "start" | "end" | "flex-start" | "flex-end" | "self-start" | "self-end";
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
};

export const FlexContainer = ({
  children,
  vAlign = "center",
  position = "static",
  hAlign = "start",
  direction = "column",
  flexWrap = "nowrap",
}: Props) => {
  const configStyle: React.CSSProperties = {
    flexDirection: direction,
    justifyContent: vAlign,
    position: position,
    alignItems: hAlign,
    flexWrap: flexWrap,
  };

  return (
    <div className="flexContainer" style={configStyle}>
      {children}
    </div>
  );
};
