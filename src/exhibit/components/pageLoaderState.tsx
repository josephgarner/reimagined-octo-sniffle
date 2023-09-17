import { createContext, useContext, Dispatch, SetStateAction } from "react";

const PageLoader = createContext({});

type LoaderState = {
  unloading: boolean;
  setUnloading: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  value: LoaderState;
  children: JSX.Element | JSX.Element[];
};

const PageLoaderContext = ({ children, value }: Props) => {
  return <PageLoader.Provider value={value}>{children}</PageLoader.Provider>;
};

const useLoader = () => {
  const loaderContext = useContext(PageLoader) as LoaderState;
  if (loaderContext) {
    return loaderContext;
  } else {
    throw new Error("useLoader must be used inside PageLoaderContext.Provider");
  }
};

export { PageLoaderContext, useLoader };
