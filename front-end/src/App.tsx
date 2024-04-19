/** @format */

import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Pages from "./pages";
import useTheme from "./theme";
import { Filter, Loading } from "./components";

export default () => {
  var { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <CssBaseline />
        <Filter opacity={5} src='/gif/noise.gif' />
        <RouterProvider router={Pages} />
      </Suspense>
    </ThemeProvider>
  );
};
