import { createContext, useContext, Dispatch, SetStateAction } from "react";

const NavigatingContext = createContext({});

type NavigatingState = {
  isNavigating: boolean;
  setIsNavigating: Dispatch<SetStateAction<boolean>>;
  updateState: (setter: Dispatch<SetStateAction<boolean>>, param: boolean) => void;
};

type Props = {
  state?: NavigatingState;
  children: JSX.Element | JSX.Element[];
};

const defaultState: NavigatingState = {
  isNavigating: false,
  setIsNavigating: () => {},
  updateState: () => {},
};

const LoaderContext = ({ children, state = defaultState }: Props) => {
  let isNavigating = state.isNavigating;
  let setIsNavigating = state.setIsNavigating;
  const updateState = (setter: Dispatch<SetStateAction<boolean>>, param: boolean) => {
    isNavigating = param;
    setIsNavigating = setter;
  };

  const contextState = {
    isNavigating,
    setIsNavigating,
    updateState,
  };

  return <NavigatingContext.Provider value={contextState}>{children}</NavigatingContext.Provider>;
};

const useNavigatingContext = () => {
  const navigatingContext = useContext(NavigatingContext) as NavigatingState;
  if (navigatingContext) {
    return navigatingContext;
  } else {
    throw new Error("useLoaderContext must be used inside NavigatingContext.Provider");
  }
};

export { LoaderContext, useNavigatingContext };
