import styled from "@emotion/styled";
import {
  BackgroundProps,
  backgroundMixin,
  BorderProps,
  borderMixin,
  LayoutProps,
  layoutMixin,
  OpacityProps,
  opacityMixin,
  PositionProps,
  positionMixin,
  SpaceProps,
  spaceMixin,
  animationMixin,
  AnimationProps,
  boxShadowMixin,
  boxShadowProps,
} from "../../mixins";
import { AllEventType } from "../../types";
import { ElementType, RefObject } from "react";

export type BoxStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<AllEventType> &
  Partial<AnimationProps> &
  Partial<boxShadowProps>;

export const BoxStyled = styled.div<BoxStyleProps>(
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  animationMixin,
  boxShadowMixin
);

export type BoxProps = BoxStyleProps & {
  children?: React.ReactNode;
  ref?: RefObject<HTMLDivElement>;
  as?: ElementType<any> | undefined;
};
export const Box = (props: BoxProps) => {
  return <BoxStyled as={props.as} {...props} />;
};
