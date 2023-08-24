import { Button, Card, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Address,
  Content,
  Description,
  Header,
  MailText,
} from "./footer.styled";

const Footer = () => {
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
  const renderimage = () => {
    return (
      <div>
        <img src="./image/Facebook.png" />
        <img src="./image/Instagram.png" />
        <img src="./image/Twitter.png" />
        <img src="./image/linkedin.png" alt="" />
      </div>
    );
  };
  return (
    <>
      {data.map((item: any, id: number) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={id}
        >
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <Address>
                {item?.attributes.footers.data[0].attributes.address}
              </Address>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Footer;
