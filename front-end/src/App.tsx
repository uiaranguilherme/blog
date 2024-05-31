/** @format */

import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Pages from "./pages";
import useTheme from "./theme";
import { Filter, Loading } from "./components";
import { useLoadingContext } from "./hooks";

export default () => {
  var { theme } = useTheme();
  var { isLoading } = useLoadingContext();
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading open={true} />}>
        <CssBaseline />
        <Filter opacity={5} src="/gif/noise.gif" />
        <RouterProvider router={Pages} />
      </Suspense>
      <Loading open={isLoading} />
    </ThemeProvider>
  );
};
