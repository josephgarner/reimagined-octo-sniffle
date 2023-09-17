import { useEffect, useRef } from "react";

export const AnimdatedBackground = (props: any) => {
  let height = window.innerHeight;
  let width = window.innerWidth;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 50, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const drawShape = (ctx: CanvasRenderingContext2D) => {
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(5, 5);
    ctx.lineTo(30, 30);
    ctx.stroke();
    ctx.moveTo(30, 5);
    ctx.lineTo(5, 30);
    ctx.stroke();
  };

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    let frameCount = 0;
    let animationFrameId: number;
    if (context) {
      window.addEventListener("resize", function () {
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;
      });
      const render = () => {
        frameCount++;
        draw(context, frameCount);
        drawShape(context);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", function () {});
    };
  }, []);

  return <canvas ref={canvasRef} {...props} height={height} width={width} />;
};
