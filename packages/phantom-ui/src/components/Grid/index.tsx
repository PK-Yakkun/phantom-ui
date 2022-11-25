import { BackgroundProps, backgroundMixin } from "mixins/background";
import { BorderProps, borderMixin } from "mixins/border";
import { GridParentProps, gridParentMixin } from "mixins/grid";
import { LayoutProps, layoutMixin } from "mixins/layout";
import { OpacityProps, opacityMixin } from "mixins/opacity";
import { PositionProps, positionMixin } from "mixins/position";
import { SpaceProps, spaceMixin } from "mixins/space";
import styled from "@emotion/styled";

export type GridParentStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<GridParentProps>;

export const GridStyled = styled.div<GridParentStyleProps>(
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  layoutMixin,
  gridParentMixin
);

export type GridProps = GridParentStyleProps & {
  children?: React.ReactNode;
};

export const Grid = (props: GridProps) => {
  return <GridStyled {...props} />;
};
