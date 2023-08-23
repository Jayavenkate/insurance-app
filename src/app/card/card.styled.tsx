import { styled } from "@mui/material";

export const CardHeader = styled("p")({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "16px",
  color: " #FFFFFF",
});

export const CardDescription = styled("p")({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "24px",
  color: " #FFFFFF",
});

export const CardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const CardWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "35px",
  marginTop: "80px",
});
export const ImageWrapper = styled("img")({
  width: "360px",
});
