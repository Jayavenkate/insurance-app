import { AppBar, Button, Typography, styled } from "@mui/material";

export const ButtonWraper = styled(Button)({
  fontFamily: "Nunito",
  fontWeight: 400,
  fontSize: "17px",
  textTransform: "none",
  color: "#1E3061",
  margin: "0px 10px",
});
export const DivWraper = styled("div")({
  padding: "10px 0px",
  margin: "10px 0px",
});

export const TitleContainer = styled(Typography)({
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "40px",
  color: "#1E3061",
  flexGrow: 1,
});
export const RightButton = styled(Button)({
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "16px",
  background: "#1E3061",
  color: "#FFFFFF",
  margin: "0px 10px",
  padding: "10px",
});

export const AppBarWraper = styled(AppBar)({
  background: "none",
  boxShadow: "none",
});

export const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  margin: "0px 10px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
