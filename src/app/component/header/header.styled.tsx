import { Typography, styled } from "@mui/material";

export const ButtonWraper = styled("div")({
  fontFamily: "Nunito",
  fontWeight: 400,
  fontSize: "17px",
  textTransform: "none",
  color: "#1E3061",
  margin: "0px 10px",
});
export const ButtonContainer = styled("div")({
  display: "flex",
  gap: "20px",
  margin: "0px 10px",
});
export const TitleContainer = styled(Typography)({
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "40px",
  color: "#1E3061",
  flexGrow: 1,
});
export const RightButton = styled("div")({
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "16px",
  background: "#1E3061",
  color: "#FFFFFF",
  margin: "0px 10px",
  padding: "10px",
});
