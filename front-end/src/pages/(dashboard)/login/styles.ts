import { Box, Grid, styled } from "@mui/material";

export const WhapperPageLogin = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.background,
    height: "100vh",
    width: "100%"
}));

export const ContainerCardLogin = styled(Grid)({
    width: "18rem",
    padding: "1rem"
});