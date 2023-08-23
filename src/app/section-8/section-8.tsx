import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ButtonWraper,
  DivContent,
  Divwrapper,
  Header,
  Title,
} from "./section-8.styled";

const SectionEight = () => {
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
      </div>
    );
  };

  return (
    <>
      {data.map((item: any) => (
        <div>
          <div>
            <ButtonWraper>
              <Title>
                {item?.attributes.section_8s.data[0].attributes.text}
              </Title>
            </ButtonWraper>
            <Header>
              {item?.attributes.section_8s.data[0].attributes.header}
            </Header>
          </div>
          <Divwrapper>
            <DivContent>
              <img src="./image/Avatar-1.png" />
              <p>{item?.attributes.section_8s.data[1].attributes.text}</p>
              <p>{item?.attributes.section_8s.data[1].attributes.header}</p>
              <div>{renderimage()}</div>
            </DivContent>
            <DivContent>
              <img src="./image/Avatar-2.png" />
              <p>{item?.attributes.section_8s.data[3].attributes.text}</p>
              <p>{item?.attributes.section_8s.data[3].attributes.header}</p>
              <div>{renderimage()}</div>
            </DivContent>
            <DivContent>
              <img src="./image/Avatar-3.png" />
              <p>{item?.attributes.section_8s.data[2].attributes.text}</p>
              <p>{item?.attributes.section_8s.data[2].attributes.header}</p>
              <div>{renderimage()}</div>
            </DivContent>
          </Divwrapper>
        </div>
      ))}
    </>
  );
};
export default SectionEight;
