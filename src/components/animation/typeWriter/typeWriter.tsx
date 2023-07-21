import { useEffect, useState } from "react";
import { HeadingType, Position } from "../../../types";
import "./style.css";

type Speed = "slow" | "normal" | "fast";

type Props = {
  children: string;
  TextComponent: React.ElementType;
  type?: HeadingType;
  algin?: Position;
  animate?: boolean;
  delay?: number;
  speed?: Speed;
};

export const TypeWriter = ({
  children,
  TextComponent,
  animate = false,
  delay,
  type,
  algin,
  speed = "normal",
}: Props) => {
  const [text, setText] = useState(animate ? "" : children);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(delay ? false : true);
  const [waiting, setWaiting] = useState(delay !== undefined);

  const typeSpeed = speed === "slow" ? 150 : speed === "fast" ? 50 : 90;

  useEffect(() => {
    if (waiting) {
      const timeout = setTimeout(() => {
        setWaiting(false);
        setShowCursor(true);
      }, delay);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      if (animate && index !== children.length) {
        const timeout = setTimeout(() => {
          setText(text + children[index]);
          setIndex(index + 1);
        }, typeSpeed);

        return () => {
          clearTimeout(timeout);
        };
      } else {
        const timeout = setTimeout(() => {
          setShowCursor(false);
        }, 1500);
        return () => {
          clearTimeout(timeout);
        };
      }
    }
  }, [children, text, animate, index, waiting, delay]);

  return (
    <TextComponent type={type} algin={algin}>
      {text}
      {showCursor && <span className={index === children.length ? "typewriter_cursor" : ""}>_</span>}
    </TextComponent>
  );
};
