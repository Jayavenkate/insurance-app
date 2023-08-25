import { Button, styled } from "@mui/material";

export const ButtonWraper = styled("div")({
  fontFamily: "Marcellus",
  fontWeight: 400,
  fontSize: "16px",
  textTransform: "none",
  color: "#1E3061",
  textAlign: "center",
  border: "1px solid black",
  borderRadius: "35px",
  width: "120px",
  padding: "10px 10px",
  margin: "100px  auto 0px auto",
});
export const Header = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "36px",
  color: "#1E3161",
  textAlign: "center",
});

export const Frame6header = styled("p")({
  fontFamily: "  Marcellus ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3161",
  width: "250px",
  padding: "0px 20px",
});
export const Frame6description = styled("p")({
  fontFamily: "  Nunito ",
  fontWeight: 400,
  fontSize: "16px",
  color: "#1E3161",
  width: "250px",
  padding: "0px 20px",
});

export const ButtonCard = styled(Button)({
    fontFamily: "Marcellus",
    fontWeight: 400,
    fontSize: "16px",
    color: "#1E3061",
    padding: "0px 20px",
  });

  export const Divwrapper = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "55px",
    flexWrap:"wrap"
  });