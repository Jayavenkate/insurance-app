import { Button, Grid, styled } from "@mui/material";

export const Header = styled("h4")(({ theme }) => ({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3061",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    width: "350px",
  },
}));
export const RigtContentHeader = styled("h4")({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
});

export const Description = styled("p")(({ theme }) => ({
  fontFamily: " Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    width: "330px",
  },
}));

export const LeftButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  border: "1px solid black",
  borderRadius: "35px",
  width: "170px",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));

export const LeftButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
}));
export const GridWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const DivWrapper = styled("div")({
  maxWidth: "600px",
});
export const ImageWrapper = styled("img")({
  padding: "20px 0px",
});
export const DivContainer = styled("div")({
  position: "absolute",
  width: "300px",
  textAlign: "center",
});
