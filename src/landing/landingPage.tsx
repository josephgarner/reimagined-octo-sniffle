import { useState } from "react";
import { TypeWriter, FadeIn } from "../components/animation";
import { Button, Container, FlexContainer, InnerContainer, Title } from "../components/ui";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const [navigating, setNavigating] = useState(false);
  const navigate = useNavigate();

  const navigateToProjects = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setNavigating(true);
    setTimeout(() => {
      navigate("projects");
    }, 1500);
  };

  return (
    <FadeIn inverse={navigating}>
      <FlexContainer>
        <Container>
          <InnerContainer size="md" position="center" height={82}>
            <TypeWriter TextComponent={Title} type="h0" algin="center" delay={1000} animate>
              Hello There!
            </TypeWriter>
          </InnerContainer>
        </Container>
        <Container>
          <InnerContainer size="md" position="center" height={94}>
            <TypeWriter TextComponent={Title} type="h3" algin="center" speed="fast" delay={3500} animate>
              You have reached the portfolio of a Software Developer
            </TypeWriter>
          </InnerContainer>
        </Container>
        <Container>
          <InnerContainer size="xs" position="center">
            <FadeIn delay={6500}>
              <Button size="sm" onClick={navigateToProjects}>
                View Projects
              </Button>
            </FadeIn>
          </InnerContainer>
        </Container>
      </FlexContainer>
    </FadeIn>
  );
}
