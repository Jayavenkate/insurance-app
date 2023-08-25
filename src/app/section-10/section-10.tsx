import { Button, Card, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  ButtonCard,
  ButtonWraper,
  Divwrapper,
  Frame6description,
  Frame6header,
  Header,
} from "./section-10.styled";

const SectionTen = () => {
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
  const rendercard = (item: any) => {
    return (
      <div>
        <Frame6header>
          {item?.attributes.section_10s.data[0].attributes.frame6header}
        </Frame6header>
        <Frame6description>
          {item?.attributes.section_10s.data[0].attributes.frame6description}
        </Frame6description>
        <ButtonCard>
          {item?.attributes.section_10s.data[0].attributes.frame6button}
          <ArrowRightAltIcon />
        </ButtonCard>
      </div>
    );
  };
  return (
    <>
      {data.map((item: any, id: number) => (
        <div key={id}>
          <ButtonWraper>
            {item?.attributes.section_10s.data[0].attributes.buttontext}
          </ButtonWraper>
          <Header>
            {item?.attributes.section_10s.data[0].attributes.header}
          </Header>
          <Divwrapper>
            <Card>
              <img src="./image/section10-1.png" />
              {rendercard(item)}
            </Card>
            <Card>
              <img src="./image/section10-2.png" />
              {rendercard(item)}
            </Card>
            <Card>
              <img src="./image/section10-3.png" />
              {rendercard(item)}
            </Card>
          </Divwrapper>
        </div>
      ))}
    </>
  );
};
export default SectionTen;
