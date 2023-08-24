import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  DivContainer,
  Divwrapper,
  Title1,
  Title2,
  Title3,
  Title4,
} from "./section-7.styled";

const SectionSeven = () => {
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
      {data.map((item: any,id:number) => (
        <DivContainer key={id}>
          <Divwrapper>
            <img src="./image/icon-1.png" alt="" />
            <Title1>
              {item?.attributes.section_7s.data[3]?.attributes.title}
            </Title1>
          </Divwrapper>
          <Divwrapper>
            <img src="./image/icon-2.png" alt="" />
            <Title2>
              {item?.attributes.section_7s.data[0]?.attributes.title}
            </Title2>
          </Divwrapper>
          <Divwrapper>
            <Title3>
         
              {item?.attributes.section_7s.data[2]?.attributes.title}
            </Title3>
          </Divwrapper>
          <Divwrapper>
            <img src="./image/icon-3.png" alt="" />
            <Title4> {item?.attributes.section_7s.data[1]?.attributes.title}</Title4>
          </Divwrapper>
        </DivContainer>
      ))}
    </>
  );
};
export default SectionSeven;
