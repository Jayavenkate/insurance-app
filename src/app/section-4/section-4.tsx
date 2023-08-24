import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonWrapper, SubTitle, Title } from "./section-4.styled";

const SectionFour = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/navbars?populate=*",
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
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "100px", marginLeft: "300px" }}
          key={id}
        >
          <Grid>
            <ButtonWrapper>
              {item?.attributes.section_4s.data[0]?.attributes.buttontext}
            </ButtonWrapper>
            <Title>
              {item?.attributes.section_4s.data[0]?.attributes.title}
            </Title>
            <SubTitle>
              {item?.attributes.section_4s.data[0]?.attributes.subtitle}
            </SubTitle>
          </Grid>
          <Grid>
            <p>{item?.attributes.section_4s.data[0]?.attributes.description}</p>
            <img src="./image/Avatar-4.png" />
          </Grid>
        </Grid>
      ))}
    </>
  );
};
export default SectionFour;
