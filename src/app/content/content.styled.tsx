import { Button, styled } from "@mui/material";

export const Header = styled("h4")({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3061",
});
export const RigtContentHeader = styled("h4")({
    fontFamily: "Marcellus ",
    fontWeight: 400,
    fontSize: "16px",
    color: "#1E3061",
  });
export const Description = styled("p")({
  fontFamily: " Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
});

export const LeftButton = styled(Button)({
  textTransform: "none",
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  border: "1px solid black",
  borderRadius: "35px",
  width:"170px"
});
export const LeftButtonWrapper = styled("div")({
  display: "flex",
  gap: "20px",
  padding: "10px 0px",
});
