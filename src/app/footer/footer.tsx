import { Button, Card, Grid } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Address,
  Content,
  Description,
  DivAddressWrapper,
  GridRightWrapper,
  GridWrapper,
  Header,
  IconsWrapper,
  MailText,
} from "./footer.styled";

const Footer = () => {
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
  const renderimage = () => {
    return (
      <IconsWrapper>
        <img src="./image/Facebook.png" />
        <img src="./image/Instagram.png" />
        <img src="./image/Twitter.png" />
        <img src="./image/linkedin.png" />
      </IconsWrapper>
    );
  };
  return (
    <>
      {data.map((item: any, id: number) => (
        <div key={id}>
          <Grid container spacing={2} sx={{ marginTop: "50px" }} >
            <GridWrapper item xs={12} md={6}>
              <div>
                <img src="./image/Logo.png" />
                <Description>
                  {item?.attributes.footers.data[0].attributes.description}
                </Description>
                <MailText>
                  {item?.attributes.footers.data[0].attributes.mailtext}
                </MailText>
                {renderimage()}
              </div>
            </GridWrapper>
            <GridRightWrapper item xs={12} md={6}>
              <div style={{ display: "flex" }}>
                <img
                  src="./image/mapicon.png"
                  style={{ objectFit: "contain" }}
                />
                <Address>
                  {item?.attributes.footers.data[0].attributes.address}
                </Address>
              </div>
            </GridRightWrapper>
          </Grid>

          <DivAddressWrapper>
            <div>
              <Header>
                {item?.attributes.footerpages.data[0].attributes.header}
              </Header>
              <Content>
                {item?.attributes.footerpages.data[0].attributes.nav1}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[0].attributes.nav2}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[0].attributes.nav3}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[0].attributes.nav4}
              </Content>
            </div>
            <div>
              <Header>
                {item?.attributes.footerpages.data[1].attributes.header}
              </Header>
              <Content>
                {item?.attributes.footerpages.data[1].attributes.nav1}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[1].attributes.nav2}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[1].attributes.nav3}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[1].attributes.nav4}
              </Content>
            </div>
            <div>
              <Header>
                {item?.attributes.footerpages.data[2].attributes.header}
              </Header>
              <Content>
                {item?.attributes.footerpages.data[2].attributes.nav1}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[2].attributes.nav2}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[2].attributes.nav3}
              </Content>
              <Content>
                {item?.attributes.footerpages.data[2].attributes.nav4}
              </Content>
            </div>
          </DivAddressWrapper>
        </div>
      ))}
    </>
  );
};
export default Footer;
