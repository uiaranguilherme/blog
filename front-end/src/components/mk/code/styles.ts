import { Box, darken, lighten, styled } from "@mui/material";

export const WhapperCode = styled(Box)(({ theme }) => ({
  borderRadius: "2px",
  ...(theme.palette.mode === "light"
    ? {
        backgroundColor: lighten(theme.palette.secondary.main, 0.7),
      }
    : {
        backgroundColor: darken(theme.palette.secondary.main, 0.7),
      }),
}));

export const ContainerCode = styled("pre")(({ theme }) => ({
  padding: "0 0.5rem 0.5rem 0.5rem",
  counterReset: "line",

  span: {
    counterIncrement: "line",
  },

  "span:before": {
    content: "counter(line)",
    display: "inline-block",
    width: "1em",
    textAlign: "right",
    marginRight: "1em",
    ...(theme.palette.mode === "light"
      ? {
          color: theme.palette.grey[500],
        }
      : {
          color: theme.palette.grey[700],
        }),
  },
}));

export const PathCode = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "2px 2px 0 0",
  padding: "0.2rem",
  marginBottom: "0.5rem",
  fontSize: "1.1rem",
  svg: {
    marginRight: "0.5rem",
  },
  ...(theme.palette.mode === "light"
    ? {
        color: theme.palette.grey[50],
        backgroundColor: lighten(theme.palette.primary.main, 0),
      }
    : {
        color: theme.palette.grey[200],
        backgroundColor: theme.palette.primary.main,
      }),
}));
