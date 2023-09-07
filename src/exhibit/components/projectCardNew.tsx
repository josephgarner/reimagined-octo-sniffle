import React, { useRef, useState } from "react";
import { Title } from "../../components/ui";
import useDrag from "../../hooks/useDrag";

type Props = {
  initalPos: InitalPos;
  title?: string;
  tag?: string;
  color?: string;
  size?: Size;
};

type InitalPos = {
  x: number;
  y: number;
};

type Size = {
  height: number;
  width: number;
};

export const ProjectCard = ({
  title,
  tag,
  color,
  initalPos = { x: 0, y: 0 },
  size = { height: 100, width: 200 },
}: Props) => {
  const [position, setPosition] = useState(initalPos);
  const [snapPosition, setSnapPosition] = useState(initalPos);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: MouseEvent) => {
    setPosition({
      x: position.x + e.movementX,
      y: position.y + e.movementY,
    });
  };

  const { isDragging } = useDrag(cardRef, [position], {
    onDrag: handleDrag,
  });

  const className = `project_card ${isDragging ? "project_card_clicked" : ""}`;

  const style: React.CSSProperties = {
    backgroundColor: color,
    height: `${size.height}px`,
    width: `${size.width}px`,
    left: `${position.x}px`,
    top: `${position.y}px`,
    position: "relative",
  };

  return (
    <div className={className} style={style} ref={cardRef}>
      <Title algin="center" type="h3">
        {title}
      </Title>
      <Title algin="center" type="h5">
        {tag}
      </Title>
    </div>
  );
};
