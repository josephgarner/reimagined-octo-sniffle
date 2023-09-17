import { useEffect, useState } from "react";
import "./style.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  duration?: number;
  delay?: number;
  inverse?: boolean;
  container?: boolean;
};

export const FadeIn = ({ children, duration = 1, delay = 500, inverse = false, container = true }: Props) => {
  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: inverse ? 1 : 0,
    pointerEvents: "none",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStyle({
        transition: `opacity ${duration}s`,
        opacity: inverse ? 0 : 1,
      });
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [inverse, delay, duration]);

  return (
    <div style={style} className={container ? "fadeIn_Container" : ""}>
      {children}
    </div>
  );
};
