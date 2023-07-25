import { TypeWriter, FadeIn } from "../components/animation";
import { Button, Container, InnerContainer, Title } from "../components/ui";

export function LandingPage() {
  return (
    <FadeIn>
      <Container>
        <InnerContainer size="md" position="center">
          <TypeWriter TextComponent={Title} type="h0" algin="center" delay={1000} animate>
            Hello There!
          </TypeWriter>
          <TypeWriter TextComponent={Title} type="h3" algin="center" speed="fast" delay={3500} animate>
            You have reached the portfolio of a Software Developer
          </TypeWriter>
        </InnerContainer>
      </Container>
      <Container>
        <InnerContainer size="xs" position="center">
          <Button size="sm">View Projects</Button>
        </InnerContainer>
      </Container>
    </FadeIn>
  );
}
