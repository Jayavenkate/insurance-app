import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Description,
  DivContainer,
  DivWrapper,
  GridWrapper,
  Header,
  ImageWrapper,
  LeftButton,
  LeftButtonWrapper,
  RigtContentHeader,
} from "./content.styled";

const Content = () => {
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
    <div>
      {data.map((item: any, id: number) => (
        <Grid container spacing={2} sx={{ marginTop: "50px" }} key={id}>
          <GridWrapper item xs={12} md={6}>
            <DivWrapper>
              <Header>
                {item?.attributes.leftcontents.data[0]?.attributes.title}
              </Header>
              <Description>
                {item?.attributes.leftcontents.data[0]?.attributes.description}
              </Description>
              <ImageWrapper src="./image/PlayButton.png" />

              <LeftButtonWrapper>
                <LeftButton>
                  {
                    item?.attributes.leftcontents.data[0]?.attributes
                      .Button1
                  }
                </LeftButton>
                <LeftButton>
                  {
                    item?.attributes.leftcontents.data[0]?.attributes
                      .Button2
                  }
                </LeftButton>
                <LeftButton>
                  {
                    item?.attributes.leftcontents.data[0]?.attributes
                      .Button3
                  }
                </LeftButton>
              </LeftButtonWrapper>
            </DivWrapper>
          </GridWrapper>
          <GridWrapper item xs={12} md={6}>
            <DivContainer>
              <RigtContentHeader>
                {item?.attributes.right_contents.data[0]?.attributes.title}
              </RigtContentHeader>
              <Description>
                {
                  item?.attributes.right_contents.data[0]?.attributes
                    .description
                }
              </Description>
            </DivContainer>
            <img src="./image/rightcontent.png" />
          </GridWrapper>
        </Grid>
      ))}
    </div>
  );
};
export default Content;
