import {
  AppBar,
  Box,
  Button,
  lighten,
  ListItemButton,
  Menu,
  styled,
} from "@mui/material";

export const WhapperLayoutDashboard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
});

export const ContainerLayoutDashboard = styled(Box)({
  display: "flex",
  height: "calc(100% - 70px)",
  width: "100%",
});

export const ContentLayoutDashboard = styled(Box)({
  width: "100%",
  overflow: "auto",
});

/** HEADER **/
export const WhapperHeaderMenuLayoutDashboard = styled(AppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  maxHeight: "70px",
  height: "70px",
  padding: "0 9px",
  backgroundColor: theme.palette.primary.background,
  borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
}));

export const Logo = styled("img")({});

export const WhapperUserMenuLayoutDashboard = styled(Box)({});

export const WhapperMenuUserLayoutDashboard = styled(Menu)({
  svg: {
    marginRight: "1rem",
  },
});

/** NAV **/
export const WhapperNavLayoutDashboard = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.primary.background,
  borderRight: `1px solid ${theme.palette.primary.contrastText}`,
  padding: "10px 0px",
  minWidth: "12rem",
}));

export const NavListLayoutDashboard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: "1",
});

export const NavItemList = styled(ListItemButton)<{ active: boolean }>(
  ({ theme, active }) => ({
    cursor: "pointer",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    padding: "10px 8px",
    ...(active
      ? {
          backgroundColor: theme.palette.grey["100"],
          color: theme.palette.primary.main,

          svg: {
            color: theme.palette.primary.main,
          },
        }
      : {
          "&:hover": {
            backgroundColor: theme.palette.grey["100"],
            color: theme.palette.primary.main,

            svg: {
              color: theme.palette.primary.main,
            },
          },
          svg: {
            color: theme.palette.grey["800"],
          },
        }),
    svg: {
      fontSize: "1.5rem",
      marginRight: "0.5rem",
    },
  })
);
