import { styled } from "@mui/material";

export const GridRightWrapper = styled("div")(({ theme }) => ({
  margin: "50px  0px 0px 300px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
    textAlign: "center",
    padding:"35px",
    
  },
}));
