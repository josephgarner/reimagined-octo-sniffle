import { TypeWriter } from "../components/animation";
import { Container, InnerContainer, Text, Title } from "../components/ui";

export function LandingPage() {
  return (
    <Container>
      <InnerContainer size="md" position="center">
        <TypeWriter TextComponent={Title} type="h0" algin="center" animate>
          Hello There!
        </TypeWriter>
        <TypeWriter TextComponent={Title} type="h3" algin="center" speed="fast" delay={2500} animate>
          You have reached the portfolio of a Software Developer
        </TypeWriter>
        <TypeWriter TextComponent={Title} type="h2" algin="center" delay={5500} animate>
          Joseph Garner
        </TypeWriter>
      </InnerContainer>
    </Container>
  );
}
