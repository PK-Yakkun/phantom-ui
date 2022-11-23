import * as CSS from "csstype";
import { css } from "@emotion/react";
import { createResponsiveStyle } from "../../lib/responsive";
import { BreakPointProps } from "../../types/responsive";

export type PositionProps = {
  position: CSS.Property.Position | BreakPointProps;
  top: string | BreakPointProps;
  right: string | BreakPointProps;
  bottom: string | BreakPointProps;
  left: string | BreakPointProps;
  inset: CSS.Property.Inset | BreakPointProps;
  zIndex: CSS.Property.ZIndex | BreakPointProps;
};

export const positionMixin = ({
  position,
  top,
  right,
  bottom,
  left,
  inset,
  zIndex,
}: Partial<PositionProps>) => {
  return css(
    position != null && typeof position === "string"
      ? { position: position }
      : typeof position === "object" &&
          createResponsiveStyle("position", position.sm, position.md),
    top != null && typeof top === "string"
      ? { top: top }
      : typeof top === "object" && createResponsiveStyle("top", top.sm, top.md),
    right != null && typeof right === "string"
      ? { right: right }
      : typeof right === "object" &&
          createResponsiveStyle("right", right.sm, right.md),
    bottom != null && typeof bottom === "string"
      ? { bottom: bottom }
      : typeof bottom === "object" &&
          createResponsiveStyle("bottom", bottom.sm, bottom.md),
    left != null && typeof left === "string"
      ? { left: left }
      : typeof left === "object" &&
          createResponsiveStyle("left", left.sm, left.md),
    inset != null && typeof inset === "string"
      ? { inset: inset }
      : typeof inset === "object" &&
          createResponsiveStyle("inset", inset.sm, inset.md),
    zIndex != null && typeof zIndex === "string"
      ? { zIndex: zIndex }
      : typeof zIndex === "object" &&
          createResponsiveStyle("zIndex", zIndex.sm, zIndex.md)
  );
};
