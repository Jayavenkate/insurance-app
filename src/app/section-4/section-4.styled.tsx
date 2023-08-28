import { Button, Grid, styled } from "@mui/material";

export const ButtonWrapper = styled(Button)({
  textTransform: "none",
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  border: "1px solid black",
  borderRadius: "35px",
  width: "170px",
});

export const Title = styled("p")(({ theme }) => ({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3061",
  width: "650px",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    width: "350px",
  },
}));

export const SubTitle = styled("p")(({ theme }) => ({
  fontFamily: "  Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  width: "500px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    width: "350px",
  },
}));
export const GridWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
 
});
export const GridWrapperLeft = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
});

export const ContentLeft = styled("p")({
  fontFamily: "  Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  width: "350px",
});
export const Review = styled("p")({
  fontFamily: "  Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
});
