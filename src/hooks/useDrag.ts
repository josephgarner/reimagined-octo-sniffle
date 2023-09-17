import { RefObject, useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

type Options = {
  onPointerDown?: (e: MouseEvent) => void;
  onPointerUp?: (e: MouseEvent) => void;
  onPointerMove?: (e: MouseEvent) => void;
  onDrag?: (e: MouseEvent) => void;
};

const useDrag = (ref: RefObject<HTMLDivElement>, deps: Position[], options: Options) => {
  const [isDragging, setIsDragging] = useState(false);

  const {
    onPointerDown = (e: MouseEvent) => {},
    onPointerUp = (e: MouseEvent) => {},
    onPointerMove = (e: MouseEvent) => {},
    onDrag = (e: MouseEvent) => {},
  } = options;

  const handlePointerDown = (e: MouseEvent) => {
    setIsDragging(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e: MouseEvent) => {
    setIsDragging(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e: MouseEvent) => {
    onPointerMove(e);
    if (isDragging) {
      onDrag(e);
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("pointerdown", handlePointerDown);
      element.addEventListener("pointerup", handlePointerUp);
      element.addEventListener("pointermove", handlePointerMove);
      element.addEventListener("mouseleave", handlePointerUp);

      return () => {
        element.removeEventListener("pointerdown", handlePointerDown);
        element.removeEventListener("pointerup", handlePointerUp);
        element.removeEventListener("pointermove", handlePointerMove);
        element.removeEventListener("mouseleave", handlePointerUp);
      };
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, isDragging]);

  return { isDragging };
};

export default useDrag;
