import { DivWrapper } from "./section-5.styled";

const SectionFive = () => {
  return (
    <DivWrapper>
      <img src="./PlayButton.png" style={{ position: "absolute" }} />
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXGBbw4yMAqKZzbyac2cBFA5pusSvYOkDIQ&usqp=CAU"
      />
    </DivWrapper>
  );
};
export default SectionFive;
