import * as CSS from "csstype";
import { css } from "@emotion/react";

export type AnimationProps = {
  transition: CSS.Property.Transition;
  transform: CSS.Property.Transform;
};

export const animationMixin = ({
  transition,
  transform,
}: Partial<AnimationProps>) => {
  return css(
    transition != null && { transition: transition },
    transform != null && { transform: transform }
  );
};
