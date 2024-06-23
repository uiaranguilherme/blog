import { DialogTitle, Grid, styled } from "@mui/material";

export const ModalTitle = styled(DialogTitle)({
  height: "3.5rem",
});

export const WhapperModalInfoPost = styled(Grid)({
  width: "100%",
  //height: "400px",
  padding: "10px",
  //overflow: "auto",
  margin: "0px",
});

export const ModalInfoPostWhapperTags = styled("fieldset")(({ theme }) => ({
  display: "flex",
  borderRadius: "3px",
  border: `1px solid ${theme.palette.grey["400"]}`,

  legend: {
    color: theme.palette.grey["600"],
  },
}));
