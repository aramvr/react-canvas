import React, { useContext, useState } from "react";
import { CanvasContext } from "./Context";

export const Text = ({
  color,
  hoverColor,
  fontSize,
  height,
  fontFamily,
  top = 0,
  left = 0,
  children,
  onMouseOver,
  onMouseOut,
  onMouseDown,
  offsetLeft = 0,
  offsetTop = 0,
}) => {
  const { context: ctx, mouseMove, mouseDown } = useContext(CanvasContext);
  const [isMouseOver, setIsMouseOver] = useState(false);

  let text = ctx.measureText(children);

  // TODO: maybe just have top & left merged
  let leftWithOffset = offsetLeft +left;
  let topWithOffset = offsetTop+top

  const draw = () =>
    ctx.fillText(children, leftWithOffset, topWithOffset + height);

  ctx.font = `${fontSize} ${fontFamily}`;
  ctx.fillStyle = color;

  draw();

  const isInBound = (e) =>
    e.clientX >= leftWithOffset &&
    e.clientX < text.width + leftWithOffset &&
    e.clientY > topWithOffset &&
    e.clientY < height + topWithOffset;

  if (mouseMove && isInBound(mouseMove)) {
    if (!isMouseOver) {
      setIsMouseOver(true);
      onMouseOver?.(mouseMove);
      console.log("onMouseOver");
    }
  } else if (isMouseOver) {
    console.log("onMouseOut");
    onMouseOut?.(mouseMove);
    setIsMouseOver(false);
  }

  if (isMouseOver && hoverColor) {
    ctx.fillStyle = hoverColor;
    draw();
  }

  if (mouseDown && isInBound(mouseDown)) {
    onMouseDown?.(mouseDown);
  }
  // if the mouse cordinates are on the element, trigger onMouseOver event, set isMouseOver to true
  // if mouse is moved &&

  return <p data-testid="text">{children}</p>;
};
