import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Description,
  Header,
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
          <Grid item xs={12} md={6}>
            <div style={{ width: "450px" }}>
              <Header>
                {item?.attributes.leftcontents.data[0]?.attributes.title}
              </Header>
              <Description>
                {item?.attributes.leftcontents.data[0]?.attributes.description}
              </Description>
              <img
                src="./image/Play Button.png"
                style={{ padding: "20px 0px" }}
              />
            </div>
            <LeftButtonWrapper style={{ padding: "20px 0px" }}>
              <LeftButton>
                {
                  item?.attributes.leftcontentbuttons.data[0]?.attributes
                    .Button1
                }
              </LeftButton>
              <LeftButton>
                {
                  item?.attributes.leftcontentbuttons.data[0]?.attributes
                    .Button2
                }
              </LeftButton>
              <LeftButton>
                {
                  item?.attributes.leftcontentbuttons.data[0]?.attributes
                    .Button3
                }
              </LeftButton>
            </LeftButtonWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                position: "absolute",
                width: "300px",
                textAlign: "center",
              }}
            >
              <RigtContentHeader>
                {item?.attributes.right_contents.data[0]?.attributes.title}
              </RigtContentHeader>
              <Description>
                {
                  item?.attributes.right_contents.data[0]?.attributes
                    .description
                }
              </Description>
            </div>
            <img src="./image/rightcontent.png" />
          </Grid>
        </Grid>
      ))}
    </>
  );
};
export default Content;
