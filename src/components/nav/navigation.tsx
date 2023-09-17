import { GrInstagram, GrGithub, GrLinkedin } from "react-icons/gr";
import { LinkIcon, Tag } from "../ui";
import "./style.css";
import { FadeIn } from "../animation";
import { FiTool } from "react-icons/fi";

export const Navigation = () => {
  return (
    <div className="navigation">
      <FadeIn>
        <Tag icon={FiTool}>Site Under Development: Coming Together</Tag>
        <LinkIcon icon={<GrInstagram />} size="xl" location="https://www.instagram.com/jo.p.garner/" newWindow />
        <LinkIcon icon={<GrLinkedin />} size="xl" location="https://www.linkedin.com/in/josephgarner/" newWindow />
        <LinkIcon icon={<GrGithub />} size="xl" location="https://github.com/josephgarner" newWindow />
      </FadeIn>
    </div>
  );
};
