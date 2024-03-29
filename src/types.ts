export type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type Position = "center" | "right" | "left";

export type HeadingType = "h0" | "h1" | "h2" | "h3" | "h4" | "h5";

export type Project = {
  title: string;
  tags: ProjectTags[];
  location: string;
};

export enum ProjectTags {
  BACKEND,
  FRONTEND,
  IOT,
  CLOUD,
}
