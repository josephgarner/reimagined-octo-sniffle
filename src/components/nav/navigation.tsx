import { GrInstagram, GrGithub, GrLinkedin } from "react-icons/gr";
import { LinkIcon } from "../ui";
import "./style.css";

export const Navigation = () => {
  return (
    <div className="navigation">
      <LinkIcon icon={<GrInstagram />} size="xl" location="https://www.instagram.com/jo.p.garner/" newWindow />
      <LinkIcon icon={<GrLinkedin />} size="xl" location="https://www.linkedin.com/in/josephgarner/" newWindow />
      <LinkIcon icon={<GrGithub />} size="xl" location="https://github.com/josephgarner" newWindow />
    </div>
  );
};
