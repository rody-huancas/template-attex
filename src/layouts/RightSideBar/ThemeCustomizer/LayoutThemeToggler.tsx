/*
 * Copyright (c) 2023.
 * File Name: LayoutThemeToggler.tsx
 * Author: Coderthemes
 */

import { FormControlLabel, FormGroup, Stack, Switch, Typography } from "@mui/material";
import { LayoutTheme } from "@src/types";
import { Box } from "@mui/system";
import { LuMoon, LuSun } from "react-icons/lu";

type LayoutThemeProps = {
  handleChangeLayoutTheme: (value: LayoutTheme) => void; layoutTheme: LayoutTheme;
};

const LayoutThemeToggler = ({ handleChangeLayoutTheme, layoutTheme }: LayoutThemeProps) => {
  return (<>
    <div>
      <Typography variant={"subtitle2"} fontWeight={500}>Theme</Typography>

      <Stack direction={"row"} gap={2} mt={1}>
        <Box sx={{
          border: 1,
          display: "inline-flex",
          p: 1.5,
          borderColor: "divider",
          borderRadius: 1,
          cursor: "pointer",
          "&:hover": layoutTheme=='light'?{}:{ backgroundColor: "grey.200", borderColor:"grey.200"},
          ...(layoutTheme=='light'?{backgroundColor: "primary.lighter", borderColor:"primary.lighter", color:"primary.darker"}:{})
        }} onClick={() => handleChangeLayoutTheme("light")}>
          <LuSun size={24} />
        </Box>
        <Box sx={{
          border: 1,
          display: "inline-flex",
          p: 1.5,
          borderColor: "divider",
          borderRadius: 1,
          cursor: "pointer",
          "&:hover": layoutTheme=='dark'?{}:{ backgroundColor: "grey.200", borderColor:"grey.200"},
          ...(layoutTheme=='dark'?{backgroundColor: "primary.lighter", borderColor:"primary.lighter", color:"primary.darker"}:{})
        }} onClick={() => handleChangeLayoutTheme("dark")}>
          <LuMoon size={24} />
        </Box>
      </Stack>
    </div>
  </>);
};

export default LayoutThemeToggler;
