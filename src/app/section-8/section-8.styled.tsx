import { Button, styled } from "@mui/material";

export const Title = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "20px",
  color: "#1E3161",
  textAlign: "center",
  border: "1px solid black",
  borderRadius: "35px",
  width: "150px",
  margin: "50px auto",
  padding: "10px",
});
export const Header = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3161",
  textAlign: "center",
});

export const Divwrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "55px",
  flexWrap: "wrap",
});
export const DivContent = styled("div")({
  textAlign: "center",
});
