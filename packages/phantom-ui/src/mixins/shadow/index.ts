import * as CSS from "csstype";
import { css } from "@emotion/react";
import { BreakPointProps } from "../../types/responsive";
import { createResponsiveStyle } from "../../lib/responsive";

export type boxShadowProps = {
  boxShadow: CSS.Property.BoxShadow | BreakPointProps;
};

export const boxShadowMixin = ({ boxShadow }: Partial<boxShadowProps>) => {
  return css(
    boxShadow != null && typeof boxShadow === "string"
      ? { boxShadow: boxShadow }
      : typeof boxShadow === "object" &&
          createResponsiveStyle("boxShadow", boxShadow.sm, boxShadow.md)
  );
};
