import { Grid, styled } from "@mui/material";

export const Divwrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
}));
export const GridWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
}));

export const Header = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
});

export const Description = styled("p")(({ theme }) => ({
  fontFamily: "  Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  width: "350px",
  [theme.breakpoints.down("md")]: {
    width: "280px",
    fontSize: "12px",
  },
}));
export const GridContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
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
    width: "350px",
  },
}));

export const Imagewrapper = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    objectFit: "contain",
    width: "350px",
  },
}));
