import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ButtonWrapper,
  ContentLeft,
  GridWrapper,
  GridWrapperLeft,
  Review,
  SubTitle,
  Title,
} from "./section-4.styled";

const SectionFour = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "https://insuranceapp.onrender.com/api/homepages?populate=*",
          {
            headers: {
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );

        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      {data.map((item: any, id: number) => (
        <Grid container spacing={2} sx={{ marginTop: "50px" }} key={id}>
          <GridWrapper item xs={12} md={6}>
            <div>
              <ButtonWrapper>
                {item?.attributes.section_4s.data[0]?.attributes.buttontext}
              </ButtonWrapper>
              <Title>
                {item?.attributes.section_4s.data[0]?.attributes.title}
              </Title>
              <SubTitle>
                {item?.attributes.section_4s.data[0]?.attributes.subtitle}
              </SubTitle>
            </div>
          </GridWrapper>
          <GridWrapperLeft item xs={12} md={6}>
            <ContentLeft>
              {item?.attributes.section_4s.data[0]?.attributes.description}
            </ContentLeft>
            <img src="./image/Avatar-4.png" />
            <Review>
              {item?.attributes.section_4s.data[0]?.attributes.reviewtext}
            </Review>
            <Review>
              {item?.attributes.section_4s.data[0]?.attributes.reviewsubcontent}
            </Review>
          </GridWrapperLeft>
        </Grid>
      ))}
    </>
  );
};
export default SectionFour;
