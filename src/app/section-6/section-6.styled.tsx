import { Grid, styled } from "@mui/material";

export const Divwrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
});

export const Header = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
});
export const Description = styled("p")({
  fontFamily: "  Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  width: "350px",
});

export const GridWrapper = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const GridContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled("h2")(({ theme }) => ({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3061",
  textAlign: "center",
  width: "640px",
  margin: "0 auto",
  marginTop: "40px",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    width:"350px"
  },
}));
