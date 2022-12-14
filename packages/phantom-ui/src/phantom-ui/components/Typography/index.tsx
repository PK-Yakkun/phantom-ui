import * as CSS from "csstype";
import { BackgroundProps, backgroundMixin } from "mixins/background";
import { BorderProps, borderMixin } from "mixins/border";
import { LayoutProps, layoutMixin } from "mixins/layout";
import { OpacityProps, opacityMixin } from "mixins/opacity";
import { PositionProps, positionMixin } from "mixins/position";
import { SpaceProps, spaceMixin } from "mixins/space";
import { VariantType } from "types/typography";
import styled from "@emotion/styled";
import { useState, useEffect, ElementType } from "react";
import { BreakPointProps } from "types/responsive";
import { createResponsiveStyle } from "lib/responsive";
import { ColorType } from "types/color";
import { animationMixin, AnimationProps } from "mixins/animation";

type VariantMapping = { [key in VariantType]: string };

export const variantMapings: VariantMapping = {
  body: "p",
  button: "p",
  caption: "span",
  title: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

export type StyleTypographyProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<AnimationProps> & {
    textAlign?: CSS.Property.TextAlign | BreakPointProps;
    fontSize?: CSS.Property.FontSize | BreakPointProps;
    lineHeight?: CSS.Property.LineHeight | BreakPointProps;
    whiteSpace?: CSS.Property.WhiteSpace | BreakPointProps;
  };

export const TypographyStyled = styled.span<TypographyProps>(
  ({ theme }) => `color: ${theme.color.typography};`,
  ({ theme, color }) => {
    switch (color) {
      case "body":
        return { color: theme.color.body };
      case "primary":
        return { color: theme.color.primary };
      case "secondary":
        return { color: theme.color.secondary };
      case "typography":
        return { color: theme.color.typography };
      default:
        return { color: color };
    }
  },
  ({ variant, theme }) => {
    switch (variant) {
      case "title":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.title.sm.size,
            fontWeight: theme.font.title.sm.weight,
            lineHeight: theme.font.title.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.title.md.size,
            fontWeight: theme.font.title.md.weight,
            lineHeight: theme.font.title.sm.lineH,
          }),
        ];
      case "h1":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h1.sm.size,
            fontWeight: theme.font.h1.sm.weight,
            lineHeight: theme.font.h1.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h1.md.size,
            fontWeight: theme.font.h1.md.weight,
            lineHeight: theme.font.h1.sm.lineH,
          }),
        ];
      case "h2":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h2.sm.size,
            fontWeight: theme.font.h2.sm.weight,
            lineHeight: theme.font.h2.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h2.md.size,
            fontWeight: theme.font.h2.md.weight,
            lineHeight: theme.font.h2.sm.lineH,
          }),
        ];
      case "h3":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h3.sm.size,
            fontWeight: theme.font.h3.sm.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h3.md.size,
            fontWeight: theme.font.h3.md.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
        ];
      case "h4":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h3.sm.size,
            fontWeight: theme.font.h3.sm.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h3.md.size,
            fontWeight: theme.font.h3.md.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
        ];
      case "h5":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h3.sm.size,
            fontWeight: theme.font.h3.sm.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h3.md.size,
            fontWeight: theme.font.h3.md.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
        ];
      case "h6":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h3.sm.size,
            fontWeight: theme.font.h3.sm.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h3.md.size,
            fontWeight: theme.font.h3.md.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
        ];
      case "body":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.body.sm.size,
            fontWeight: theme.font.body.sm.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.body.md.size,
            fontWeight: theme.font.body.md.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
        ];
      case "caption":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.caption.sm.size,
            fontWeight: theme.font.caption.sm.weight,
            lineHeight: theme.font.caption.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.caption.md.size,
            fontWeight: theme.font.caption.md.weight,
            lineHeight: theme.font.caption.sm.lineH,
          }),
        ];
      default:
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.body.sm.size,
            fontWeight: theme.font.body.sm.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.body.md.size,
            fontWeight: theme.font.body.md.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
        ];
    }
  },
  ({ textAlign }) =>
    textAlign != null && typeof textAlign === "string"
      ? { textAlign: textAlign }
      : typeof textAlign === "object" &&
        createResponsiveStyle("textAlign", textAlign.sm, textAlign.md),
  ({ fontSize }) =>
    fontSize != null && typeof fontSize === "string"
      ? { fontSize: fontSize }
      : typeof fontSize === "object" &&
        createResponsiveStyle("fontSize", fontSize.sm, fontSize.md),
  ({ lineHeight }) =>
    lineHeight != null && typeof lineHeight === "string"
      ? `&& {line-height: ${lineHeight}};`
      : typeof lineHeight === "object" &&
        createResponsiveStyle("lineHeight", lineHeight.sm, lineHeight.md),
  ({ whiteSpace }) =>
    whiteSpace != null && typeof whiteSpace === "string"
      ? `&& {white-space: ${whiteSpace}};`
      : typeof whiteSpace === "object" &&
        createResponsiveStyle("whiteSpace", whiteSpace.sm, whiteSpace.md),
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  animationMixin
);

export type TypographyProps = StyleTypographyProps & {
  variant?: VariantType;
  color?: ColorType;
  children?: string | React.ReactNode;
  as?: ElementType<any> | undefined;
};

export const Typography = (props: TypographyProps) => {
  const [htmlTag, setHtmlTag] = useState<ElementType<any> | undefined>();
  useEffect(() => {
    // Change HTML tags with mapped values based on variant
    const as = variantMapings[props.variant!] as ElementType<any> | undefined;
    setHtmlTag(as);
  }, [props.variant]);

  return <TypographyStyled as={htmlTag} {...props} />;
};
