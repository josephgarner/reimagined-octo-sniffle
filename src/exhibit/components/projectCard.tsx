import { createRef, useEffect, useState } from "react";
import { Title } from "../../components/ui";

type Props = {
  initalPos: InitalPos;
  title?: string;
  tag?: string;
  color?: string;
};

type InitalPos = {
  x: number;
  y: number;
};

export const ProjectCard = ({ title, tag, color, initalPos = { x: 0, y: 0 } }: Props) => {
  const [pos, setPos] = useState(initalPos);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const posRef = createRef<HTMLDivElement>();

  const className = `project_card ${dragging ? "project_card_clicked" : ""}`;

  const style: React.CSSProperties = {
    backgroundColor: color,
    left: pos.x,
    top: pos.y,
    position: "absolute",
  };

  const handleOnMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.button !== 0) return;
    console.log("MOUSE DOWN");
    setMousePos({ x: event.clientX, y: event.clientY });
    setDragging(true);
  };

  const handleOnMouseUp = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.button !== 0) return;
    console.log("MOUSE UP or OUT");
    setDragging(false);
  };

  useEffect(() => {
    console.log("DIV POS", pos);
    const handleMouseMove = (evt: MouseEvent) => {
      evt.stopPropagation();
      evt.preventDefault();
      const left = posRef.current?.offsetLeft || 0;
      const top = posRef.current?.offsetTop || 0;
      const mouseX = mousePos.x - evt.clientX;
      const mouseY = mousePos.y - evt.clientY;
      setMousePos({ x: evt.clientX, y: evt.clientY });
      setPos({
        x: top - mouseX,
        y: left - mouseY,
      });
    };

    if (dragging) {
      console.log("DRAGGING");
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      console.log("NOT DRAGGING");
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [dragging, mousePos.x, mousePos.y, pos, posRef]);

  return (
    <div
      draggable
      className={className}
      style={style}
      ref={posRef}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
    >
      <Title algin="center">{title}</Title>
      <Title algin="center" type="h5">
        {tag}
      </Title>
    </div>
  );
};
