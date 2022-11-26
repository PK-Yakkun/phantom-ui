import * as CSS from "csstype";
import { css } from "@emotion/react";
import { BreakPointProps } from "types/responsive";
import { createResponsiveStyle } from "lib";

export type FlexProps = {
  display: CSS.Property.Display | BreakPointProps;
  direction: CSS.Property.FlexDirection | BreakPointProps;
  alignItems: CSS.Property.AlignItems | BreakPointProps;
  justifyContent: CSS.Property.AlignContent | BreakPointProps;
  gap: CSS.Property.Gap | BreakPointProps;
};

export const flexMixin = ({
  display = "flex",
  direction,
  alignItems,
  justifyContent,
  gap,
}: Partial<FlexProps>) => {
  return css(
    display != null && typeof display === "string"
      ? { display: display! }
      : typeof display === "object" &&
          createResponsiveStyle("display", display.sm, display.md),
    direction != null && typeof direction === "string"
      ? { flexDirection: direction! }
      : typeof direction === "object" &&
          createResponsiveStyle("flexDirection", direction.sm, direction.md),
    alignItems != null && typeof alignItems === "string"
      ? { alignItems: alignItems! }
      : typeof alignItems === "object" &&
          createResponsiveStyle("alignItems", alignItems.sm, alignItems.md),
    justifyContent != null && typeof justifyContent === "string"
      ? { justifyContent: justifyContent! }
      : typeof justifyContent === "object" &&
          createResponsiveStyle(
            "justifyContent",
            justifyContent.sm,
            justifyContent.md
          ),
    gap != null && typeof gap === "string"
      ? { gap: gap! }
      : typeof gap === "object" && createResponsiveStyle("gap", gap.sm, gap.md)
  );
};
