/*
 * Copyright (c) 2023.
 * File Name: typography.ts
 * Author: Coderthemes
 */
import themeGrid from "@src/theme/grid";
import { Typography } from "@mui/material/styles/createTypography";
import { Breakpoint } from "@mui/system/createTheme/createBreakpoints";
import { AllSystemCSSProperties } from "@mui/system/styleFunctionSx/styleFunctionSx";

const grid = themeGrid().values!;

const responsiveFontSizes = (props: { [K in Breakpoint]?: number }) => {
  const sizes: { [key: string]: { fontSize: number } } = {};
  (Object.entries(props) as [Breakpoint, number][]).map(([k, v]) => {
    sizes[`@media (min-width:${grid[k]}px)`] = { fontSize: v };
  });
  return sizes;
};

const themeTypography = (): Omit<Typography, "pxToRem" | "htmlFontSize"> => {
  return {
    // fontFamily: "'Space Grotesk','Roboto', sans-serif",
    // fontFamily: "'Figtree','Roboto', sans-serif",
    fontFamily: "'Poppins','Roboto', sans-serif", // To use another font
    fontSize: 13, fontWeightLight: 300, fontWeightRegular: 400, fontWeightMedium: 500, fontWeightBold: 600, h1: {
      fontSize: 34, fontWeight: 500, lineHeight: 1.1
    }, h2: {
      fontSize: 28, fontWeight: 500, lineHeight: 1.1
    }, h3: {
      fontSize: 21, fontWeight: 500, lineHeight: 1.1
    }, h4: {
      fontSize: 18, fontWeight: 500, lineHeight: 1.1
    }, h5: {
      fontSize: 16, fontWeight: 500, lineHeight: 1.1
    }, h6: {
      fontSize: 14, fontWeight: 500, lineHeight: 1.1
    }, subtitle1: {
      fontSize: 16, lineHeight: 1.5, ...responsiveFontSizes({ xl: 15 })
    }, subtitle2: {
      fontSize: 15, lineHeight: 1.32, fontWeight: 500, ...responsiveFontSizes({ xl: 13 })
    }, body1: {
      fontSize: 14, lineHeight: 1.5, ...responsiveFontSizes({ xl: 13 })
    }, body2: {
      fontSize: 13, lineHeight: 1.4, ...responsiveFontSizes({ xl: 12 })
    }, button: {
      fontSize: 14, lineHeight: 1.5, fontWeight: 500, textTransform: "none", ...responsiveFontSizes({ xl: 14 })
    }, caption: {
      fontSize: 11, lineHeight: 1.5
    }, overline: {
      fontSize: 11, lineHeight: 1.5
    }
  };
};

export default themeTypography;
