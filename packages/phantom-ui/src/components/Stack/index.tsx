import styled from "@emotion/styled";
import { backgroundMixin, BackgroundProps } from "mixins/background";
import { borderMixin, BorderProps } from "mixins/border";
import { layoutMixin, LayoutProps } from "mixins/layout";
import { opacityMixin, OpacityProps } from "mixins/opacity";
import { spaceMixin, SpaceProps } from "mixins/space";
import { animationMixin, AnimationProps } from "mixins/animation";
import { flexMixin, FlexProps } from "mixins/flex";

export type StackStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<OpacityProps> &
  Partial<AnimationProps> &
  Partial<FlexProps>;

export const StackStyled = styled.div<StackStyleProps>(
  flexMixin,
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  opacityMixin,
  animationMixin
);

export type StackProps = StackStyleProps & {
  children?: React.ReactNode;
};

export const Stack = (props: StackProps) => {
  return <StackStyled {...props} />;
};
