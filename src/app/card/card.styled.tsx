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
  position: "absolute",
});

export const CardWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "80px",
  flexWrap: "wrap",
  gap: "50px",
});

export const ImageWrapper = styled("img")(({ theme }) => ({
  width: "400px",
  [theme.breakpoints.down("md")]: {
    width: "360px",
  },
}));
export const DivWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
