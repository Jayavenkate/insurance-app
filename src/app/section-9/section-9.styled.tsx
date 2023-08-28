import { Grid, styled } from "@mui/material";

export const Header = styled("p")(({ theme }) => ({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3161",
  width: "490px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
    fontSize: "28px",
    margin: 0,
  },
}));

export const Description = styled("p")(({ theme }) => ({
  fontFamily: "Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3161",
  width: "490px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
    fontSize: "12px",
  },
}));

export const Frame2header = styled("h3")(({ theme }) => ({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "24px",
  color: "#1E3161",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));
export const Frame2description = styled("h3")({
  fontFamily: "Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3161",
  width: "180px",
  margin: "0px",
});
export const Frame5number = styled("h3")({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3161",
  marginBottom: "0px ",
});
export const Frame5text = styled("p")({
  fontFamily: "Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3161",
  marginTop: "0px",
});
export const ButtonWraper = styled("div")({
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "20px",
  textTransform: "none",
  color: "#1E3061",
  textAlign: "center",
  border: "1px solid black",
  borderRadius: "35px",
  width: "200px",
  padding: "10px 10px",
});

export const GridWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ImageWrapper = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
}));
export const GridRightWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));
export const DivWrapper = styled("div")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "space-around",
});

export const DivWrapperContenht = styled("div")({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  justifyContent: "center",
});
