import { Box, styled, Toolbar, Typography } from "@mui/material";

export const ModalMenuAddPost = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.background,
}));

export const ModalMenuAddPostTitle = styled(Typography)({});

export const ModalMenuAddPostActions = styled(Box)({
  button: {
    marginLeft: "1rem",
  },
});

export const ModalContentAddNewPost = styled(Box)({
  padding: "1rem",
  overflow: "auto",
});
