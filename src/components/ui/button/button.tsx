import { useState } from "react";
import { useThemeContext } from "../context/themeContext";
import "./style.css";
import { IconType } from "react-icons";

type Props = {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: "color" | "black";
  variant?: "filled" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  vAlign?: "start" | "center" | "end";
  leftIcon?: IconType;
};

export const Button = ({
  children,
  onClick,
  color = "black",
  variant = "filled",
  size = "md",
  vAlign = "center",
  leftIcon,
}: Props) => {
  const theme = useThemeContext();

  const sharredStyle: React.CSSProperties =
    variant === "ghost"
      ? {
          borderColor: "none",
          color: theme.color?.black,
          padding: theme.spacing![size],
        }
      : {
          borderWidth: "2px",
          borderStyle: "solid",
          padding: theme.spacing![size],
          alignSelf: vAlign,
          borderRadius: "25px",
        };

  const unhoverStyle: React.CSSProperties =
    variant === "ghost"
      ? {
          opacity: "0.6",
        }
      : {
          borderColor: theme.color?.black,
          backgroundColor: theme.color?.white,
          backgroundPosition: "0px 0px",
          color: theme.color?.black,
        };

  const hoverStyle: React.CSSProperties =
    variant === "ghost"
      ? {
          opacity: "1",
        }
      : {
          borderColor: theme.color?.black,
          backgroundColor: theme.color?.black,
          color: theme.color?.white,
        };

  const [hover, setHover] = useState(false);

  const handleOnMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setHover(true);
  };

  const handleOnMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setHover(false);
  };

  const leftIconDisplay = () => {
    if (leftIcon === undefined) return null;
    const Icon = leftIcon;
    let iconSize = theme.fontSize?.h3;

    switch (size) {
      case "sm":
        iconSize = theme.fontSize?.h4;
        break;
      case "md":
        iconSize = theme.fontSize?.h3;
        break;
      case "lg":
        iconSize = theme.fontSize?.h2;
        break;
      default:
        iconSize = theme.fontSize?.h3;
    }

    return <Icon size={iconSize} />;
  };

  const buttonStyle = hover === true ? hoverStyle : unhoverStyle;

  return (
    <button
      onClick={onClick}
      className={`button`}
      style={{ ...buttonStyle, ...sharredStyle }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {leftIconDisplay()}
      {children}
    </button>
  );
};
