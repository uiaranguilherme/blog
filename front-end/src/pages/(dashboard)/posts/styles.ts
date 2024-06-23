import { Box, styled } from "@mui/material";

export const WhapperPostsDashboard = styled(Box)({
  width: "100%",
  minHeight: "calc(100vh - 70px)",
  padding: "2rem 0",
});
export const HeaderPostsDashboard = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  padding: "0 2rem",
});
export const ContainerPostsDashboard = styled(Box)(({ theme }) => ({
  padding: "1rem",
  display: "grid",
  maxWidth: "100%",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "space-around",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));
export const FooterPostDashboard = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
