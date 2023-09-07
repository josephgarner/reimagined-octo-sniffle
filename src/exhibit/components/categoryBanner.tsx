import { Text, useThemeContext } from "../../components/ui";
import "../style/categoryBannerStyle.css";

export const CategoryBanner = () => {
  const theme = useThemeContext();

  const sharedStyle: React.CSSProperties = {};

  const textStyle: React.CSSProperties = {
    color: theme.color?.white,
    writingMode: "vertical-rl",
    textOrientation: "upright",
    width: "fit-content",
    height: "200px",
    position: "relative",
    top: "150px",
    fontWeight: 800,
  };

  const backendStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.primary,
  };
  const frontendStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.secondary,
  };
  const iotStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.tertiary,
  };
  const designStyle: React.CSSProperties = {
    ...sharedStyle,
    backgroundColor: theme.color?.quaternary,
  };

  return (
    <div className="category_banner_container">
      <div style={backendStyle} className="category_banner_filter">
        <Text algin="center" style={textStyle}>
          BACKEND
        </Text>
      </div>
      <div style={frontendStyle} className="category_banner_filter">
        <Text algin="center" style={textStyle}>
          FRONTEND
        </Text>
      </div>
      <div style={iotStyle} className="category_banner_filter">
        <Text algin="center" style={textStyle}>
          IOT
        </Text>
      </div>
      <div style={designStyle} className="category_banner_filter">
        <Text algin="center" style={textStyle}>
          3D DESIGN
        </Text>
      </div>
    </div>
  );
};
