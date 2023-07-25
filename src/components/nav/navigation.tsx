import { GrInstagram, GrGithub, GrLinkedin } from "react-icons/gr";
import { LinkIcon } from "../ui";
import "./style.css";
import { FadeIn } from "../animation";

export const Navigation = () => {
  return (
    <div className="navigation">
      <FadeIn>
        <LinkIcon icon={<GrInstagram />} size="xl" location="https://www.instagram.com/jo.p.garner/" newWindow />
        <LinkIcon icon={<GrLinkedin />} size="xl" location="https://www.linkedin.com/in/josephgarner/" newWindow />
        <LinkIcon icon={<GrGithub />} size="xl" location="https://github.com/josephgarner" newWindow />
        {/* <TypeWriter TextComponent={Title} type="h2" algin="center" delay={5500} animate>
        Joseph Garner
      </TypeWriter> */}
      </FadeIn>
    </div>
  );
};
