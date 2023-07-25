import { useEffect, useState } from "react";
import "./style.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  duration?: number;
  delay?: number;
};

export const FadeIn = ({ children, duration = 1, delay = 500 }: Props) => {
  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: 0,
    pointerEvents: "none",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStyle({
        transition: `opacity ${duration}s`,
        opacity: 1,
      });
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div style={style} className="fadeIn_Container">
      {children}
    </div>
  );
};
