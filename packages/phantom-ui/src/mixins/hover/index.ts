import { css } from "@emotion/react";

export type HoverProps = {
  hover: {};
};

export const hoverMixin = ({ hover }: Partial<HoverProps>) => {
  return css(
    hover != null && {
      "&:hover": hover,
    }
  );
};
