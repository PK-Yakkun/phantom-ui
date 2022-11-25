import styled from "@emotion/styled";
import { BackgroundProps, backgroundMixin } from "mixins/background";
import { BorderProps, borderMixin } from "mixins/border";
import { LayoutProps, layoutMixin } from "mixins/layout";
import { OpacityProps, opacityMixin } from "mixins/opacity";
import { PositionProps, positionMixin } from "mixins/position";
import { SpaceProps, spaceMixin } from "mixins/space";
import { AllEventType } from "types/events";

export type ButtonStyleProps = Partial<BackgroundProps> &
  Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<AllEventType>;

export const ButtonStyled = styled.button<ButtonStyleProps>(
  {
    "&:hover": {
      cursor: "pointer",
    },
  },
  backgroundMixin,
  layoutMixin,
  spaceMixin,
  borderMixin,
  positionMixin,
  opacityMixin
);

export type ButtonProps = ButtonStyleProps & {
  children?: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />;
};
