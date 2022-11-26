import * as CSS from "csstype";
import { css } from "@emotion/react";
import { BreakPointProps } from "../../types/responsive";
import { createResponsiveStyle } from "../../lib/responsive";

export type GridParentProps = {
  display: "grid" | "inline-grid" | BreakPointProps;
  gridTemplate: CSS.Property.GridTemplate | BreakPointProps;
  gridTemplateColumns: CSS.Property.GridTemplateColumns | BreakPointProps;
  gridTemplateRows: CSS.Property.GridTemplateRows | BreakPointProps;
  gridTemplateAreas: CSS.Property.GridTemplateAreas | BreakPointProps;
  gap: CSS.Property.Gap | BreakPointProps | BreakPointProps;
  columnGap: CSS.Property.ColumnGap | BreakPointProps;
  rowGap: CSS.Property.RowGap | BreakPointProps;
  gridGap: CSS.Property.GridGap | BreakPointProps;
  justifyItems: CSS.Property.JustifyItems | BreakPointProps;
  alignItems: CSS.Property.AlignItems | BreakPointProps;
  justifyContent: CSS.Property.JustifyContent | BreakPointProps;
  alignContent: CSS.Property.AlignContent | BreakPointProps;
  gridAutoColumns: CSS.Property.GridAutoColumns | BreakPointProps;
  gridAutoRows: CSS.Property.GridAutoRows | BreakPointProps;
  gridAutoFlow: CSS.Property.GridAutoFlow | BreakPointProps;
  gridColumn: CSS.Property.GridColumn | BreakPointProps;
  gridRow: CSS.Property.GridRow | BreakPointProps;
};

export type GridChildrenProps = {
  gridTemplateColumns: CSS.Property.GridTemplateColumns | BreakPointProps;
  gridColumnStart: CSS.Property.GridColumnStart | BreakPointProps;
  gridColumnEnd: CSS.Property.GridColumnEnd | BreakPointProps;
  gridRowStart: CSS.Property.GridRowStart | BreakPointProps;
  gridRowEnd: CSS.Property.GridRowEnd | BreakPointProps;
  gridColumn: CSS.Property.GridColumn | BreakPointProps;
  gridRow: CSS.Property.GridRow | BreakPointProps;
  girdArea: CSS.Property.GridArea | BreakPointProps;
  justifySelf: CSS.Property.JustifySelf | BreakPointProps;
  alignSelf: CSS.Property.AlignSelf | BreakPointProps;
  placeSelf: CSS.Property.PlaceSelf | BreakPointProps;
};

export const gridParentMixin = ({
  display = "grid",
  gridTemplate,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gap,
  columnGap,
  rowGap,
  gridGap,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  gridColumn,
  gridRow,
}: Partial<GridParentProps>) => {
  return css(
    display != null && typeof display === "string"
      ? { display: display }
      : typeof display === "object" &&
          createResponsiveStyle("display", display.sm, display.md),
    gridTemplate != null && typeof gridTemplate === "string"
      ? { gridTemplate: gridTemplate }
      : typeof gridTemplate === "object" &&
          createResponsiveStyle(
            "gridTemplate",
            gridTemplate.sm,
            gridTemplate.md
          ),
    gridTemplateColumns != null && typeof gridTemplateColumns === "string"
      ? { gridTemplateColumns: gridTemplateColumns }
      : typeof gridTemplateColumns === "object" &&
          createResponsiveStyle(
            "gridTemplateColumns",
            gridTemplateColumns.sm,
            gridTemplateColumns.md
          ),
    gridTemplateRows != null && typeof gridTemplateRows === "string"
      ? { gridTemplateRows: gridTemplateRows }
      : typeof gridTemplateRows === "object" &&
          createResponsiveStyle(
            "gridTemplateRows",
            gridTemplateRows.sm,
            gridTemplateRows.md
          ),
    gridTemplateAreas != null && typeof gridTemplateAreas === "string"
      ? { gridTemplateAreas: gridTemplateAreas }
      : typeof gridTemplateAreas === "object" &&
          createResponsiveStyle(
            "gridTemplateAreas",
            gridTemplateAreas.sm,
            gridTemplateAreas.md
          ),
    gap != null && typeof gap === "string"
      ? { gap: gap }
      : typeof gap === "object" && createResponsiveStyle("gap", gap.sm, gap.md),
    columnGap != null && typeof columnGap === "string"
      ? { columnGap: columnGap }
      : typeof columnGap === "object" &&
          createResponsiveStyle("columnGap", columnGap.sm, columnGap.md),
    rowGap != null && typeof rowGap === "string"
      ? { rowGap: rowGap }
      : typeof rowGap === "object" &&
          createResponsiveStyle("rowGap", rowGap.sm, rowGap.md),
    gridGap != null && typeof gridGap === "string"
      ? { gridGap: gridGap }
      : typeof gridGap === "object" &&
          createResponsiveStyle("gridGap", gridGap.sm, gridGap.md),
    justifyItems != null && typeof justifyItems === "string"
      ? { justifyItems: justifyItems }
      : typeof justifyItems === "object" &&
          createResponsiveStyle(
            "justifyItems",
            justifyItems.sm,
            justifyItems.md
          ),
    alignItems != null && typeof alignItems === "string"
      ? { alignItems: alignItems }
      : typeof alignItems === "object" &&
          createResponsiveStyle("alignItems", alignItems.sm, alignItems.md),
    justifyContent != null && typeof justifyContent === "string"
      ? { justifyContent: justifyContent }
      : typeof justifyContent === "object" &&
          createResponsiveStyle(
            "justifyContent",
            justifyContent.sm,
            justifyContent.md
          ),
    alignContent != null && typeof alignContent === "string"
      ? { alignContent: alignContent }
      : typeof alignContent === "object" &&
          createResponsiveStyle(
            "alignContent",
            alignContent.sm,
            alignContent.md
          ),
    gridAutoColumns != null && typeof gridAutoColumns === "string"
      ? { gridAutoColumns: gridAutoColumns }
      : typeof gridAutoColumns === "object" &&
          createResponsiveStyle(
            "gridAutoColumns",
            gridAutoColumns.sm,
            gridAutoColumns.md
          ),
    gridAutoRows != null && typeof gridAutoRows === "string"
      ? { gridAutoRows: gridAutoRows }
      : typeof gridAutoRows === "object" &&
          createResponsiveStyle(
            "gridAutoRows",
            gridAutoRows.sm,
            gridAutoRows.md
          ),
    gridAutoFlow != null && typeof gridAutoFlow === "string"
      ? { gridAutoFlow: gridAutoFlow }
      : typeof gridAutoFlow === "object" &&
          createResponsiveStyle(
            "gridAutoFlow",
            gridAutoFlow.sm,
            gridAutoFlow.md
          ),
    gridColumn != null && typeof gridColumn === "string"
      ? { gridColumn: gridColumn }
      : typeof gridColumn === "object" &&
          createResponsiveStyle("gridColumn", gridColumn.sm, gridColumn.md),
    gridRow != null && typeof gridRow === "string"
      ? { gridRow: gridRow }
      : typeof gridRow === "object" &&
          createResponsiveStyle("gridRow", gridRow.sm, gridRow.md)
  );
};

export const gridChildrenMixin = ({
  gridTemplateColumns,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  gridColumn,
  gridRow,
  girdArea,
  justifySelf,
  alignSelf,
  placeSelf,
}: Partial<GridChildrenProps>) => {
  return css(
    gridTemplateColumns != null && typeof gridTemplateColumns === "string"
      ? { gridTemplateColumns: gridTemplateColumns }
      : typeof gridTemplateColumns === "object" &&
          createResponsiveStyle(
            "gridTemplateColumns",
            gridTemplateColumns.sm,
            gridTemplateColumns.md
          ),
    gridColumnStart != null && typeof gridColumnStart === "string"
      ? { gridColumnStart: gridColumnStart }
      : typeof gridColumnStart === "object" &&
          createResponsiveStyle(
            "gridColumnStart",
            gridColumnStart.sm,
            gridColumnStart.md
          ),
    gridColumnEnd != null && typeof gridColumnEnd === "string"
      ? { gridColumnEnd: gridColumnEnd }
      : typeof gridColumnEnd === "object" &&
          createResponsiveStyle(
            "gridColumnEnd",
            gridColumnEnd.sm,
            gridColumnEnd.md
          ),
    gridRowStart != null && typeof gridRowStart === "string"
      ? { gridRowStart: gridRowStart }
      : typeof gridRowStart === "object" &&
          createResponsiveStyle(
            "gridRowStart",
            gridRowStart.sm,
            gridRowStart.md
          ),
    gridRowEnd != null && typeof gridRowEnd === "string"
      ? { gridRowEnd: gridRowEnd }
      : typeof gridRowEnd === "object" &&
          createResponsiveStyle("gridRowEnd", gridRowEnd.sm, gridRowEnd.md),
    gridColumn != null && typeof gridColumn === "string"
      ? { gridColumn: gridColumn }
      : typeof gridColumn === "object" &&
          createResponsiveStyle("gridColumn", gridColumn.sm, gridColumn.md),
    gridRow != null && typeof gridRow === "string"
      ? { gridRow: gridRow }
      : typeof gridRow === "object" &&
          createResponsiveStyle("gridRow", gridRow.sm, gridRow.md),
    girdArea != null && typeof girdArea === "string"
      ? { girdArea: girdArea }
      : typeof girdArea === "object" &&
          createResponsiveStyle("girdArea", girdArea.sm, girdArea.md),
    justifySelf != null && typeof justifySelf === "string"
      ? { justifySelf: justifySelf }
      : typeof justifySelf === "object" &&
          createResponsiveStyle("justifySelf", justifySelf.sm, justifySelf.md),
    alignSelf != null && typeof alignSelf === "string"
      ? { alignSelf: alignSelf }
      : typeof alignSelf === "object" &&
          createResponsiveStyle("alignSelf", alignSelf.sm, alignSelf.md),
    placeSelf != null && typeof placeSelf === "string"
      ? { placeSelf: placeSelf }
      : typeof placeSelf === "object" &&
          createResponsiveStyle("placeSelf", placeSelf.sm, placeSelf.md)
  );
};
