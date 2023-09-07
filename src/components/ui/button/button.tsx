import { useState } from "react";
import { useThemeContext } from "../context/themeContext";
import "./style.css";

type Props = {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: "color" | "black";
  variant?: "filled" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Button = ({ children, onClick, color = "black", variant = "filled", size = "md" }: Props) => {
  const theme = useThemeContext();

  const className = color === "color" ? "button_color" : "button_black";

  const sharredStyle: React.CSSProperties = {
    borderWidth: "2px",
    borderStyle: "solid",
    padding: theme.spacing![size],
  };

  const unhoverStyle: React.CSSProperties = {
    borderColor: theme.color?.black,
    backgroundColor: theme.color?.white,
    backgroundPosition: "0px 0px",
    color: theme.color?.black,
  };

  const hoverStyle: React.CSSProperties =
    color === "color"
      ? {
          backgroundImage: `repeating-linear-gradient(90deg,
					${theme.color?.primary} 0% 25%,
					${theme.color?.secondary} 25% 50%,
					${theme.color?.tertiary} 50% 75%, 
					${theme.color?.quaternary} 75% 100%)`,
        }
      : {
          borderColor: theme.color?.black,
          backgroundColor: theme.color?.black,
          color: theme.color?.white,
        };

  const [style, setStyle] = useState<React.CSSProperties>(unhoverStyle);

  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      style={{ ...style, ...sharredStyle }}
      onMouseEnter={() => setStyle(hoverStyle)}
      onMouseLeave={() => setStyle(unhoverStyle)}
    >
      {children}
    </button>
  );
};
