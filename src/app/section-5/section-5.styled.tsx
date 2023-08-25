import { styled } from "@mui/material";

export const DivWrapper = styled("div")(({ theme }) => ({
  marginTop: "50px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    overflowX: "auto",
  },
}));
