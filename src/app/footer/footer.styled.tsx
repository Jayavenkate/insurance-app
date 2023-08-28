import { Button, Grid, styled } from "@mui/material";

export const Description = styled("p")({
  fontFamily: " Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  width: "350px",
});
export const MailText = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "24px",
  color: "#1E3061",
});
export const Address = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "24px",
  color: "#1E3061",
  width: "330px",
});

export const Header = styled("h4")({
  fontFamily: "Marcellus ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  borderBottom: "1px solid",
  width: "15px",
  borderColor: "#B79C75",
});
export const Content = styled("h4")({
  fontFamily: "Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3061",
  margin: "5px auto 0px auto",
});

export const GridWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
export const GridRightWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const DivWrapper = styled("div")({
  width: "600px",
});

export const IconsWrapper = styled(Grid)({
  display: "flex",
  gap: "20px",
});

export const DivAddressWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "60px",
  marginLeft: "470px",
  alignItems: "flex-start",
  justifyContent: "center",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    gap: "20px",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
}));
