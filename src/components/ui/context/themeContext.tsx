import { createContext, useContext } from "react";
import { ThemeType } from "./themeType";

const UiContext = createContext({});

type Props = {
  theme: ThemeType;
  children: JSX.Element | JSX.Element[];
};

const ThemeContext = ({ children, theme }: Props) => {
  return <UiContext.Provider value={theme}>{children}</UiContext.Provider>;
};

const useThemeContext = () => {
  const themeContext = useContext(UiContext) as ThemeType;
  if (themeContext) {
    return themeContext;
  } else {
    throw new Error("useThemeContext must be used inside ThemeContext.Provider");
  }
};

export { ThemeContext, useThemeContext };
