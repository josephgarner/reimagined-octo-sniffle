import { useState } from "react";
import { FadeIn } from "../../components/animation";
import { Button, FlexContainer, Text, Title } from "../../components/ui";
import { useNavigate } from "react-router-dom";
import { PiCaretLeftBold } from "react-icons/pi";

export const FormulaSchedule = () => {
  const navigate = useNavigate();
  const [navigating, setNavigating] = useState(false);

  const navigateToProjects = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setNavigating(true);
    setTimeout(() => {
      navigate("/projects");
    }, 1500);
  };

  return (
    <FlexContainer vAlign="start">
      <FadeIn inverse={navigating}>
        <Button vAlign="start" variant="ghost" onClick={navigateToProjects} leftIcon={PiCaretLeftBold}>
          BACK
        </Button>
        <Title>Formula Schedule</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet nibh vel ullamcorper cursus. Nulla ex
          quam, sodales non consequat nec, pretium a augue. Sed massa mi, finibus ac interdum sit amet, mattis ac diam.
          Donec mattis sapien mollis sapien elementum porttitor. Integer facilisis elit quis velit sodales, vitae
          dapibus nulla placerat. Donec auctor tristique rutrum. Maecenas in metus arcu.
        </Text>
        <Text>
          Pellentesque ut consectetur sem. Proin commodo viverra bibendum. Vestibulum euismod neque ut congue vehicula.
          Proin euismod, sem vel molestie luctus, lectus elit commodo lectus, eget placerat tortor turpis ac ipsum.
          Integer pulvinar enim ut tincidunt varius. Morbi at pharetra purus, sed malesuada turpis. Vivamus a nunc
          eleifend, vulputate nunc ut, tristique lacus. Nunc nulla leo, cursus a sagittis nec, pharetra ac risus. Etiam
          a fermentum nibh. Phasellus at efficitur erat. Sed cursus mauris leo, eget fringilla ex euismod quis. Duis
          ultrices imperdiet lacinia. Proin velit eros, volutpat nec erat eget, malesuada egestas orci. Suspendisse
          potenti. Nunc vel mi vel magna lacinia pulvinar quis pretium neque.
        </Text>
      </FadeIn>
    </FlexContainer>
  );
};
