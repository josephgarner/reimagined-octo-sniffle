import { useEffect, useState } from "react";
import { FadeIn } from "../../components/animation";
import { Text, useThemeContext } from "../../components/ui";
import "../style/categoryBannerStyle.css";
import { useLoader } from "./pageLoaderState";

export const CategoryBanner = () => {
  const theme = useThemeContext();
  const [load, setLoad] = useState(false);
  const { unloading } = useLoader();
  const textFadeInDelay = 2500;

  useEffect(() => {
    if (!unloading) {
      setTimeout(() => {
        setLoad(true);
      }, 1000);
    } else {
      setLoad(!unloading);
    }
  }, [unloading]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    // console.log(event);
  };

  const sharedStyle: React.CSSProperties = {};

  const textStyle: React.CSSProperties = {
    color: theme.color?.white,
    writingMode: "vertical-rl",
    textOrientation: "upright",
    width: "fit-content",
    height: "100%",
    position: "fixed",
    fontWeight: 600,
  };

  const backendStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.primary,
    transition: "height 2s, width 1s",
    height: load ? "100%" : "0%",
  };
  const frontendStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.secondary,
    transition: "height 2.5s, width 1s",
    height: load ? "100%" : "0%",
  };
  const iotStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.tertiary,
    transition: "height 3s, width 1s",
    height: load ? "100%" : "0%",
  };
  const designStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.quaternary,
    transition: "height 3.5s, width 1s",
    height: load ? "100%" : "0%",
  };

  return (
    <div className="category_banner_container">
      <div style={backendStyle} onMouseEnter={handleMouseEnter} className="category_banner_filter">
        <FadeIn delay={unloading ? 0 : textFadeInDelay} inverse={unloading}>
          <Text algin="center" style={textStyle}>
            BACKEND
          </Text>
        </FadeIn>
      </div>
      <div style={frontendStyle} className="category_banner_filter">
        <FadeIn delay={unloading ? 0 : textFadeInDelay} inverse={unloading}>
          <Text algin="center" style={textStyle}>
            FRONTEND
          </Text>
        </FadeIn>
      </div>
      <div style={iotStyle} className="category_banner_filter">
        <FadeIn delay={unloading ? 0 : textFadeInDelay} inverse={unloading}>
          <Text algin="center" style={textStyle}>
            IOT
          </Text>
        </FadeIn>
      </div>
      <div style={designStyle} className="category_banner_filter">
        <FadeIn delay={unloading ? 0 : textFadeInDelay} inverse={unloading}>
          <Text algin="center" style={textStyle}>
            CLOUD
          </Text>
        </FadeIn>
      </div>
    </div>
  );
};
