import { animationMixin, AnimationProps } from "mixins/animation";
import { BackgroundProps, backgroundMixin } from "mixins/background";
import { BorderProps, borderMixin } from "mixins/border";
import { GridChildrenProps, gridChildrenMixin } from "mixins/grid";
import { LayoutProps, layoutMixin } from "mixins/layout";
import { OpacityProps, opacityMixin } from "mixins/opacity";
import { PositionProps, positionMixin } from "mixins/position";
import { boxShadowMixin, boxShadowProps } from "mixins/shadow";
import { SpaceProps, spaceMixin } from "mixins/space";
import { EventClickType } from "types/events";
import styled from "@emotion/styled";

export type GridChildrenStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<boxShadowProps> &
  Partial<GridChildrenProps> &
  Partial<AnimationProps> &
  Partial<EventClickType>;

export const GridChildrenStyled = styled.div<GridChildrenStyleProps>(
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  layoutMixin,
  boxShadowMixin,
  gridChildrenMixin,
  animationMixin
);

export type GridItemProps = GridChildrenStyleProps & {
  children?: React.ReactNode;
};

export const GridItem = (props: GridItemProps) => {
  return <GridChildrenStyled {...props} />;
};
