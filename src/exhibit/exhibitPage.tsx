import { useState } from "react";
import { FadeIn } from "../components/animation";
import { CategoryBanner } from "./components/categoryBanner";
import { FlexContainer } from "../components/ui";
import { Outlet } from "react-router-dom";
import { PageLoaderContext } from "./components/pageLoaderState";

export const ExhibitPage = () => {
  const [unloading, setUnloading] = useState(false);
  console.log(unloading);
  return (
    <FadeIn>
      <FlexContainer vAlign="start">
        <PageLoaderContext value={{ unloading, setUnloading }}>
          <CategoryBanner />
          <div style={{ marginLeft: "300px" }}>
            <Outlet />
          </div>
        </PageLoaderContext>
      </FlexContainer>
    </FadeIn>
  );
};
