import * as CSS from "csstype";
import { css } from "@emotion/react";
import { BreakPointProps } from "../../types/responsive";
import { createResponsiveStyle } from "../../lib/responsive";

export type BackgroundProps = {
  bg: CSS.Property.Color | BreakPointProps;
  bgColor: CSS.Property.BackgroundColor | BreakPointProps;
  bgClip: CSS.Property.BackgroundClip | BreakPointProps;
  bgGradient: CSS.Property.BackgroundImage | BreakPointProps;
  bgImage: CSS.Property.BackgroundImage | BreakPointProps;
  bgRepeat: CSS.Property.BackgroundRepeat | BreakPointProps;
  bgSize: CSS.Property.BackgroundSize | number | BreakPointProps;
  bgAttachment: CSS.Property.BackgroundAttachment | BreakPointProps;
  bgPosition: CSS.Property.BackgroundPosition | number | BreakPointProps;
};

export const backgroundMixin = ({
  bg,
  bgColor,
  bgClip,
  bgGradient,
  bgImage,
  bgRepeat,
  bgSize,
  bgAttachment,
  bgPosition,
}: Partial<BackgroundProps>) => {
  return css(
    bg != null && typeof bg === "string"
      ? { background: bg }
      : typeof bg === "object" &&
          createResponsiveStyle("background", bg.sm, bg.md),
    bgColor != null && typeof bgColor === "string"
      ? { backgroundColor: bgColor }
      : typeof bgColor === "object" &&
          createResponsiveStyle("backgroundColor", bgColor.sm, bgColor.md),
    bgClip != null && typeof bgClip === "string"
      ? { backgroundClip: bgClip }
      : typeof bgClip === "object" &&
          createResponsiveStyle("backgroundClip", bgClip.sm, bgClip.md),
    bgGradient != null && typeof bgGradient === "string"
      ? { backgroundGradient: bgGradient }
      : typeof bgGradient === "object" &&
          createResponsiveStyle(
            "backgroundGradient",
            bgGradient.sm,
            bgGradient.md
          ),
    bgImage != null && typeof bgImage === "string"
      ? { backgroundImage: bgImage }
      : typeof bgImage === "object" &&
          createResponsiveStyle("backgroundImage", bgImage.sm, bgImage.md),
    bgRepeat != null && typeof bgRepeat === "string"
      ? { backgroundRepeat: bgRepeat }
      : typeof bgRepeat === "object" &&
          createResponsiveStyle("backgroundRepeat", bgRepeat.sm, bgRepeat.md),
    bgSize != null && typeof bgSize === "string"
      ? { backgroundSize: bgSize }
      : typeof bgSize === "object" &&
          createResponsiveStyle("backgroundSize", bgSize.sm, bgSize.md),
    bgAttachment != null && typeof bgAttachment === "string"
      ? { backgroundAttachment: bgAttachment }
      : typeof bgAttachment === "object" &&
          createResponsiveStyle(
            "backgroundAttachment",
            bgAttachment.sm,
            bgAttachment.md
          ),
    bgPosition != null && typeof bgPosition === "string"
      ? { backgroundPosition: bgPosition }
      : typeof bgPosition === "object" &&
          createResponsiveStyle(
            "backgroundPosition",
            bgPosition.sm,
            bgPosition.md
          )
  );
};
