import { Card, Grid, styled } from "@mui/material";

export const Header = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3161",
  marginBottom: "0px",
});

export const Description = styled("p")({
  fontFamily: "  Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#FFFFFF",
  width: "300px",
});
export const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "#B79C75",
  maxWidth: "1000px",
  margin: "90px auto",
  borderRadius: "35px",
  height: "230px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "40px",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));
